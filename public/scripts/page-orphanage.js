const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomScroll: false
}
// get values from html 
const lat = document.querySelector('span[data-lat').dataset.lat
const lng = document.querySelector('span[data-lng').dataset.lng



// create map //
const map = L.map('mapid', options).setView([lat,lng], 15)

// create and add TitleLayer //
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon //
const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]

})


//create and add marker //
L
.marker([lat, lng], {icon})
.addTo(map)

/* image gallary */

function selectImage(event) {
    /* console.log("cliquei no botao"); */
    const button = event.currentTarget /* event.currentTarget é um alvo que foi clicado da constante criada nomeada button */
    //remover todas as classes active ///
    const buttons = document.querySelectorAll(".images button") /*queryselectall vai procurar os atributos css .images
                                                                 buttons e selecionar pra salvar na constante button */
                                                                    
    buttons.forEach(removeActiveClass)      // pra cada atributo encontrado da constante buttons vai atribuir uma funcao
                                            // funcao "removeActiveClass" criada logo abaixo
    function removeActiveClass(button){
        button.classList.remove("active")   //sobre o evento button que vai identificar qual foi clicado, dentre suas listas
                                            // de class ele vai remover a que possuir o atributo class 'active'
    }
    
    

    // selecionar a imagem clicada // 
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img" )
    // atualizar o container da imagem do botao clicado // 
    imageContainer.src = image.src /* esse container possui o endereço encontrado em .orphanage-details > img 
                                    uma vez encontrado é atribuido ao image. */

    // adicionar classe .active pra esse botao //
    button.classList.add('active')
}

    
