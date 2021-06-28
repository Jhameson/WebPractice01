
const anuncios = document.querySelector('#div-anuncios');
const props = JSON.parse(localStorage.getItem('Anuncios'));

function exibirAnuncios() {

    let indice = 0;
    for (let ads in props) {
        anuncios.innerHTML +=
            `
        <div class="row border rounded p-3">
            <div class="col-12 text-center">
                <h3>${props[indice].title}</h3>
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
}
exibirAnuncios();




const App ={
    data(){
        return{
            title: props.data,
            enable: true,
        };
    },
};

Vue.createApp(App).mount("#div-anuncios");