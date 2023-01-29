// Comentário em JavaScript 
/* Comentário em JavaScript */
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas .`
    if ( hora >= 5 && hora < 12 ){
        // Bom dia ( 6,7,8,9,10,11 )
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if ( hora >= 12 && hora < 18 ){
        // Boa tarde ( 12,13,14,15,16,17 )
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else if ( hora >= 18 && hora < 24 ) {
        // Boa noite ( 18,19,20,21,22, 23 )
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    } else {
        // Boa madrugada ( 24,01,02,03,04 )
        img.src = 'madrugada.jpg'
        document.body.style.background = '191970'
    }
}
