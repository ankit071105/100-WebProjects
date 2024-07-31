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

    const canvas = document.getElementById('fireCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fireParticles = [];
const numberOfParticles = 100;

class FireParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 2;
        this.speedX = (Math.random() * 3 - 1.5) * 2;
        this.speedY = (Math.random() * 3 - 1.5) * 2;
        this.color = `rgba(275, ${Math.random() * 255}, 0.6, 0.7)`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        fireParticles.push(new FireParticle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < fireParticles.length; i++) {
        fireParticles[i].update();
        fireParticles[i].draw();
        if (fireParticles[i].size <= 0.2) {
            fireParticles.splice(i, 1);
            fireParticles.push(new FireParticle());
        }
    }
    requestAnimationFrame(animate);
}

init();
animate();
