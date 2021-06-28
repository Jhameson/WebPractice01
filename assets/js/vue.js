

const App = new Vue({
    el: "#div-anuncios",

    data: {
        anuncios: [],
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
        this.anuncios = JSON.parse(localStorage.getItem('AnunciosApp'));
    },
    methods: {


        salvarAnuncio(anuncios) {
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
                //caso n tenha
                ads = [anuncios];
            }
            localStorage.setItem('AnunciosApp', JSON.stringify(ads));

        }
    }
});
