// Comentário em JavaScript 
/* Comentário em JavaScript */
// Para executar precisa ter a extensão NodeEjec
// Apertar F8
// cálice = acento agurado
// JavaScript usando crase : Shift + acento depois espaço ``

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
// Não precisa converter o valor em Número, mas é sempre bom
// Outra maneira é assim 
// if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
// Se o ano ver == 0 ou menor que o ano atual vai disparar isso
    } else {
// Esse comando abaixo serve pra testar o programa :
// window.alert('Tudo OK')
// Senão vai aparecer uma caixinha dizendo "Tudo OK"
        var fsex = document.getElementsByName('radsex')
        // document.getElementById
// Não pode selecionar po ID pois ambos tem o mesmo nome
// Se 
        // document.getElementsByClassName
// Não pode selecionar por ClassName pois ambos tem o mesma class
// Se
        // document.getElementsByName
// Pode selecionar por Name pois ambos tem nomes diferentes
        // document.getElementsByTagName
// Não pode selecionar po TagName 
        // document.getElementsByTagNameNS
// Não pode selecionar por TagNameNS
        // document.querySelector
// Não pode selecionar por querySelector
        // document.querySelectorAll
// Não pode selecionar por querySelectorAll 
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'fot')
// Criando ID com nome img
// Se fosse no HTML seria : <img id='foto'>
        if (fsex[0].checked) {
                gênero = 'Homem'
                if (idade >= 0 && idade < 9) {
                        // Bebe
                        img.setAttribute('src', 'bebe.jpg' )
                } else if ( idade < 18 ) {
                        // Jovem / Adolescente
                        img.setAttribute('src', 'menino.jpg')
                } else if ( idade < 60 ) {
                        // Adulto
                        img.setAttribute('src', 'adulto.jpg')
                } else {
                        // Idoso
                        img.setAttribute('src', 'idoso.jpg')
                }
        } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >= 0 && idade < 9) {
                        // Bebe
                        img.setAttribute('src', 'bebe.jpg')
                } else if ( idade < 18 ) {
                        // Jovem / Adolescente
                        img.setAttribute('src', 'menina.jpg')
                } else if ( idade < 60 ) {
                        // Adulta
                        img.setAttribute('src', 'adulta.jpg')
                } else {
                        // Idosa
                        img.setAttribute('src', 'idosa.jpg')
                }
        }
        res.style.textAlign = 'up'
// Centralizando o texto
        res.innerHTML = `Detectamos : ${gênero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}