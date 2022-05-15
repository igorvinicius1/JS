function verificar()
{
    var inicio = document.getElementById("n1");
    var fim = document.getElementById("n2");
    var passo = document.getElementById("n3");

    inicio = Number(inicio.value) //convertendo para numero
    fim = Number(fim.value)
    passo = Number(passo.value)

    if(inicio == 0 ||  fim == 0)
    {
        res.innerHTML = `Impossível contar`
       // window.alert('Faltam dados !!!')
    }
    else
    {
        if(passo == 0)
        {
            window.alert('Passo inválido, Considerando passo = 1')
            passo = 1;
        }
        else
        {
            res.innerHTML = 'Contagem: '
            
            if(inicio < fim)
            {
                var cont = inicio

                for(cont = inicio; cont <= fim; cont = cont+passo)
                {
                    res.innerHTML += ` `
                    res.innerHTML += `${cont}👉`
                }
            }
            else if(inicio > fim)
            {
                var cont = inicio

                for(cont = inicio; cont >= fim; cont = cont+passo)
                {
                    res.innerHTML += ` `
                    res.innerHTML += `${cont}👉`
                }
            }
                
            res.innerText += `🏁`
        }
    }

}