const form = document.querySelector('.form');

const anuncios = document.querySelector('#div-anuncios');

const propriedades = [];
let anunciosJs;

function salvarAnuncio() {

    const title = form.querySelector('.a-titulo');
    const description = form.querySelector('.a-descricao');
    const rooms = form.querySelector('.a-rooms');
    const parking = form.querySelector('.a-parking');
    const total_area = form.querySelector('.a-total-area');
    const building = form.querySelector('.a-building');
    const locality = form.querySelector('.a-locality');
    const price = form.querySelector('.a-price');
    const link = form.querySelector('.a-link');

    propriedades.push({
        title: title.value,
        description: description.value,
        rooms: rooms.value,
        parking: parking.value,
        total_area: total_area.value,
        building: building.value,
        locality: locality.value,
        price: price.value,
        link: link.value,
    });
    alert("Dados inseridos");

    anunciosJs = JSON.stringify(propriedades);
    localStorage.setItem('Anuncios', anunciosJs);

}





function exibirAnuncios() {
    const ads = localStorage.getItem('Anuncios');
    const props = JSON.parse(ads);

    let indice = 0;
    for (let ads in props) {
        anuncios.innerHTML +=
            `
        <div class="row border rounded p-3">
            <div class="col-12 text-center">
                ${props[indice].title}
            </div>
            <div class="col-6">

                <div class="col-6">
                    <label class="form-label">Descrição: ${props[indice].description}</label>
                </div>

                <div class="col-6">
                    <label class="form-label">Quartos: ${props[indice].rooms}</label>
                </div>

                <div class="col-6">
                    <label for="inputAddress2" class="form-label">Vagas na garagem: ${props[indice].parking} </label>
                </div>

                <div class="col-6">
                    <label for="inputCity" class="form-label">Área Total (m2): ${props[indice].total_area}</label>
                </div>

                <div class="col-6">
                    <label for="inputCity" class="form-label">Área Construída: ${props[indice].building}</label>
                </div>

                <div class="col-6">
                    <label for="inputCity" class="form-label">Localidade: ${props[indice].locality}</label>
                </div>

                <div class="col-6">
                    <label for="inputCity" class="form-label">Preço (R$): ${props[indice].price}</label>
                </div>

            </div>
            <div class="col-6  d-flex justify-content-center">
                <img src="${props[indice].link}" class="img-fluid">
            </div>
        </div>
       `;
        indice++;
    }
} exibirAnuncios();


