import requests
import os
import json
from issue_utils import update_issue_title  # Import the function from issue_utils.py

def main():
    token = os.getenv('GITHUB_TOKEN')
    repo = os.getenv('REPOSITORY')
    headers = {'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json'}
    issues_api_url = f"https://api.github.com/repos/{repo}/issues"

    page = 1
    while True:
        # Fetch a page of open issues
        params = {'state': 'open', 'page': page, 'per_page': 100}
        response = requests.get(issues_api_url, params=params, headers=headers)
        issues = response.json()

        if not issues:
            break  # Exit loop if no more issues

        for issue in issues:
            if 'pull_request' in issue:  # Skip pull requests
                continue

            issue_number = issue['number']
            issue_title = issue['title']
            issue_api_url = f"{issues_api_url}/{issue_number}"

            # Determine label prefix and name based on the title
            label_prefix, label_name = ('BUG', 'bug') if 'BUG' in issue_title else ('US', 'enhancement')
            event_action = 'labeled'  # Assuming 'labeled' for all issues for this context

            # Call the updated issue title function
            response = update_issue_title(issue_api_url, issue_title, label_prefix, label_name, event_action, headers)
            if response and response.status_code == 200:
                print(f"Issue {issue_number} updated successfully.")

        page += 1  # Move to the next page

if __name__ == "__main__":
    main()
