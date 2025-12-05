document.addEventListener('DOMContentLoaded', () => {
    // 1. Elementos que vamos a manipular
    const noBtn = document.querySelector('.no-btn');
    const yesBtn = document.querySelector('.yes-btn');
    const questionContainer = document.querySelector('.question-container');
    const resultContainer = document.querySelector('.result-container');

    // Obtenemos el contenedor de los botones para limitar el movimiento del botón 'No'
    const btnContainer = document.querySelector('.button-container');

    const video = document.querySelector(".gif-src");
    document.querySelector(".yes-btn").addEventListener("click", () => {
        video.muted = false;
        video.play();
    });

    // 2. Lógica para el botón 'No' (Movimiento evasivo al pasar el mouse)
    noBtn.addEventListener('mouseover', () => {
        // Obtenemos las dimensiones del contenedor de los botones
        const containerRect = btnContainer.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();

        // Calculamos un rango seguro para el movimiento (dentro del contenedor)
        // Restamos el ancho/alto del botón para que no se salga
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        // Generamos nuevas coordenadas aleatorias
        // Math.random() genera un número entre 0 y 1. Lo multiplicamos por el rango máximo.
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        // Aplicamos la nueva posición usando la propiedad transform para que sea fluida
        noBtn.style.position = 'absolute'; // Necesario para que el movimiento funcione
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });

    // 3. Lógica para el botón 'Sí' (Mostrar resultado)
    yesBtn.addEventListener('click', () => {
        // Ocultar la pregunta
        questionContainer.classList.add('hidden');
        // Mostrar el resultado
        resultContainer.classList.remove('hidden');
    });
});
