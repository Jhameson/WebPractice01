const form = document.querySelector('.form');

function salvarAnuncio() {
    const title = form.querySelector('.a-titulo').value;
    const description = form.querySelector('.a-descricao').value;
    const rooms = form.querySelector('.a-rooms').value;
    const parking = form.querySelector('.a-parking').value;
    const total_area = form.querySelector('.a-total-area').value;
    const building = form.querySelector('.a-building').value;
    const locality = form.querySelector('.a-locality').value;
    const price = form.querySelector('.a-price').value;
    const link = form.querySelector('.a-link').value;


    if (!title || !description || !rooms ||
        !parking || !total_area|| !building || 
        !locality || !price || !link) {
        return;
    }

    const propriedades = JSON.parse(localStorage.getItem('Anuncios') || '[]');

    propriedades.push({
        title: title,
        description: description,
        rooms: rooms,
        parking: parking,
        total_area: total_area,
        building: building,
        locality: locality,
        price: price,
        link: link,
    });
    alert("Dados inseridos");
    localStorage.setItem('Anuncios', JSON.stringify(propriedades));
}