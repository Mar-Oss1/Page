document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos que vamos a manipular
    const noBtn = document.querySelector('.no-btn');
    const yesBtn = document.querySelector('.yes-btn');
    const questionContainer = document.querySelector('.question-container');
    const resultContainer = document.querySelector('.result-container');
    const btnContainer = document.querySelector('.button-container');

    // Videos
    const resultVideo = document.querySelector(".result-gif-src");
    const questionVideo = document.querySelector(".gif-src");

    // 2. Lógica para el botón 'Sí'
    yesBtn.addEventListener("click", () => {
        resultVideo.muted = false;
        resultVideo.play();

        // Ocultar la pregunta y mostrar el resultado
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
    });

    // 3. Lógica para el botón 'No'
    noBtn.addEventListener("click", () => {
        questionVideo.muted = false;
        questionVideo.play();

        // Obtenemos las dimensiones del contenedor de los botones
        const containerRect = btnContainer.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();

        // Calculamos un rango seguro para el movimiento
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        // Generamos nuevas coordenadas aleatorias
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        // Aplicamos la nueva posición
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });
});
