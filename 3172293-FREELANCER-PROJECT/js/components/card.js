// js/components/card.js
    // ContainerSelector: Un selector css donde van las cards
  export async function loadCards(containerSelector, cardIds = []) {

    const container = document.querySelector(containerSelector);
    if (!container) return;

    try {
        // Hacemos dos fetch al mismo tiempo uno para la plantilla y otro para la card

        const[templateRes,dataRes] = await Promise.all([
        fetch("/views/components/card.html"),
        fetch("/data/cards.json")
        ])

        const template = await templateRes.text();
        const card = await dataRes.json();
// Filtro por si ses proporcins un id
const filteredCards = cardIds.length 
    ? card.filter(item => cardIds.includes(item.id)) 
    : card;; //si no hay id las muestra todas

filteredCards.forEach(card => {
    let html = template.replace("{{title}}", card.title)
    .replace("{{title}}", card.title)
    .replace("{{icon1}}", card.icon1)
    .replace("{{icon2}}", card.icon2)
    .replace("{{description}}", card.description)

//  Agregamos la card al contenedor del DOM 
    container.innerHTML += html;
})



    } catch (error) {
        console.log("Error cargando las cards", error);
    }
  }
