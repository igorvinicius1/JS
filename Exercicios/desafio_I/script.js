var intervald = window.setInterval(() => {carregar()},1000); /* permite alterações no relógio digital q está no site */

function carregar()
{
    var msg = window.document.querySelector('div#msg') //objeto que permite acrescentar alguma msg dentro da div 'msg.innerHTML'
    var img = window.document.getElementById('imagem') //objeto q permite acrescentar uma imagem dentro da div q possui id = imagem

    var data = new Date() //método que pega a data da máquina
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `Agora são <strong>${hora}:${minuto}:${segundos}</strong>`

    if(hora >= 0 && hora < 12)
    {
        img.src = './imagens/manha.jpg' //comando q carrega a foto em JS 'img.src' tem que colocar o caminho certinho
        document.body.style.background = '#87cefa' 
    }
    else if(hora >= 12 && hora < 18)
    {
        img.src = './imagens/tarde.jpg' //comando q carrega a foto em JS 
        document.body.style.background = '#e2cd9f'
    }
    else
    {
        img.src = './imagens/noite.jpg' //comando q carrega a foto em JS
        document.body.style.background = '#515154'
    }
}