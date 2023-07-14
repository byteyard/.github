# Github Issue Template Creation

Please help me to optimize my `Current Forms`.

## GitHub form resources

* https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms
* https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema

## Detailed Task Description

* The forms shall be as concise as possible and as comprehensive as necessary.
* Make extensive use of `type: markdown` to explain the form user what to do.


## Current Forms

* 📋 Project Management: This template will be used for all project-related tasks, including project planning, tracking, and management.
* 🪲 Bug Report: This template will be used for reporting bugs or issues.
* 🏆 Feature Request: This template will be used for proposing new features.
* 🌟 Improvement Proposal: This template will be used for suggesting enhancements to existing features or processes.
* 🔭 Research/Exploration: This template will be used for tasks that require initial research or exploration.
* 🤖 Testing: This template will be used for tasks related to testing (unit, integration, etc.).
* 💾 Dependency: This template will be used for issues related to third-party libraries, tools, or system integrations.
* 🌈 Design: This template will be used for tasks that require design input or are related to UI/UX.
* 📝 Documentation: This template will be used for tasks related to the creation or update of documentation.

## Example

```yaml
name: '🪲 Bug Report'
description: 'This template will be used for reporting bugs or issues.'
labels: ['Type: Bug Report 🪲']
assignees:
  - octocat
body:
  - type: markdown
    attributes:
      value: |
        ## Describe the bug
        A clear and concise description of what the bug is.
  - type: textarea
    attributes:
      label: Steps to reproduce
      description: Provide a detailed list of steps that reproduce the issue.
      placeholder: |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See error
    validations:
      required: true
  - type: textarea
    attributes:
      label: Expected behavior
      description: Describe what you expected to happen.
      placeholder: "When I do ..., I expect ..."
    validations:
      required: true
  - type: dropdown
    attributes:
      label: Device
      description: Please select the device where the bug was encountered.
      options:
        - Desktop
        - Tablet
        - Mobile
    validations:
      required: true
  - type: dropdown
    attributes:
      label: OS
      description: Please select the operating system where the bug was encountered.
      options:
        - Windows
        - MacOS
        - Linux
        - Other
    validations:
      required: true
  - type: dropdown
    attributes:
      label: Browser
      description: Please select the browser where the bug was encountered.
      options:
        - Chrome
        - Firefox
        - Safari
        - Edge
        - Other
    validations:
      required: true
  - type: input
    attributes:
      label: Browser Version
      description: Please enter the browser version.
      placeholder: "Version 90.0.4430.93 (Official Build) (64-bit)"
    validations:
      required: false    
  - type: textarea
    attributes:
      label: Additional context
      description: Add any other context about the problem here.
      placeholder: "Add any other context or screenshots about the problem here."
    validations:
      required: false
```