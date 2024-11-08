const totemContainer = document.getElementById('totem-container');

let isDragging = false;
let previousX = 0;
let previousY = 0;
let rotationX = 20; // Inclinação inicial
let rotationY = 0;

totemContainer.addEventListener('mousedown', (event) => {
    isDragging = true;
    previousX = event.clientX;
    previousY = event.clientY;
    document.body.style.cursor = 'grabbing'; // Muda o cursor para o estilo de arraste
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        const deltaX = event.clientX - previousX;
        const deltaY = event.clientY - previousY;

        rotationY += deltaX * 0.5; // Girar horizontalmente
        rotationX -= deltaY * 0.5; // Girar verticalmente

        // Limitar a inclinação vertical para evitar giros completos
        if (rotationX > 90) rotationX = 90;
        if (rotationX < -90) rotationX = -90;

        totemContainer.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

        previousX = event.clientX;
        previousY = event.clientY;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'grab'; // Volta o cursor ao estilo de mão
});

document.addEventListener('mouseleave', () => {
    isDragging = false;
    document.body.style.cursor = 'grab'; // Se o mouse sair da área, interrompe o arraste
});
