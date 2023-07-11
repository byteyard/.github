# Create Issue Templates

Please create Github Issue forms for all reasonable type labels. Make it as comprehensive as possible and 
use checkboxes ("I checked already this and that") and select fields (e.g. device, os, browser, whatever makes sense in the given context) whenever reasonable.

* https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms

Append info to "Template content" to help issue creators to select the right labels (without type labels).

## Template

* Template name: <Add a meaningful name>
* About: <Describe this issue template's purpose here (Styling with Markdown is supported).>
* Template content: <Add template content here (Styling with markdown is supported). This schould be well structured and include all necessary information to describe the task. It should request for links associated with the issue.>
* Issue default title (This will be suggested as the issue title): <Add a placeholder for issue title, ex. [BUG]>
* Labels: <add all applicable labels here.>

## Labels

```json
[
    {
        "name": "Priority: Critical",
        "color": "b60205",
        "description": "Needs immediate attention."
    },
    {
        "name": "Priority: High",
        "color": "d93f0b",
        "description": "Should be resolved ASAP."
    },
    {
        "name": "Priority: Medium",
        "color": "fbca04",
        "description": "Important, not immediately pressing."
    },
    {
        "name": "Priority: Low",
        "color": "0e8a16",
        "description": "Can be resolved when time allows."
    },
    {
        "name": "Type: Project Management",
        "color": "1d76db",
        "description": "Related to project planning and management."
    },
    {
        "name": "Type: Project Bug",
        "color": "1d76db",
        "description": "Something isn't working as expected."
    },
    {
        "name": "Type: Project Feature Request",
        "color": "1d76db",
        "description": "Proposal for a new feature."
    },
    {
        "name": "Type: Project Improvement",
        "color": "1d76db",
        "description": "Enhancements for an existing feature."
    },
    {
        "name": "Type: Project Research",
        "color": "1d76db",
        "description": "Requires initial research."
    },
    {
        "name": "Type: Project Security",
        "color": "1d76db",
        "description": "Related to security concerns."
    },
    {
        "name": "Type: Project Test",
        "color": "1d76db",
        "description": "Related to testing."
    },
    {
        "name": "Type: Project Dependency",
        "color": "1d76db",
        "description": "Issues with third-party libraries or tools."
    },
    {
        "name": "Type: Project Documentation",
        "color": "1d76db",
        "description": "Creation or update of project documentation."
    },
    {
        "name": "Type: Corporate",
        "color": "e83d0f",
        "description": "Related to company registrations and audits."
    },
    {
        "name": "Type: Finance",
        "color": "e83d0f",
        "description": "Related to finance-related tasks."
    },
    {
        "name": "Type: Legal",
        "color": "e83d0f",
        "description": "Related to legal-related tasks."
    },
    {
        "name": "Type: Office Management",
        "color": "e83d0f",
        "description": "Related to office management tasks."
    },
    {
        "name": "Type: HR",
        "color": "e83d0f",
        "description": "Related to HR-related tasks."
    },
    {
        "name": "Type: Strategy",
        "color": "e83d0f",
        "description": "Related to strategy-related tasks."
    },
    {
        "name": "Type: Marketing",
        "color": "e83d0f",
        "description": "Related to marketing-related tasks."
    },
    {
        "name": "Type: Sales",
        "color": "e83d0f",
        "description": "Related to sales-related tasks."
    },
    {
        "name": "Type: Knowledge Management",
        "color": "e83d0f",
        "description": "Tasks related to knowledge management."
    },
    {
        "name": "Development: Backend",
        "color": "5319e7",
        "description": "Portal's backend development."
    },
    {
        "name": "Development: Frontend",
        "color": "5319e7",
        "description": "Portal's frontend development."
    },
    {
        "name": "Development: Performance",
        "color": "5319e7",
        "description": "Performance of the portal."
    },
    {
        "name": "Dependency: Libraries",
        "color": "bfdadc",
        "description": "Third-party libraries required."
    },
    {
        "name": "Dependency: Tools",
        "color": "bfdadc",
        "description": "Third-party tools required."
    },
    {
        "name": "Dependency: Integration",
        "color": "bfdadc",
        "description": "Integrating with other systems."
    },
    {
        "name": "Design: Input Needed",
        "color": "fbca04",
        "description": "Requires design team input."
    },
    {
        "name": "Design: UI/UX",
        "color": "fbca04",
        "description": "Related to UI or UX."
    },
    {
        "name": "Review: Review Needed",
        "color": "88d8b0",
        "description": "Needs a review or approval."
    },
    {
        "name": "Review: Duplicate",
        "color": "88d8b0",
        "description": "Identical to other tasks."
    },
    {
        "name": "Documentation: Update Needed",
        "color": "efb83c",
        "description": "Existing documentation update."
    },
    {
        "name": "Documentation: Creation",
        "color": "efb83c",
        "description": "New documentation creation."
    },
    {
        "name": "HubSpot: User",
        "color": "006b75",
        "description": "User settings or issues in HubSpot."
    },
    {
        "name": "HubSpot: Team Settings",
        "color": "006b75",
        "description": "Team settings in HubSpot."
    },
    {
        "name": "HubSpot: Roles and Permissions",
        "color": "006b75",
        "description": "Roles and permissions in HubSpot."
    },
    {
        "name": "HubSpot: Template",
        "color": "006b75",
        "description": "Template design and issues in HubSpot."
    },
    {
        "name": "HubSpot: Section",
        "color": "006b75",
        "description": "Sections within HubSpot."
    },
    {
        "name": "HubSpot: Module",
        "color": "006b75",
        "description": "Modules within HubSpot."
    },
    {
        "name": "HubSpot: Macro",
        "color": "006b75",
        "description": "HubSpot macros."
    },
    {
        "name": "HubSpot: Tailwind CSS Settings",
        "color": "006b75",
        "description": "Tailwind CSS settings in HubSpot."
    },
    {
        "name": "HubSpot: Custom CSS",
        "color": "006b75",
        "description": "Custom CSS in HubSpot."
    },
    {
        "name": "HubSpot: JS Script",
        "color": "006b75",
        "description": "JS Script issues or settings in HubSpot."
    },
    {
        "name": "HubSpot: JS Dependency",
        "color": "006b75",
        "description": "JavaScript dependencies in HubSpot."
    },
    {
        "name": "HubSpot: HubDB Schema",
        "color": "006b75",
        "description": "HubDB Schema in HubSpot."
    },
    {
        "name": "HubSpot: HubDB Data",
        "color": "006b75",
        "description": "HubDB Data in HubSpot."
    },
    {
        "name": "HubSpot: Object Schema",
        "color": "006b75",
        "description": "Object Schema in HubSpot."
    },
    {
        "name": "HubSpot: Object Data",
        "color": "006b75",
        "description": "Object Data in HubSpot."
    },
    {
        "name": "HubSpot: Object Association",
        "color": "006b75",
        "description": "Association of objects in HubSpot."
    },
    {
        "name": "HubSpot: Object Pipeline",
        "color": "006b75",
        "description": "Object Pipeline in HubSpot."
    },
    {
        "name": "HubSpot: Object Representation",
        "color": "006b75",
        "description": "Representation of objects in HubSpot."
    },
    {
        "name": "HubSpot: Serverless Function",
        "color": "006b75",
        "description": "Serverless functions in HubSpot."
    },
    {
        "name": "HubSpot: Workflow Custom Code Action",
        "color": "006b75",
        "description": "Custom code actions in HubSpot workflow."
    },
    {
        "name": "HubSpot: Pages",
        "color": "006b75",
        "description": "Pages in HubSpot."
    },
    {
        "name": "HubSpot: Forms",
        "color": "006b75",
        "description": "Forms in HubSpot."
    },
    {
        "name": "HubSpot: CTAs",
        "color": "006b75",
        "description": "CTAs in HubSpot."
    },
    {
        "name": "HubSpot: Files",
        "color": "006b75",
        "description": "File handling in HubSpot."
    },
    {
        "name": "HubSpot: Redirects",
        "color": "006b75",
        "description": "Redirects in HubSpot."
    },
    {
        "name": "HubSpot: Domains",
        "color": "006b75",
        "description": "Domain management in HubSpot."
    },
    {
        "name": "HubSpot: Lists",
        "color": "006b75",
        "description": "List management in HubSpot."
    },
    {
        "name": "HubSpot: Campaigns",
        "color": "006b75",
        "description": "Campaigns in HubSpot."
    },
    {
        "name": "HubSpot: Emails and Templates",
        "color": "006b75",
        "description": "Emails and templates in HubSpot."
    },
    {
        "name": "HubSpot: Deals and Quotes",
        "color": "006b75",
        "description": "Deals and quotes in HubSpot."
    },
    {
        "name": "Tools: Figma Jamboard",
        "color": "5b77cc",
        "description": "Planning or designing with Figma Jamboards."
    },
    {
        "name": "Tools: Figma Design",
        "color": "5b77cc",
        "description": "Design work in Figma."
    },
    {
        "name": "Tools: Google Doc",
        "color": "34a853",
        "description": "Documentation in Google Docs."
    },
    {
        "name": "Tools: Google Sheet",
        "color": "34a853",
        "description": "Data organization in Google Sheets."
    },
    {
        "name": "Tools: MS Word",
        "color": "6668d6",
        "description": "Documentation in Microsoft Word."
    },
    {
        "name": "Tools: MS Excel",
        "color": "6668d6",
        "description": "Data organization in Microsoft Excel."
    },
    {
        "name": "Tools: Adobe Illustrator",
        "color": "ff8c00",
        "description": "Design work in Adobe Illustrator."
    },
    {
        "name": "Tools: Adobe InDesign",
        "color": "ff8c00",
        "description": "Layout and design work in Adobe InDesign."
    },
    {
        "name": "Tools: Adobe Photoshop",
        "color": "ff8c00",
        "description": "Image editing in Adobe Photoshop."
    },
    {
        "name": "Tools: VS Code",
        "color": "007acc",
        "description": "Code editing in Visual Studio Code."
    }
]
```