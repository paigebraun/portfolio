export function setupNavMenu() {
    const nav = document.querySelector("nav");
    if (!nav) return;

    const menu = document.getElementById("mobile-menu");
    const menuBtn = document.getElementById("menu-toggle-btn");
    const mobileLinks = menu ? menu.querySelectorAll("a") : [];

    if (!menu || !menuBtn) return;

    let isMenuOpen = false;

    // Remove previous listeners by cloning the node
    const newMenuBtn = menuBtn.cloneNode(true);
    menuBtn.parentNode.replaceChild(newMenuBtn, menuBtn);

    let iconSpan = newMenuBtn.querySelector("#menu-icon");

    function setIcon(open) {
        iconSpan.innerHTML = open
            ? `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
            : `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        menu.style.display = isMenuOpen ? "block" : "none";
        setIcon(isMenuOpen);
    }

    newMenuBtn.addEventListener("click", toggleMenu);

    mobileLinks.forEach((link) => {
        const newLink = link.cloneNode(true);
        link.parentNode.replaceChild(newLink, link);
        newLink.addEventListener("click", () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    function handleResize() {
        if (window.innerWidth >= 768) {
            menu.style.display = "none";
            isMenuOpen = false;
            setIcon(false);
        }
    }
    window.removeEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize);

    setIcon(false);
}

document.addEventListener("astro:after-swap", () => {
    setupNavMenu();
});
document.addEventListener("DOMContentLoaded", () => {
    setupNavMenu();
});
