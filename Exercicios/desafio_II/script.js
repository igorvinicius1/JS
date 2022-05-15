function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()//ano xxxx, além de pegar o ano atual
    var fano = document.getElementById('txtano') //ano q veio do forms respondido pelo usuario
    var res = window.document.querySelector('div#res')

    if(fano == 0 || Number(fano.value) > ano)
    {
        window.alert("INFORME DADOS COERENTES !!!")
    }
    else
    {
        var fsex = document.getElementsByName('radsex') //pega os elementos de acordo com sua posição de registro 
        var idade = ano - Number(fano.value)
        var genero=''


        if(fsex[0].checked)//se o fsex (masculino) foi selecionado então...
        {   
            genero = 'Homem'

            // if(idade >= 0 && idade <= 10)
            // {
            //     img.setAttribute('src', './imagens/foto-bebe-m.png')
            // }
            // else if(idade <= 21)
            // {
            //     img.setAttribute('src', './imagens/foto-jovem-m.png')
            // }
            // else if(idade <= 65)
            // {
            //     img.setAttribute('src', './imagens/foto-adulto-m.png')
            // }
            // else
            // {
            //     img.setAttribute('src','./imagens/foto-idoso-m.png')
            //     //img.setAttribute('src','foto-idoso-m.png')
            // }
        } 
        else if(fsex[1].checked)
        {
            genero = 'Mulher'

            // if(idade >= 0 && idade <= 10)
            // {
            //     img.setAttribute('src', './imagens/foto-bebe-f.png')
            // }
            // else if(idade <= 21)
            // {
            //     img.setAttribute('src', './imagens/foto-jovem-f.png')
            // }
            // else if(idade <= 65)
            // {
            //     img.setAttribute('src', './imagens/foto-adulto-f.png')
            // }
            // else
            // {
            //     img.setAttribute('src', './imagens/foto-idoso-f.png')
            // }
        }
    }
    
    res.style.textAlign = 'center' //muda direto sem ter q mecher com o CSS
    res.innerHTML = `Detectou-se ${genero} com ${idade} anos.`
    res.appendChild(img)
}