// create map //
const map = L.map('mapid').setView([-8.0667694, -34.8808646], 16);

// create and add TitleLayer //
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon //
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    

})

// criando funcionalidade para adicionar pop up //

let marker;

// creating the funcionality of add a popup on the map //
//create and add marker//
map.on('click', event => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    
    // enviando atributos de latitude e longitude para o html após o evento click //
    // o .value vai enviar o valor da variavel lat no primeiro exemplo, sendo possivel capturar esse valor
    // posteriormente, tendo em vista o input e os dados que serão enviados.
    // esse código de query selector apenas busca no documento quem tem o name="lat" o que tras funcionalidade é o .value = algo

    document.querySelector('[name="lat"]').value= lat;
    document.querySelector('[name="lng"]').value= lng;

    // remove icon
    marker && map.removeLayer(marker) //caso exista algo em marker (o && serve pra verificar isso) execute (map.removelayer(marker)...)
    
    //add icon layer //

    marker = L.marker([lat, lng], { icon })
    .addTo(map)
    console.log(event)
})
//adicionar o campo de fotos //
function addPhotoField() {
    

}
// photos upload, adicionar o campo de fotos //
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container pra duplicar o .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima imagem adicionadas
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true) // .length conta quantos tem, o -1 é logica de array
    // impedir de adicionar campo vazio, verificar se está, se sim adicionar ao container de imagens
    const input = newFieldContainer.children[0]
    if (input.value == "") {
        //limpar o campo antes de adicionar ao container de imagens
        return          //quando uma aplicação encontra um return numa function ela para o resto do codigo
    }
    
    // limpar o campo antes de adicionar o container de imagens/
    input.value=""
    
    
    // depois, adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
 }
// 
function deleteField(event) {
    
    const span = event.currentTarget // salvando a ação de clicar no X do span

    const fieldsContainer = document.querySelectorAll('.new-upload') //procurando em new upload

    if (fieldsContainer.length <= 1) { //encerrando a funcao caso não tenha uma imagem atribuida
        // limpar o valor do camp
        span.parentNode.children[0].value = "" //o parent node é o .new-upload, e o children sao os input, tendo na posicao 0 o primeiro 
        return
    }

        //deletar o campo
        span.parentNode.remove()
}   
// selecionar a troca do sim e nao (creating the yes or no)
    
    function toggleSelect(event) {
        // retirar  a class .active dos botoes
document.querySelectorAll('.button-select button')
.forEach( function (button) { button.classList.remove('active') }
)
        // colocar class active nesse botao clicado
        const button = event.currentTarget
        button.classList.add('active')
        
        // atualizar meu input com o valor selecionado
        const input = document.querySelector('[name="open_on_weekends"]')
        console.log(input)
        // verificar se sim ou nao

        input.value = button.dataset.value
    }

