import argparse
import requests
import re
import json
import os

def remove_bug_or_us_number(issue_title):
    # Remove BUG#### or US#### pattern from issue_title
    cleaned_title = re.sub(r'(BUG\d{4}|US\d{4})', '', issue_title)
    return cleaned_title.strip()  # Remove leading/trailing whitespace
    
def update_issue_title(issue_api_url, issue_title, label_prefix, label_name, event_action, headers, append_name):
    if event_action == "unlabeled":
        # Remove US#### or BUG#### pattern and _broadcast (if present) from the issue title
        new_title = remove_bug_or_us_number(issue_title).replace('_' + append_name, '')
    else:
        # Check if the title contains _broadcast and matches the pattern US#### or BUG####
        has_broadcast = re.search(rf'{label_prefix}\d{{4}}_{append_name}', issue_title)

        if has_broadcast:
            # If _broadcast is already present, no need to update
            return None

        new_title = issue_title  # Initialize new_title with the original issue_title

        # Check if the title contains a match for US#### or BUG####
        match = re.search(rf'({label_prefix}\d{{4}}) [^ ]*', issue_title)

        if event_action == "labeled":
            # If there is a match, keep the number the same and append _broadcast
            if match:
                label_number = match.group(1)
                new_title = f"{label_number}_{append_name} {remove_bug_or_us_number(issue_title)}"
            else:
                # Count current open issues with the specified label
                search_api_url = f"https://api.github.com/search/issues?q=repo:{issue_api_url.split('/issues/')[0][29:]}+label:{label_name}+state:all"
                search_response = requests.get(search_api_url, headers=headers).json()
                label_count = search_response['total_count']

                # Format the label count as a four-digit number with _broadcast suffix
                label_number = f"{label_prefix}{label_count + 1:04d}"
                new_title = f"{label_number}_{append_name} {issue_title}"
        else:
            # If there is a match, keep the number the same and append _broadcast
            if match:
                label_number = match.group(1)
                new_title = f"{label_number}_{append_name}"

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
    else:
        response = update_issue_title(issue_api_url, issue_title, '', '', event_action, headers, append_name)
    if response:
        print(response.status_code)
        print(response.json())
        
def update_all_issue_titles(repo, headers):
    page = 1
    while True:
        # Fetch a page of issues from the repository
        issues_api_url = f"https://api.github.com/repos/{repo}/issues?state=all&page={page}"
        issues_response = requests.get(issues_api_url, headers=headers)

        # Check if there are more pages of issues
        if issues_response.status_code == 200:
            issues_data = issues_response.json()
            if len(issues_data) == 0:
                break  # No more issues, exit the loop

            # Iterate through the issues on the current page
            for issue in issues_data:
                issue_number = issue['number']
                
                # Check if the 'labels' list is not empty before accessing its elements
                if 'labels' in issue and issue['labels']:
                    label = issue['labels'][0]['name'].lower()
                else:
                    label = ''  # or handle the case where 'labels' is empty in the way that suits your needs

                event_action = "labeled"  # You can modify this as needed

                # Fetch the issue details
                issue_api_url = f"https://api.github.com/repos/{repo}/issues/{issue_number}"
                issue_response = requests.get(issue_api_url, headers=headers).json()
                issue_title = issue_response['title']
                append_name = 'broadcaster'  # Define the append name

                # Update the issue title based on label
                if label == 'bug':
                    update_issue_title(issue_api_url, issue_title, 'BUG', 'bug', event_action, headers, append_name)
                elif label == 'enhancement':
                    update_issue_title(issue_api_url, issue_title, 'US', 'enhancement', event_action, headers, append_name)

            page += 1
        else:
            print(f"Failed to fetch issues on page {page}. Status code: {issues_response.status_code}")
            break


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
