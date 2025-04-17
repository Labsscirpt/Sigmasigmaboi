const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const body = document.body;

yesBtn.addEventListener("click", () => {
  // Update content
  question.innerHTML = "Aaaaa, I like you too!";
  gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
  body.style.backgroundColor = "#ffc0cb";

  // Floating colorful hearts
  const heartColors = ['#ff69b4', '#ff1493', '#ffb6c1', '#ff4d6d', '#f78da7'];

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💕";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = `${Math.random() * 20 + 20}px`;
    heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }

  // Send to Discord webhook directly
  fetch('https://discord.com/api/webhooks/1359866927803269251/mr8FUIXSprOQJlgWd6iy19DoC90aiSpYX0LOrzmyQ429lS_yGK-bT_OjXIb1dKr_mE6i', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: 'Someone clicked YES! They like you!'
    })
  }).catch(console.error);
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});