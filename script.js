const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

function moveButton() {
    // Button ko screen par kahin bhi move karne ke liye
    noBtn.style.position = 'fixed';
    const x = Math.random() * (window.innerWidth - 80);
    const y = Math.random() * (window.innerHeight - 80);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

// Mobile ke liye touch aur mouse ke liye hover event
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
        <div style="background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet); 
                    height: 100vh; width: 100%; display: flex; flex-direction: column; 
                    justify-content: center; align-items: center; color: white; text-align: center;">
            <h1>Congratulations! 🎉</h1>
            <p>You are officially part of the squad!</p>
            <button onclick="location.reload()" style="padding: 10px 20px; cursor: pointer;">Reset Prank</button>
        </div>
    `;
});
