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

def update_issue_title(label_prefix, label_name):
    if event_action == "labeled":
        # Add prefix if not already present
        if not issue_title.startswith(label_prefix):
            # Count current open issues with the specified label
            search_api_url = f"https://api.github.com/search/issues?q=repo:{repo}+label:{label_name}+state:open"
            search_response = requests.get(search_api_url, headers=headers).json()
            label_count = search_response['total_count']

            # Format the label count as a four-digit number
            label_number = f"{label_prefix}{label_count + 1:04d}"
            new_title = f"{label_number}: {issue_title}"
    else:
        # Remove prefix if present
        if issue_title.startswith(label_prefix):
            new_title = re.sub(rf'^{label_prefix}\d{{4}}: ', '', issue_title)

    # Update issue title if changed
    if new_title != issue_title:
        update_data = {'title': new_title}
        response = requests.patch(issue_api_url, headers=headers, data=json.dumps(update_data))
        print(response.status_code)
        print(response.json())

if label == 'bug':
    update_issue_title('BUG', 'bug')
elif label == 'enhancement':
    update_issue_title('US', 'enhancement')
