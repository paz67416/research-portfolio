const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const appsGrid = document.querySelector("#apps-grid");
const isJapanese = root.lang === "ja";

const savedTheme = localStorage.getItem("research-theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
  toggle.textContent = savedTheme === "light" ? "Dark" : "Light";
}

toggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  if (nextTheme === "dark") {
    root.removeAttribute("data-theme");
    localStorage.setItem("research-theme", "dark");
    toggle.textContent = "Light";
  } else {
    root.dataset.theme = "light";
    localStorage.setItem("research-theme", "light");
    toggle.textContent = "Dark";
  }
});

function createAppCard(app) {
  const article = document.createElement("article");
  article.className = "card";

  const category = document.createElement("span");
  category.className = "card-tag";
  category.textContent = app.category || "Application";

  const title = document.createElement("h3");
  title.textContent = app.title || "Untitled Application";

  const description = document.createElement("p");
  description.textContent = app.description || "Application description pending.";

  article.append(category, title, description);

  if (app.url) {
    const link = document.createElement("a");
    link.href = app.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = isJapanese ? "アプリを見る" : "Open application";
    article.append(link);
  }

  return article;
}

async function loadApps() {
  try {
    const appsFile = isJapanese ? "apps-ja.json" : "apps.json";
    const response = await fetch(appsFile, { cache: "no-store" });
    if (!response.ok) throw new Error("Unable to load apps.json");
    const apps = await response.json();
    appsGrid.innerHTML = "";
    apps.forEach((app) => appsGrid.append(createAppCard(app)));
  } catch (error) {
    appsGrid.innerHTML = isJapanese
      ? '<article class="card"><h3>アプリケーション</h3><p>アプリ一覧を読み込めませんでした。apps-ja.json を確認してください。</p></article>'
      : '<article class="card"><h3>Applications</h3><p>Application data could not be loaded. Check apps.json.</p></article>';
  }
}

loadApps();
