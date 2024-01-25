import argparse
import requests
import re
import json

def update_issue_title(issue_api_url, issue_title, label_prefix, label_name, event_action, headers, append_name):
    if event_action == "labeled":
        # Add prefix and _broadcaster suffix if not already present
        if not re.match(rf'^{label_prefix}\d{{4}}_{append_name}', issue_title):
            # Count current open issues with the specified label
            search_api_url = f"https://api.github.com/search/issues?q=repo:{issue_api_url.split('/issues/')[0][29:]}+label:{label_name}+state:open"
            search_response = requests.get(search_api_url, headers=headers).json()
            label_count = search_response['total_count']

            # Format the label count as a four-digit number with _broadcaster suffix
            label_number = f"{label_prefix}{label_count + 1:04d}_broadcaster"
            new_title = f"{label_number}: {issue_title}"
    else:
        # Remove prefix and _broadcaster suffix if present
        if re.match(rf'^{label_prefix}\d{{4}}_{append_name}', issue_title):
            new_title = re.sub(rf'^{label_prefix}\d{{4}}_{append_name}: ', '', issue_title)

    # Update issue title if changed
    if new_title != issue_title:
        update_data = {'title': new_title}
        response = requests.patch(issue_api_url, headers=headers, data=json.dumps(update_data))
        return response
    return None


def run_update_issue_title():
    token = os.getenv('GITHUB_TOKEN')
    headers = {'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json'}

    issue_number = os.getenv('ISSUE_NUMBER')
    repo = os.getenv('REPOSITORY')
    label = os.getenv('ISSUE_LABEL').lower()
    event_action = os.getenv('EVENT_ACTION')

    issue_api_url = f"https://api.github.com/repos/{repo}/issues/{issue_number}"

    # Fetch the issue details
    issue_response = requests.get(issue_api_url, headers=headers).json()
    issue_title = issue_response['title']
    append_name = 'broadcaster'  # Define the append name

    if label == 'bug':
        response = update_issue_title(issue_api_url, issue_title, 'BUG', 'bug', event_action, headers, append_name)
    elif label == 'enhancement':
        response = update_issue_title(issue_api_url, issue_title, 'US', 'enhancement', event_action, headers, append_name)

    if response:
        print(response.status_code)
        print(response.json())


def main():
    parser = argparse.ArgumentParser(description="Issue Title Updater")
    parser.add_argument('--function', type=str, help='Function to run', required=True)

    args = parser.parse_args()

    if args.function == 'update_issue_title':
        run_update_issue_title()
    else:
        print(f"Unknown function: {args.function}")

if __name__ == "__main__":
    main()
