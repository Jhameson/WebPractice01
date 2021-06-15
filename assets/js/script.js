//capturando o elemento com class form
const form = document.querySelector('.form');

//seleciona os componentes
const result = document.querySelector('.list');
const contador = document.querySelector('.adverts');

//array de propriedades
const properties = [];

//Qual evento quer "escutar"?
form.addEventListener('submit', function recebeEventoForm(event) {
    //previne o evento padrão do navegador -> não permite enviar
    event.preventDefault();

    //pega do formulário
    const title = form.querySelector('.title');
    const description = form.querySelector('.description');
    const rooms = form.querySelector('.rooms');
    const parking = form.querySelector('.parking');
    const total_area = form.querySelector('.total-area');
    const building = form.querySelector('.building');
    const locality = form.querySelector('.locality');
    const price = form.querySelector('.price');
    const link = form.querySelector('.link');

    properties.push({
        title: title.value,
        description: description.value,
        rooms: rooms.value,
        parking: parking.value,
        total_area: total_area.value,
        building: building.value,
        locality: locality.value,
        price: price.value,
        link: link.value
    })

    alert("Dados inseridos");

    result.innerHTML +=
        `
       <div class="box">
        <h1 class="list-title">${title.value}</h3>
            <div class="description-item">
                <div>
                    <span class="span-description">Descrição: ${description.value}</span>
                    <span class="span-description">Quartos: ${rooms.value}</span>
                    <span class="span-description"> Vagas de Garagem: ${parking.value}</span>
                    <span class="span-description"> Área do Terreno: ${total_area.value}</span>
                    <span class="span-description"> Área Construída: ${building.value}</span>
                    <span class="span-description"> Localidade: ${locality.value}</span>
                    <span class="span-description"> Preço: R$${price.value}</span>
     
                </div>
                <img src="${link.value}" alt="Foto da propriedade"/>
            </div>
        </div>
       `;
    contador.innerHTML = `Anúncios: ${properties.length}`;
});


function limpar() {
    while (properties.length > 0) {
        properties.pop();
    }
    const clean = document.querySelector('.list');
    clean.innerHTML = '';
    contador.innerHTML = '0 Anúncios'
}