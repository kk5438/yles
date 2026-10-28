/*
 * 共用導覽選單
 * 1. 請把 PAGES 陣列改成你的實際網頁名稱與檔名。
 * 2. 每一個 HTML 頁面都要載入此檔：<script src="menu.js"></script>
 * 3. 每一個 HTML 頁面的 <head> 都要載入 style.css。
 */
const PAGES = [
  { title: "首頁", href: "index.html" },
  { title: "資源一", href: "page01.html" },
  { title: "資源二", href: "page02.html" },
  { title: "資源三", href: "page03.html" },
  { title: "資源四", href: "page04.html" }
];

(function () {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const nav = header.querySelector(".site-nav");
  if (nav) {
    nav.innerHTML = PAGES.map(page => {
      const link = document.createElement("a");
      link.href = page.href;
      link.textContent = page.title;
      if (location.pathname.split("/").pop() === page.href) {
        link.setAttribute("aria-current", "page");
      }
      return link.outerHTML;
    }).join("");
  }

  const toggle = header.querySelector(".menu-toggle");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });
  }
})();
