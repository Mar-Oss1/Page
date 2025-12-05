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

    // Apagar totalmente el primer video
    questionVideo.pause();          // lo detiene
    questionVideo.currentTime = 0;  // lo reinicia al inicio
    questionVideo.muted = true;     // lo silencia
    questionVideo.removeAttribute("src"); // desconecta la fuente
    questionVideo.load();           // fuerza al navegador a recargar (queda vacío)

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


