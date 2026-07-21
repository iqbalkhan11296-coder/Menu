// Initialize AOS animations
AOS.init({
    duration: 1200,
    once: true
});

// Hide loading screen
window.addEventListener("load", () => {
    document.querySelector(".loader").style.display = "none";
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(0,0,0,.85)";
        nav.style.backdropFilter = "blur(25px)";

    } else {

        nav.style.background = "rgba(0,0,0,.35)";
    }

});

// Hero parallax
window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY =
        window.scrollY * 0.4 + "px";

});

// Card hover animation
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

        let x = e.offsetX;
        let y = e.offsetY;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(212,175,55,.25),
            rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(255,255,255,.05)";

    });

});

// Floating particles
for (let i = 0; i < 35; i++) {

    let particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 10 + "s";
    particle.style.animationDuration =
        (6 + Math.random() * 8) + "s";

    document.body.appendChild(particle);

}
