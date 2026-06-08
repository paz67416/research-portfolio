# Masashi Awata Research Portfolio

Static single-page portfolio website for an independent researcher.

## Files

- `index.html` - Main page structure
- `ja.html` - Japanese page
- `styles.css` - Responsive dark/light theme styling
- `script.js` - Theme toggle and application card loading
- `apps.json` - Editable application list
- `apps-ja.json` - Editable Japanese application list

## Updating Applications

Application cards are loaded automatically from `apps.json`.
Japanese application cards are loaded automatically from `apps-ja.json`.

Add a new application by adding an object like this:

```json
{
  "title": "New Application",
  "description": "Short description of the application.",
  "url": "https://example.com",
  "category": "Prototype"
}
```

Keep the file as valid JSON. Commas are required between objects, but not after the final object.

For the Japanese page, add the same type of object to `apps-ja.json`.

## GitHub Pages Deployment

1. Create a GitHub repository named `research-portfolio`.
2. Upload `index.html`, `ja.html`, `styles.css`, `script.js`, `apps.json`, `apps-ja.json`, and `README.md`.
3. Open repository settings.
4. Go to Pages.
5. Select the main branch and root folder.
6. Save and wait for GitHub Pages to publish.

The site will usually become available at:

```text
https://<username>.github.io/research-portfolio/
```

## Custom Links

Replace placeholder `#` links in `index.html` and `apps.json` with real URLs for:
Also replace matching placeholder links in `ja.html` and `apps-ja.json`.

- AIP Advances paper
- ORCID profile
- Zenodo papers
- LinkedIn
- YouTube
- Applications
