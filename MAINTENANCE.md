# Dashboard 集合维护说明

> 仓库：[youth0505/Dashboard](https://github.com/youth0505/Dashboard)
>
> 集合首页：[`index.html`](index.html)
>
> F1 仪表板：[`f1-dashboard.html`](f1-dashboard.html)
>
> Portfolio 项目入口：[F1 项目预览](https://youth0505.github.io/Portfolio/#project)

正确的英文拼写是 **maintenance**。本文件名为 `MAINTENANCE.md`。

## 项目结构

```text
Dashboard/
├── .github/workflows/
├── index.html
├── f1-dashboard.html
├── language.js
├── MAINTENANCE.md
└── README.md
```

根目录的 `index.html` 是仪表板目录和入口。每个仪表板都有独立页面和本地样式；F1 页面内容与 CSS 均在 `f1-dashboard.html` 中维护。页面不会加载 Portfolio 的共享样式。

## 更新集合首页

- 在 `index.html` 的 `AVAILABLE DASHBOARDS` 区域中，为每个已发布仪表板添加一张卡片。
- 将整张卡片链接到该仪表板独立的 HTML 页面。
- 保持仪表板数量准确，并明确区分概念或原型与已连接数据的正式工具。
- 延续现有配色、字体、紧凑元信息和响应式卡片布局，保持集合视觉一致。

## 编辑页面

- 在 `f1-dashboard.html` 中更新标题、标签、筛选选项、KPI 数值、图表标记和结果行。
- 在文件内嵌 CSS 中调整颜色和布局。页面使用独立的颜色与字体变量，并以 `760px` 为移动端断点。
- 赛季、车手和车队筛选器仅为视觉占位，不会筛选或重新计算当前展示的 KPI、图表或表格。
- 展示的数值和图表形状是静态概念数据，并非实时 API 响应。除非已经实现并验证数据集成，否则不要将它们描述为实时结果。
- F1 页面的字标链接返回 `index.html`（Dashboard 集合首页）；`BACK TO PORTFOLIO` 链接仍指向 `https://youth0505.github.io/Portfolio/#project`。
- Portfolio 的 `index.html` 包含项目预览和唯一入口链接。如果 Dashboard 路径变更，也要同步更新 Portfolio 仓库中的该链接。
- 集合页和 F1 页共用 `language.js` 的中英文映射。新增或修改可见文案时，请同步更新对应翻译；语言按钮的主题样式分别写在两页的内嵌 CSS 中。

## 预览与部署

在 Dashboard 仓库根目录启动静态服务器进行本地预览：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

打开 `http://127.0.0.1:8000/` 查看集合首页，或打开 `http://127.0.0.1:8000/f1-dashboard.html` 查看 F1 页面；按 `Ctrl+C` 停止服务器。

首次部署前，在 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。推送到 `main`，或手动启动 `.github/workflows/deploy-pages.yml`，即可将仓库根目录部署到 GitHub Pages。工作流成功后，请确认：

- `https://youth0505.github.io/Dashboard/` 能正常加载集合首页。
- F1 卡片打开 `https://youth0505.github.io/Dashboard/f1-dashboard.html`。
- F1 字标返回 Dashboard 集合首页，Portfolio 链接返回 Portfolio 的 F1 项目区域。
- 桌面端和窄屏／移动端布局均正常显示，没有裁切或横向溢出。
- 修改后的内容准确；除非仪表板已接入真实数据，否则应明确说明其为静态概念内容。

独立的 `blank.yml` 是占位 CI 工作流，不负责部署网站。
