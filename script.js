
let isPidgin = true;

const pidginMessages = [
    "Addie 🐔, why you dey run? Our kids dey wait! 👶👶",
    "My future baby mama, you still dey form?",
    "Abeg na 😂",
    "This love strong pass your shakara! ❤️",
    "Baby no dey do me strong thing na! 💪",
    "Na me be your last bus stop! 🚌"
];

const englishMessages = [
    "Karimo my love, why are you running? Our future awaits! 👶👶",
    "My future queen, why are you playing hard to get?",
    "Look at you being all precious! 😂",
    "This love is stronger than your resistance! ❤️",
    "Babe, don't be so difficult! 💪",
    "I'm your final destination! 🚌"
];

function toggleLanguage() {
    isPidgin = !isPidgin;
    const toggleBtn = document.querySelector('.lang-toggle');
    toggleBtn.textContent = isPidgin ? "Switch to English" : "Switch to Pidgin";
    updateMessage();
}

function updateMessage() {
    const messageDiv = document.getElementById('message');
    const messages = isPidgin ? pidginMessages : englishMessages;
    messageDiv.innerHTML = messages[Math.floor(Math.random() * messages.length)];
}

function moveButton() {
    const btn = document.getElementById('noBtn');
    const container = document.getElementById('main-container');
    
    const maxX = container.clientWidth - btn.clientWidth - 40;
    const maxY = container.clientHeight - btn.clientHeight - 40;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
    
    updateMessage();
}

function sayYes() {
    const container = document.getElementById('main-container');
    const message = isPidgin ? 
        `
            <h1>Yeeeee! 🎉</h1>
            <div class="heart">❤️</div>
            <p class="message">
                Ode, why you con dey waste time before?! ❤️
            </p>
            <p class="message">
                I love you too 😘<br>
               
            </p>
        ` :
        `
            <h1>Yaaay! 🎉</h1>
            <div class="heart">❤️</div>
            <p class="message">
                Adeola my love! You've made me the happiest person!<br>
                I love you so much! ❤️
            </p>
            <p class="message">
                Our love story has officially begun! 😘<br>
                Let's paint the town red! 🕺
            </p>
        `;
    container.innerHTML = message;
}
