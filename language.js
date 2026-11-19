(() => {
  const translations = {
    "Dashboards — Lingfei Zhu": "仪表板 — Lingfei Zhu",
    "Race Result Explorer": "赛事结果探索器",
    "A collection of data dashboards by Lingfei Zhu, starting with the Formula 1 Race Result Explorer.": "Lingfei Zhu 的数据仪表板合集，以一级方程式赛事结果探索器为起点。",
    "DATA / VISUALIZATION / DECISIONS": "数据 / 可视化 / 决策",
    "BACK TO PORTFOLIO ↗": "返回个人主页 ↗",
    "/ DASHBOARD COLLECTION · 01—∞": "/ 仪表板合集 · 01—∞",
    "DATA": "数据",
    "IN VIEW.": "尽收眼底。",
    "Interactive explorations that turn complex data into clearer ways to compare, understand,\n            and decide.": "通过交互式探索，将复杂数据转化为更清晰的比较、理解与决策方式。",
    "AN OPEN COLLECTION": "持续扩展的合集",
    "A growing home for dashboards built around real questions, useful signals, and considered\n          visual design.": "这里汇集围绕真实问题、有用信号与审慎视觉设计而构建的仪表板。",
    "AVAILABLE DASHBOARDS": "可用仪表板",
    "01 / 01 LIVE": "01 / 01 已发布",
    "01 / MOTORSPORT": "01 / 赛车运动",
    "CONCEPT": "概念预览",
    "RACE": "赛事",
    "RESULTS.": "成绩。",
    "Explore the shape of a Formula 1 season through driver points, grid position, and\n              race-by-race results.": "通过车手积分、发车位置和逐场比赛结果，探索一个一级方程式赛季的全貌。",
    "OPEN F1 DASHBOARD": "打开 F1 仪表板",
    "RACE RESULT / EXPLORER": "赛事结果 / 探索器",
    "POINTS BY DRIVER": "车手积分",
    "01—24 ROUNDS": "01—24 站",
    "BUILT TO MAKE DATA CLEARER.": "让数据表达得更清晰。",
    "PORTFOLIO / F1 PROJECT ↗": "个人主页 / F1 项目 ↗",
    "DSCI 510 / FORMULA 1 DATA": "DSCI 510 / 一级方程式数据",
    "/ RACE RESULT EXPLORER": "/ 赛事结果探索器",
    "READ THE": "读懂",
    "RACE.": "赛事。",
    "CONCEPT PREVIEW": "概念预览",
    "A portfolio-ready direction for the finished interactive dashboard.": "为最终交互式仪表板呈现的作品集概念方案。",
    "SEASON": "赛季",
    "DRIVER": "车手",
    "CONSTRUCTOR": "车队",
    "All teams": "全部车队",
    "DRIVER POINTS": "车手积分",
    "SELECTED SEASON": "所选赛季",
    "AVG. FINISH": "平均完赛名次",
    "POSITION / RACE": "每场比赛名次",
    "POSITIONS GAINED": "净提升名次",
    "GRID → FINISH": "发车 → 完赛",
    "RACES": "比赛场次",
    "SEASON TOTAL": "赛季总计",
    "01 / CHAMPIONSHIP SHAPE": "01 / 积分榜走势",
    "02 / POSITION RELATIONSHIP": "02 / 名次关系",
    "GRID ↔ FINISH": "发车 ↔ 完赛",
    "STARTING GRID": "发车位置",
    "FINISH POSITION": "完赛名次",
    "03 / RECENT RESULTS": "03 / 近期赛果",
    "RACE BY RACE": "逐场比赛",
    "ROUND": "分站",
    "GRID": "发车",
    "FINISH": "完赛",
    "PTS": "积分",
    "ABU DHABI": "阿布扎比",
    "QATAR": "卡塔尔",
    "LAS VEGAS": "拉斯维加斯",
    "Return to all dashboards": "返回所有仪表板",
    "Lingfei Zhu Portfolio": "Lingfei Zhu 个人主页",
    "Switch to Chinese": "切换为中文",
    "Switch to English": "切换为英文"
  };
  const normalize = (value) => value.replace(/\s+/g, " ").trim();
  const normalizedTranslations = Object.fromEntries(
    Object.entries(translations).map(([english, chinese]) => [normalize(english), chinese])
  );
  const reverseTranslations = Object.fromEntries(
    Object.entries(normalizedTranslations).map(([english, chinese]) => [normalize(chinese), english])
  );
  const attributes = ["aria-label", "title", "placeholder", "content"];
  const getLanguage = () => {
    try {
      return localStorage.getItem("site-language") === "zh" ? "zh" : "en";
    } catch (error) {
      return "en";
    }
  };
  let language = getLanguage();

  const translate = (root) => {
    const translateText = (node) => {
      const current = node.nodeValue;
      const text = normalize(current);
      const replacement = (language === "zh" ? normalizedTranslations : reverseTranslations)[text];
      if (replacement) {
        const leading = current.match(/^\s*/)[0];
        const trailing = current.match(/\s*$/)[0];
        node.nodeValue = `${leading}${replacement}${trailing}`;
      }
    };
    if (root.nodeType === Node.TEXT_NODE) translateText(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      translateText(node);
    }

    const elements = root.nodeType === Node.ELEMENT_NODE ? [root, ...root.querySelectorAll("*")] : [];
    elements.forEach((element) => {
      attributes.forEach((attribute) => {
        const value = element.getAttribute(attribute);
        const replacement = (language === "zh" ? normalizedTranslations : reverseTranslations)[normalize(value || "")];
        if (replacement) element.setAttribute(attribute, replacement);
      });
    });
  };
  const updateToggle = () => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.textContent = language === "zh" ? "EN" : "中文";
      button.setAttribute("aria-label", language === "zh" ? "切换为英文" : "Switch to Chinese");
    });
  };
  const setLanguage = (nextLanguage) => {
    language = nextLanguage;
    translate(document.head);
    translate(document.body);
    updateToggle();
    try {
      localStorage.setItem("site-language", language);
    } catch (error) {
      // The current page still switches language when storage is unavailable.
    }
  };

  updateToggle();
  translate(document.head);
  translate(document.body);
  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(language === "en" ? "zh" : "en"));
  });
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) translate(node);
      });
    });
  }).observe(document.body, { childList: true, subtree: true });
})();
