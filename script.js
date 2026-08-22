
// ==========================================================
// NATALIE DUME PORTFOLIO
// ==========================================================


// --------------------------
// CURRENT YEAR
// --------------------------

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// --------------------------
// NAV BACKGROUND ON SCROLL
// --------------------------

const header = document.querySelector(".site-header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 25) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


// --------------------------
// MOBILE MENU
// --------------------------

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

}


// --------------------------
// SCROLL REVEALS
// --------------------------

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = "IntersectionObserver" in window ? new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
) : null;


revealItems.forEach((item) => {
    if (revealObserver) {
        revealObserver.observe(item);
    } else {
        item.classList.add("visible");
    }
});


// Make above-the-fold content appear immediately
window.addEventListener("load", () => {

    document
        .querySelectorAll(".hero .reveal, .page-hero .reveal, .contact-hero .reveal")
        .forEach((item, index) => {

            setTimeout(() => {
                item.classList.add("visible");
            }, 120 * index);

        });

});


// --------------------------
// PROJECT IMAGE HOVER
// --------------------------

const visuals = document.querySelectorAll(".project-visual");

visuals.forEach((visual) => {

    visual.addEventListener("mousemove", (event) => {

        const rect = visual.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;

        visual.style.transform =
            `perspective(900px)
             rotateY(${x * 2.5}deg)
             rotateX(${y * -2.5}deg)
             scale(0.99)`;

    });


    visual.addEventListener("mouseleave", () => {

        visual.style.transform =
            "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";

    });

});

// ============================================================
// FAVORITE / BOOKMARK LINK
// ============================================================

const favoriteLink = document.getElementById("favorite-link");

if (favoriteLink) {
    favoriteLink.addEventListener("click", function (event) {
        event.preventDefault();

        const isMac = navigator.platform.toUpperCase().includes("MAC");

        if (isMac) {
            alert("Add me to your favorites! Press ⌘ + D to bookmark this page.");
        } else {
            alert("Add me to your favorites! Press Ctrl + D to bookmark this page.");
        }
    });
}
