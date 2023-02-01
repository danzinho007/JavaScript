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
        res.innerHTML = `Idade calculada: ${idade}`
    }
}