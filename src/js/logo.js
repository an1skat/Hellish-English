(() => {
    const openBtnRef = document.querySelector("[data-menu-open]");
    const closeBtnRef = document.querySelector("[data-menu-close]");


    openBtnRef.addEventListener("click", () => {
        const expanded =
            openBtnRef.getAttribute("aria-expanded") === "true" || false;

        // menuBtnRef.classList.toggle("is-open");

        openBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    });

    closeBtnRef.addEventListener("click", () => {
        mobileMenuRef.classList.toggle("is-open");
    });
})();