
function carregar() {

var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes().toString().padStart(2, '0');

msg.innerHTML = `Neste momento são ${hora}:${minutos}h no horário de Brasília`

if (hora >= 1 && hora < 5 ) {
     img.src = 'noite.png'
    document.body.style.background = '#222224'
}

else if (hora >= 5 && hora <12) {
    img.src = 'manha.png'
    document.body.style.background = '#F7B429'

} else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#3D5476'

} else {
    img.src = 'noite.png'
    document.body.style.background = '#222224'
    
}

}