# Formula 1 Dashboard Maintenance

> Repository: [youth0505/Dashboard](https://github.com/youth0505/Dashboard)
>
> Main page: [`f1-dashboard.html`](f1-dashboard.html)
>
> Portfolio entry: [F1 project preview](https://youth0505.github.io/Portfolio/#project)

The correct English spelling is **maintenance**. This file is intentionally named `MAINTENANCE.md`.

## Project structure

```text
Dashboard/
├── .github/workflows/
│   ├── blank.yml
│   └── deploy-pages.yml
├── f1-dashboard.html
├── MAINTENANCE.md
└── README.md
```

The page's content and visual styles are both maintained in `f1-dashboard.html`; its CSS is in the page's `<style>` element. The current page does not load JavaScript or shared Portfolio styles.

## Editing the page

- Update headings, labels, selector options, KPI values, chart markup, and result rows in `f1-dashboard.html`.
- Update colors and layout in its embedded CSS. The page uses its own color and font variables and a `760px` mobile breakpoint.
- The season, driver, and constructor selectors are visual placeholders; they do not filter or recalculate the displayed KPIs, charts, or table.
- The displayed numbers and chart shapes are static concept data, not a live API response. Do not describe them as live results unless data integration is implemented and verified.
- Keep both header links pointed to `https://youth0505.github.io/Portfolio/#project`. The first link is the wordmark; the second is the explicit return-to-Portfolio link.
- The Portfolio `index.html` contains the project's preview and its single entry link. If the Dashboard path changes, update that one link in the Portfolio repository as well.

## Preview and deployment

To preview locally, start a static server from the Dashboard repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/f1-dashboard.html`; stop the server with `Ctrl+C`.

Before the first deployment, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Pushing to `main` or manually starting `.github/workflows/deploy-pages.yml` then deploys the repository root to GitHub Pages. After the workflow succeeds, verify:

- `https://youth0505.github.io/Dashboard/f1-dashboard.html` loads.
- Both header links return to the Portfolio F1 project section.
- Desktop and narrow/mobile layouts render without clipping or horizontal overflow.
- Any changed content remains accurate and clearly identified as static concept content unless the dashboard has been connected to real data.

The separate `blank.yml` workflow is a placeholder CI workflow; it does not deploy the site.
