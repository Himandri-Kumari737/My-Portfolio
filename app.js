(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
document.addEventListener("DOMContentLoaded", function () {
    const trail = document.querySelector(".trail");
    let points = [];
    let fading = false;

    document.addEventListener("mousemove", function (e) {
        const x = e.pageX;
        const y = e.pageY;

        if (!fading) {
            points.push({ x, y });
            drawTrail();
        }
    });

    function drawTrail() {
        if (points.length > 1) {
            const startPoint = points[points.length - 2];
            const endPoint = points[points.length - 1];
            const angle = Math.atan2(endPoint.y - startPoint.y, endPoint.x - startPoint.x);
            const length = Math.sqrt(Math.pow(endPoint.y - startPoint.y, 2) + Math.pow(endPoint.x - startPoint.x, 2));

            const newTrail = document.createElement("div");
            newTrail.className = "trail";
            newTrail.style.position = "absolute";
            newTrail.style.left = startPoint.x + "px";
            newTrail.style.top = startPoint.y + "px";
            newTrail.style.width = length + "px";
            newTrail.style.height = "2px";
            newTrail.style.background = "transparent";
            newTrail.style.transformOrigin = "50% 100%";
            newTrail.style.borderRadius = "50%";
            newTrail.style.boxShadow = "0 0 10px red";
            newTrail.style.filter = "blur(1px)";

            document.body.appendChild(newTrail);

            setTimeout(function () {
                newTrail.style.opacity = 0;
                setTimeout(function () {
                    document.body.removeChild(newTrail);
                }, 100); // Adjust the duration before removing the element
            }, 100); // Adjust the duration before starting the fade
        }
    }
});
