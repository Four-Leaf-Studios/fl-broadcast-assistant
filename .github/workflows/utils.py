import argparse
import requests
import re
import json
import os

def update_issue_title(issue_api_url, issue_title, label_prefix, label_name, event_action, headers, append_name):
    new_title = issue_title  # Initialize new_title with the original issue_title
    
    if event_action == "labeled":
        # Add prefix and _broadcaster suffix if not already present
        if not re.match(rf'^{label_prefix}\d{{4}}_{append_name}', issue_title):
            # Count current open issues with the specified label
            search_api_url = f"https://api.github.com/search/issues?q=repo:{issue_api_url.split('/issues/')[0][29:]}+label:{label_name}+state:open"
            search_response = requests.get(search_api_url, headers=headers).json()
            label_count = search_response['total_count']

            # Format the label count as a four-digit number with _broadcaster suffix
            label_number = f"{label_prefix}{label_count + 1:04d}_{append_name}"
            new_title = f"{label_number} {issue_title}"  # Removed the colon
    else:
        # Remove any existing append and replace with the correct one
        new_title = re.sub(rf'^{label_prefix}\d{{4}}_[^ ]* ', f'{label_prefix}\\d{{4}}_{append_name} ', issue_title)

    # Update issue title if changed
    if new_title != issue_title:
        update_data = {'title': new_title}
        response = requests.patch(issue_api_url, headers=headers, data=json.dumps(update_data))
        return response
    return None

def update_all_issue_titles(repo, headers):
    issues_api_url = f"https://api.github.com/repos/{repo}/issues"
    page = 1
    while True:
        params = {'state': 'open', 'page': page, 'per_page': 100}
        response = requests.get(issues_api_url, params=params, headers=headers)
        issues = response.json()

        if not issues:
            break

        for issue in issues:
            if 'pull_request' in issue:
                continue

            issue_number = issue['number']
            issue_title = issue['title']
            issue_api_url = f"{issues_api_url}/{issue_number}"

            # Check if 'US####' or 'BUG####' is present in the title
            label_match = re.search(r'\b(US|BUG)\d{4}\b', issue_title)
            if label_match:
                label = label_match.group(0)
                append_name = 'broadcaster'  # Define the append name

                # Check if '_broadcaster' is missing in the label
                if not re.search(rf'{label}_{append_name}', issue_title):
                    old_label = label_match.group(0)
                    new_label = old_label + "_broadcast"
                    issue_title = re.sub(re.escape(old_label), '', issue_title)
                    response = update_issue_title(issue_api_url, issue_title, label, label.lower(), 'labeled', headers, append_name)
                    if response and response.status_code == 200:
                        print(f"Issue {issue_number} updated successfully.")

        page += 1


def run_update_issue_titles():
    token = os.getenv('GITHUB_TOKEN')
    repo = os.getenv('REPOSITORY')
    headers = {'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json'}

    update_all_issue_titles(repo, headers)

def main():
    parser = argparse.ArgumentParser(description="Issue Title Updater")
    parser.add_argument('--function', type=str, help='Function to run', required=True)

    args = parser.parse_args()

    if args.function == 'update_issue_titles':
        run_update_issue_titles()
    elif args.function == 'update_issue_title':
        run_update_issue_title()
    else:
        print(f"Unknown function: {args.function}")

if __name__ == "__main__":
    main()
