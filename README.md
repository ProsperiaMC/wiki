# Prosperia Wiki Contribution Guide

Welcome! This guide will show you how to contribute to the Prosperia wiki. Even if you have **never used GitHub**, you can follow these steps.

## 1. Getting Started

1. **Create a GitHub account** if you don’t have one: [https://github.com](https://github.com)
2. **Log in** to GitHub.
3. Navigate to the **Prosperia Wiki repository**: [https://github.com/ProsperiaMC/wiki](https://github.com/ProsperiaMC/wiki)

## 2. Understanding the Repository

The repository contains all the documentation for our Minecraft server.

* All wiki pages are inside the `content/` folder.
* Subfolders represent sections of the wiki (e.g., `survival`, `getting-started`).
* Each page is a `.mdx` file. Think of `.mdx` like a Word document for your page.
* `_meta.js` files define the **structure of the sidebar** and ordering of pages.

## 3. Front-Matter in MDX Files

At the top of each `.mdx` file, there is a small section called **front-matter** or **metadata**, enclosed in ``. It tells Nextra how to display the page.

For our wiki, the main properties you need to know are:

```mdx

title: "Economy Survival Rules"
description: "Rules and guidelines for the Economy Survival gamemode, including trading, land claims, and player conduct."
sidebarTitle: "Rules"

```

**What each property does:**

* `title` → The full title of the page, shown at the top of the content.
* `description` → Short summary for SEO and previews; keep it concise.
* `sidebarTitle` → The name that appears in the sidebar for this page. Can be shorter than the title.

> ⚠️ Only edit these if necessary. Changing them can affect how the page appears in the sidebar or search.

## 4. File Naming Conventions

* File names should be **lowercase** and use **dashes** instead of spaces:
  `economy-survival-rules.mdx` instead of `Economy Survival Rules.mdx`
* Place the file in the appropriate subfolder that matches its section:

  * `content/survival/economy-survival-rules.mdx`
  * `content/getting-started/introduction.mdx`
* Consistent naming keeps the sidebar organized and makes it easier to find pages.

## 5. Understanding `_meta.js`

* Each folder inside `content/` can have a `_meta.js` file.
* `_meta.js` defines the **order of pages** and **section structure** for the sidebar.
* You usually do **not** need to edit `_meta.js` for normal content edits — only for adding new pages or reordering sections.
* Example:

```js
export default [
  { name: 'introduction', title: 'Introduction' },
  { name: 'economy-survival-rules', title: 'Rules' },
];
```

> The `name` matches the file name (without `.mdx`), and `title` is how it appears in the sidebar.

## 6. Editing the Wiki

There are two ways to contribute:

### Option A: Directly on GitHub (easiest for non-technical staff)

1. Go to the file you want to edit in `content/`.
2. Click the **pencil icon** in the top right to edit the file.
3. Make your changes (e.g., fixing typos, adding instructions).
4. Scroll down to the **“Commit changes”** section.
5. Add a short description of your change (e.g., “Fixed typo in economy rules”).
6. Select **“Create a new branch for this commit”**.
7. Click **“Propose changes”**.

This creates a **Pull Request (PR)**. It will not change the live wiki until merged.

### Option B: Using Git locally (optional for advanced staff)

1. Install **Git**: [https://git-scm.com/](https://git-scm.com/)
2. Clone the repository:

```bash
git clone https://github.com/ProsperiaMC/wiki.git
```

1. Navigate to the folder:

```bash
cd wiki
```

1. Create a new branch:

```bash
git checkout -b my-update
```

1. Edit the files inside `content/`.
2. Stage your changes:

```bash
git add content/
```

1. Commit your changes:

```bash
git commit -m "Describe your changes"
```

1. Push your branch:

```bash
git push origin my-update
```

1. Go to GitHub and create a Pull Request from your branch.

> **Note:** Only advanced staff need this method. Most staff can use the web editor (Option A).

## 7. Writing Guidelines

* Use **clear language** and short sentences.
* Keep the style **friendly and consistent**.
* Verify rules or commands **in-game** before adding.
* Do not delete pages unless instructed.

## 8. Pull Request Workflow

1. After proposing changes, the **maintainer** will review your PR.
2. You may be asked to make minor edits.
3. Once approved, the PR is merged, and the changes appear on the website automatically.

> ⚡ The website automatically fetches the latest content — no need to rebuild manually.

## 9. Tips for Non-Technical Staff

* Focus on **text content**; Nextra handles formatting.
* Always propose changes via **new branches**; never commit directly to `main`.
* Ask a staff member if unsure about Markdown or front-matter.

## 10. Quick Markdown Reference

* **Headers:** `#` for H1, `##` for H2
* **Bold:** `**bold text**`
* **Italic:** `*italic*`
* **Lists:** `- item` or `1. item`
* **Links:** `[text](url)`

> This is enough for most documentation edits.

## 11. Resources

* [GitHub Docs](https://docs.github.com/en)
* [Markdown Guide](https://www.markdownguide.org/)
