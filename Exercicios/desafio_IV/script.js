function calcular() 
{
    var number = document.getElementById('n')
    number = Number(number.value)
    var tab = document.getElementById('tab')
    var cont = 1

    if(number == 0)
    {
        window.alert('Please enter with a number not equal zero')
    }
    else
    {
        tab.innerHTML = `` //limpa a tabuada após mudar o numero (PRECISA SER O ID DO SELECTION E NÃO O DA DIV)

        for(cont = 1; cont <= 10; cont++)
        {
            var item = document.createElement('option')
            item.text = `${number} x ${cont} = ${number*cont}`
            tab.appendChild(item) //acrescenta 'item' ao select q possui o id=tab
        }
    }
    
}
