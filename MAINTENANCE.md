# Dashboard Collection Maintenance

> Repository: [youth0505/Dashboard](https://github.com/youth0505/Dashboard)
>
> Collection home: [`index.html`](index.html)
>
> F1 dashboard: [`f1-dashboard.html`](f1-dashboard.html)
>
> Portfolio entry: [F1 project preview](https://youth0505.github.io/Portfolio/#project)

The correct English spelling is **maintenance**. This file is intentionally named `MAINTENANCE.md`.

## Project structure

```text
Dashboard/
├── .github/workflows/
├── index.html
├── f1-dashboard.html
├── MAINTENANCE.md
└── README.md
```

The root `index.html` is the dashboard directory and entry point. Each dashboard has its own page and local styles; the F1 page's content and CSS are maintained in `f1-dashboard.html`. Pages do not load shared Portfolio styles.

## Updating the collection home

- Add each published dashboard as one card in the `AVAILABLE DASHBOARDS` section of `index.html`.
- Link the full card to that dashboard's standalone HTML page.
- Keep the dashboard count accurate and distinguish concepts or prototypes from finished, data-connected tools.
- Use the existing colors, typography, compact metadata, and responsive card layout so the collection remains visually consistent.

## Editing the page

- Update headings, labels, selector options, KPI values, chart markup, and result rows in `f1-dashboard.html`.
- Update colors and layout in its embedded CSS. The page uses its own color and font variables and a `760px` mobile breakpoint.
- The season, driver, and constructor selectors are visual placeholders; they do not filter or recalculate the displayed KPIs, charts, or table.
- The displayed numbers and chart shapes are static concept data, not a live API response. Do not describe them as live results unless data integration is implemented and verified.
- The F1 page's wordmark returns to `index.html`, the Dashboard collection home. Its `BACK TO PORTFOLIO` link remains pointed to `https://youth0505.github.io/Portfolio/#project`.
- The Portfolio `index.html` contains the project's preview and its single entry link. If the Dashboard path changes, update that one link in the Portfolio repository as well.

## Preview and deployment

To preview locally, start a static server from the Dashboard repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/` for the collection home or `http://127.0.0.1:8000/f1-dashboard.html` for the F1 page; stop the server with `Ctrl+C`.

Before the first deployment, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. Pushing to `main` or manually starting `.github/workflows/deploy-pages.yml` then deploys the repository root to GitHub Pages. After the workflow succeeds, verify:

- `https://youth0505.github.io/Dashboard/` loads the collection home.
- The F1 card opens `https://youth0505.github.io/Dashboard/f1-dashboard.html`.
- The F1 wordmark returns to the Dashboard collection home and the Portfolio link returns to the Portfolio F1 project section.
- Desktop and narrow/mobile layouts render without clipping or horizontal overflow.
- Any changed content remains accurate and clearly identified as static concept content unless the dashboard has been connected to real data.

The separate `blank.yml` workflow is a placeholder CI workflow; it does not deploy the site.
