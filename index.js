function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var feedback = document.getElementById("feedback").value;

    var message = "Name: " + name + "\n";
    message += "Email: " + email + "\n";
    message += "Phone: " + phone + "\n\n";
    message += "Feedback: " + feedback;

    var mailToLink = "mailto:kumarankit11458@gmail.com?subject=Feedback&body=" + encodeURIComponent(message);

    window.location.href = mailToLink;
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function searchGames() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const gameBoxes = document.querySelectorAll('.portfolio-box');
    
    gameBoxes.forEach(box => {
        const gameTitle = box.querySelector('h4').innerText.toLowerCase();
        if (gameTitle.includes(input)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

const canvas = document.getElementById('ballCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const balls = [];
const numberOfBalls = 500;
const delay = 5000; // 5 seconds delay

class Ball {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 50; // Start from below the canvas
        this.size = Math.random() * 5 + 2;
        this.speedY = Math.random() * 2 + 1; // Control the speed of rising
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
    }

    update() {
        this.y -= this.speedY; // Move up
        if (this.y < -this.size) { // Reset the ball to the bottom when it goes off the top
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 50;
            this.size = Math.random() * 5 + 2;
            this.speedY = Math.random() * 2 + 1;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < numberOfBalls; i++) {
        setTimeout(() => {
            balls.push(new Ball());
        }, i * delay / numberOfBalls); // Distribute the delay among the balls
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();
