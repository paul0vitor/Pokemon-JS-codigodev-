var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){
    
    // Bloqueia o refresh
    e.preventDefault()

    // URL de pesquisa
    let urlform = "https://pokeapi.co/api/v2/pokemon/"

    // Valor do input Name
    let nome = document.getElementById("name")

    // Concatenar  a url com o inputname
    urlform = urlform + this.name.value

    //T ransforma os valores em minusculas
    urlform = urlform.toLocaleLowerCase()

    // ID content
    let resposta = document.getElementById('content')

    // ID ImgPokemon
    let imagem = document.getElementById('imgPokemon')

    // Resposta HTML
    let html = ''

    fetch(urlform)
        .then(resposta => resposta.json())
        .then(function(data) {
            console.log(data)
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html +'type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default +"'><img src='" + data.sprites.back_default +"'>"
        })
        .catch(function (err) {
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado! ºnº'
            } else {
                html = err
            }
            resposta.innerHTML = html
        })
    
  
});

function maiuscula(val){
    return val[0].toUpperCase() + val.substr(1)
}