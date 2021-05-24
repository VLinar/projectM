<template>
  <header class="page-header">
    <nav>
      <a href="#0" aria-label="forecastr logo" class="logo">
        <img
          src="http://testdomainokey.000webhostapp.com/dipl/logo_1.png"
          alt=""
        />
      </a>
      <button
        class="toggle-mob-menu"
        aria-expanded="false"
        aria-label="open menu"
      >
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
      <ul class="admin-menu">
        <li class="menu-heading">
          <h3>Admin</h3>
        </li>
        <li>
          <a href="#a">
            <i class="fa fa-tasks" aria-hidden="true"></i>
            <span> Товары</span>
          </a>
        </li>
        <li>
          <a href="#v">
            <i class="fa fa-user" aria-hidden="true"></i>
            <span> Пользователи</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
            <span>Заказы</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i class="fa fa-magic" aria-hidden="true"></i>
            <span>Атрибуты</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i class="fa fa-server" aria-hidden="true"></i>
            <span> Модификации</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i class="fa fa-credit-card" aria-hidden="true"></i>
            <span> Способы оплаты</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
            <span> Способы доставки</span>
          </a>
        </li>
        <li>
          <div class="switch">
            <input type="checkbox" id="mode" checked />
            <label for="mode">
              <span></span>
              <span class="llast">Dark</span>
            </label>
          </div>
          <button
            class="collapse-btn"
            aria-expanded="true"
            aria-label="collapse menu"
          >
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            <span> Скрыть</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    if (this.getuserrole !== 3) {
      this.$router.push("/adminauth");
    }
  },
  computed: {
    ...mapGetters(["getuserrole"])
  }
};
window.onload = function() {
  const html = document.documentElement;
  const body = document.body;
  const menuLinks = document.querySelectorAll(".admin-menu a");
  const collapseBtn = document.querySelector(".admin-menu .collapse-btn");
  const toggleMobileMenu = document.querySelector(".toggle-mob-menu");
  const switchInput = document.querySelector(".switch input");
  const switchLabel = document.querySelector(".switch label");
  const switchLabelText = switchLabel.querySelector(".llast");
  const collapsedClass = "collapsed";
  const lightModeClass = "light-mode";

  collapseBtn.addEventListener("click", function() {
    body.classList.toggle(collapsedClass);
    this.getAttribute("aria-expanded") == "true"
      ? this.setAttribute("aria-expanded", "false")
      : this.setAttribute("aria-expanded", "true");
    this.getAttribute("aria-label") == "collapse menu"
      ? this.setAttribute("aria-label", "expand menu")
      : this.setAttribute("aria-label", "collapse menu");
  });

  toggleMobileMenu.addEventListener("click", function() {
    body.classList.toggle("mob-menu-opened");
    this.getAttribute("aria-expanded") == "true"
      ? this.setAttribute("aria-expanded", "false")
      : this.setAttribute("aria-expanded", "true");
    this.getAttribute("aria-label") == "open menu"
      ? this.setAttribute("aria-label", "close menu")
      : this.setAttribute("aria-label", "open menu");
  });

  for (const link of menuLinks) {
    link.addEventListener("mouseenter", function() {
      if (
        body.classList.contains(collapsedClass) &&
        window.matchMedia("(min-width: 768px)").matches
      ) {
        const tooltip = this.querySelector("span").textContent;
        this.setAttribute("title", tooltip);
      } else {
        this.removeAttribute("title");
      }
    });
  }

  if (localStorage.getItem("dark-mode") === "false") {
    html.classList.add(lightModeClass);
    switchInput.checked = false;
    switchLabelText.textContent = "Light";
  }

  switchInput.addEventListener("input", function() {
    html.classList.toggle(lightModeClass);
    if (html.classList.contains(lightModeClass)) {
      switchLabelText.textContent = "Light";
      localStorage.setItem("dark-mode", "false");
    } else {
      switchLabelText.textContent = "Dark";
      localStorage.setItem("dark-mode", "true");
    }
  });
};
</script>

<style lang="scss" scoped>
* {
  --page-header-bgColor: #242e42;
  --page-header-bgColor-hover: #1d2636;
  --page-header-txtColor: #dde9f8;
  --page-header-headingColor: #7889a4;
  --page-header-width: 220px;
  --page-content-bgColor: #f0f1f6;
  --page-content-txtColor: #171616;
  --page-content-blockColor: #fff;
  --white: #fff;
  --black: #333;
  --blue: #00b9eb;
  --red: #ec1848;
  --border-radius: 4px;
  --box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.075);
  --switch-bgLightModeColor: #87cefa;
  --switch-sunColor: gold;
  --switch-moonColor: #f4f4f4;
  --switch-bgDarkModeColor: #1f1f27;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a,
button {
  color: inherit;
}

a {
  text-decoration: none;
}

button {
  background: none;
  cursor: pointer;
}

input {
  -webkit-appearance: none;
}

[type="checkbox"] {
  position: absolute;
  left: -9999px;
}

label {
  cursor: pointer;
}

button,
input {
  border: none;
}

i {
  display: block;
}

body {
  font: 16px/1.5 "Lato", sans-serif;
}

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  padding-top: 20px;
  width: var(--page-header-width);
  color: var(--page-header-txtColor);
  background: var(--page-header-bgColor);
}
.page-header nav {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.page-header .logo {
  display: block;
  margin: 0 15px;
}

.page-header .logo img {
  fill: var(--white);
  width: 190px;
}

.page-header .toggle-mob-menu {
  display: none;
  margin-left: 5px;
  padding: 4px;
  background: var(--page-content-blockColor);
  border-radius: var(--border-radius);
}

.page-header .toggle-mob-menu i {
  fill: var(--black);
  transition: transform 0.2s;
}

.page-header .admin-menu {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 35px;
}

.page-header .admin-menu li:nth-last-child(2) {
  margin-bottom: 35px;
}

.page-header .admin-menu li:last-child {
  margin-top: auto;
  margin-bottom: 20px;
}

.page-header .admin-menu li > * {
  width: 100%;
  padding: 12px 15px;
}

.page-header .admin-menu .switcher {
  display: inline-block;
  width: auto;
}

.page-header .admin-menu .menu-heading h3 {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 12px;
  margin-top: 12px;
  color: var(--page-header-headingColor);
}

.page-header .admin-menu i {
  width: 20px;
  height: 16px;
  fill: var(--page-header-txtColor);
  margin-right: 10px;
}

.page-header .admin-menu a,
.page-header .admin-menu button {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.page-header .admin-menu a:hover,
.page-header .admin-menu a:focus,
.page-header .admin-menu button:hover,
.page-header .admin-menu button:focus {
  background: var(--page-header-bgColor-hover);
  color: var(--blue);
  outline: none;
}

.page-header .admin-menu a:hover i,
.page-header .admin-menu a:focus i,
.page-header .admin-menu button:hover i,
.page-header .admin-menu button:focus i {
  fill: var(--blue);
}

.page-content {
  position: relative;
  left: var(--page-header-width);
  width: calc(100% - var(--page-header-width));
  min-height: 100vh;
  padding: 30px;
  color: var(--page-content-txtColor);
  background: var(--page-content-bgColor);
}

.page-content .grid {
  display: grid;
  grid-gap: 15px;
}

.page-content .grid > article {
  display: flex;
  height: 200px;
  background: var(--page-content-blockColor);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.page-content .grid > article:first-child,
.page-content .grid > article:last-child {
  grid-column: 1 / -1;
}

@media screen and (max-width: 767px) {
  .page-header,
  .page-content {
    position: static;
    width: 100%;
  }

  .page-header {
    padding: 10px;
  }

  .page-header nav {
    flex-direction: row;
  }

  .page-header .logo {
    margin: 0;
  }

  .page-header .logo img {
    width: 83px;
    height: 40px;
  }

  .page-header .toggle-mob-menu {
    display: block;
  }

  .page-header .admin-menu {
    position: absolute;
    left: 98px;
    top: 57px;
    margin-top: 0;
    z-index: 2;
    border-radius: var(--border-radius);
    background: var(--page-header-bgColor);
    visibility: hidden;
    opacity: 0;
    transform: scale(0.95);
    transition: all 0.2s;
  }

  .page-header .admin-menu li:nth-last-child(2) {
    margin-bottom: 12px;
  }

  .page-header .admin-menu li:last-child button,
  .search-and-user .admin-profile .greeting {
    display: none;
  }

  .page-content {
    min-height: 0;
    padding: 10px;
  }

  .page-content .grid {
    grid-gap: 10px;
  }
}

@media screen and (max-width: 400px) {
  .page-content .grid > article {
    grid-column: 1 / -1;
  }
}

.mob-menu-opened .toggle-mob-menu i {
  transform: rotate(180deg);
}

.mob-menu-opened .page-header .admin-menu {
  transform: scale(1);
  visibility: visible;
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .collapsed .page-header {
    width: 40px;
  }

  .collapsed .page-header .admin-menu li > * {
    padding: 10px;
  }

  .collapsed .page-header .logo,
  .collapsed .page-header .admin-menu span,
  .collapsed .page-header .admin-menu .menu-heading {
    display: none;
  }

  .collapsed .page-header .admin-menu i {
    margin-right: 0;
  }

  .collapsed .page-header .collapse-btn i {
    transform: rotate(180deg);
  }

  .collapsed .page-content {
    left: 40px;
    width: calc(100% - 40px);
  }
}

.switch label {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  align-items: center;
  justify-content: flex-start;
}

.switch span:first-child {
  position: relative;
  width: 50px;
  height: 26px;
  border-radius: 15px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
  background: var(--switch-bgLightModeColor);
  transition: all 0.3s;
}

.switch span:first-child::before,
.switch span:first-child::after {
  content: "";
  position: absolute;
  border-radius: 50%;
}

.switch span:first-child::before {
  top: 1px;
  left: 1px;
  width: 24px;
  height: 24px;
  background: var(--white);
  z-index: 1;
  transition: transform 0.3s;
}

.switch span:first-child::after {
  top: 50%;
  right: 8px;
  width: 10px;
  height: 10px;
  transform: translateY(-50%);
  background: var(--switch-sunColor);
  box-shadow: 0 0 4px 2px #ffdb1a;
}

.switch [type="checkbox"]:checked + label span:first-child {
  background: var(--switch-bgDarkModeColor);
}

.switch [type="checkbox"]:focus + label span:first-child {
  box-shadow: 0 3px 5px rgba(255, 255, 255, 0.25);
}

.switch [type="checkbox"]:checked + label span:first-child::before {
  transform: translateX(24px);
}

.switch [type="checkbox"]:checked + label span:first-child::after {
  left: 12px;
  width: 15px;
  height: 15px;
  background: transparent;
  box-shadow: -2px -5px 0 var(--switch-moonColor);
  transform: translateY(-50%) rotate(-72deg);
}

.light-mode {
  --page-header-bgColor: #f1efec;
  --page-header-bgColor-hover: #b9e4e0;
  --page-header-txtColor: #2c303a;
  --page-header-headingColor: #979595;
  --page-content-bgColor: #fff;
  --box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.25);
}

.light-mode .page-header .admin-menu a:hover,
.light-mode .page-header .admin-menu a:focus,
.light-mode .page-header .admin-menu button:hover,
.light-mode .page-header .admin-menu button:focus {
  color: var(--black);
}

.light-mode .page-header .logo i,
.light-mode .page-header .admin-menu a:hover i,
.light-mode .page-header .admin-menu a:focus i,
.light-mode .page-header .admin-menu button:hover i,
.light-mode .page-header .admin-menu button:focus i {
  fill: var(--black);
}

.light-mode .switch [type="checkbox"]:focus + label span:first-child {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.25);
}

@media screen and (max-width: 767px) {
  .light-mode .search-and-user .admin-profile i {
    fill: var(--black);
  }
}
</style>
