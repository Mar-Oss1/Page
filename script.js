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
        // Ocultar la pregunta y mostrar el resultado
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');

        // Detener el primer video y silenciarlo
        questionVideo.pause();
        questionVideo.muted = true;

        // Activar sonido en el segundo video
        resultVideo.muted = false;
        resultVideo.play();
    });

    // Botón "No" → mover el botón y (si quieres) reproducir el video inicial
    noBtn.addEventListener("click", () => {
        questionVideo.muted = false; // activa sonido en el inicial
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
