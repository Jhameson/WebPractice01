//instancia o VUE na variavel App
const App = new Vue({
    //elemento que o Vue vai gerenciar - passo a div 
    el: "#div-anuncios",

    //mais uma
    data: {
        anuncios: [],
        //chave  que contem a listagem de dados que vou usar
        KeyAnuncio: {
            titulo: '',
            descricao: '',
            quartos: '',
            vagas: '',
            area: '',
            construida: '',
            localidade: '',
            preco: '',
            img: ''
        }
    },
    created() {
        //ponto do ciclo de vida
        //executa sempre que o componente é criado
        this.anuncios = JSON.parse(localStorage.getItem('AnunciosApp'));
    },
    methods: {


        salvarAnuncio(anuncios) {
            //salvando
            let ads = localStorage.getItem('AnunciosApp');

            if (!anuncios.titulo || !anuncios.descricao || !anuncios.quartos ||
                !anuncios.vagas || !anuncios.area || !anuncios.construida ||
                !anuncios.localidade || !anuncios.preco || !anuncios.img) {
                return;
            }

            if (ads) {
                //att
                ads = JSON.parse(ads);
                ads.push(anuncios);

            } else {
                //caso n tenha a chave
                ads = [anuncios];
            }
            //att iden
            //definindo 
            localStorage.setItem('AnunciosApp', JSON.stringify(ads));

        }
    }
});
