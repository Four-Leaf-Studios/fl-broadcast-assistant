import requests
import os
import json
import re

token = os.environ['GITHUB_TOKEN']
headers = {'Authorization': f'token {token}', 'Accept': 'application/vnd.github.v3+json'}

issue_number = os.environ['ISSUE_NUMBER']
repo = os.environ['REPOSITORY']
label = os.environ['ISSUE_LABEL'].lower()
event_action = os.environ['EVENT_ACTION']

issue_api_url = f"https://api.github.com/repos/{repo}/issues/{issue_number}"

# Fetch the issue details
issue_response = requests.get(issue_api_url, headers=headers).json()
issue_title = issue_response['title']

if label == 'bug':
    if event_action == "labeled":
        # Add BUG prefix if not already present
        if not issue_title.startswith('BUG'):
            # Count current open bugs
            search_api_url = f"https://api.github.com/search/issues?q=repo:{repo}+label:bug+state:open"
            search_response = requests.get(search_api_url, headers=headers).json()
            bug_count = search_response['total_count']

            # Format the bug count as a four-digit number
            bug_number = f"BUG{bug_count + 1:04d}"
            new_title = f"{bug_number}: {issue_title}"
    else:
        # Remove BUG prefix if present
        if issue_title.startswith('BUG'):
            new_title = re.sub(r'^BUG\d{4}: ', '', issue_title)

    # Update issue title if changed
    if new_title != issue_title:
        update_data = {'title': new_title}
        requests.patch(issue_api_url, headers=headers, data=json.dumps(update_data))
        response = requests.patch(issue_api_url, headers=headers, data=json.dumps(update_data))
        print(response.status_code)
        print(response.json())

