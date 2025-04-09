document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");
    const content = document.getElementById("content");
    const receiveBtn = document.getElementById("receive");
    const dontReceiveBtn = document.getElementById("dont-receive");
    const music = document.getElementById("background-music");

    receiveBtn.addEventListener("click", function() {
        popup.style.display = "none";
        content.style.display = "block";
        
        // Play music automatically when the second page opens
        music.play().catch(error => {
            console.log("Autoplay blocked, waiting for user interaction.");
            document.body.addEventListener("click", () => {
                music.play();
            }, { once: true });
        });
    });

    dontReceiveBtn.addEventListener("mouseover", function() {
        let x = Math.max(0, Math.min(window.innerWidth - dontReceiveBtn.clientWidth, Math.random() * window.innerWidth));
        let y = Math.max(0, Math.min(window.innerHeight - dontReceiveBtn.clientHeight, Math.random() * window.innerHeight));
        dontReceiveBtn.style.left = x + "px";
        dontReceiveBtn.style.top = y + "px";
    });
});