let leftPos = 0
let bottomPos = 0
document.getElementById('sip').addEventListener('click', () => {
    // Elimina todos los elementos dentro del body
    document.body.innerHTML = "";

    // Puedes agregar nuevos elementos o contenido aquí
    // Por ejemplo, crearemos un nuevo párrafo con un mensaje
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Sabía que me amabas <3333';

    // Añade estilos directamente al nuevo párrafo
    newParagraph.style.color = 'white';

    

    // Añade el nuevo párrafo al body
    document.body.appendChild(newParagraph);
    
});

document.getElementById('nop').addEventListener('mouseover', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nop').style.position = "absolute"
    document.getElementById('nop').style.left = leftPos + "%"
    document.getElementById('nop').style.bottom = bottomPos + "%"
})
document.getElementById('nop').addEventListener('click', () => {
    leftPos = Math.floor(Math.random() * (50 - (-50) + 1)) + (-50);
    bottomPos = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
    document.getElementById('nop').style.position = "absolute"
    document.getElementById('nop').style.left = leftPos + "%"
    document.getElementById('nop').style.bottom = bottomPos + "%"
})