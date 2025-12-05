document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.querySelector('.no-btn');
    const yesBtn = document.querySelector('.yes-btn');
    const questionContainer = document.querySelector('.question-container');
    const resultContainer = document.querySelector('.result-container');
    const btnContainer = document.querySelector('.button-container');

    // Videos separados
    const questionVideo = document.querySelector(".gif-src");       // el del inicio
    const resultVideo = document.querySelector(".result-gif-src");  // el del resultado

    // Botón "Sí" → mostrar resultado y activar sonido en el segundo video
    yesBtn.addEventListener("click", () => {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        resultVideo.muted = false;   // activar sonido
        resultVideo.play();          // reproducir
    });

    // Botón "No" → mover el botón y (si quieres) reproducir el video inicial
    noBtn.addEventListener("click", () => {
        questionVideo.muted = false; // si quieres que suene el del inicio
        questionVideo.play();

        const containerRect = btnContainer.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();

        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });
});
