let num = [4, 6, 1, 3, 90, 45]
//num.push(5) //insere um numero no final do vetor
num.sort() //ordena o vetor

console.log(num);
console.log(`Vetor tem tamanho: ${num.length}\n`)

for(let i = 0; i < num.length; i++)
{
    console.log(`V[${i}] = ${num[i]}`)
}

var posicao = num.indexOf(90) //indexOf procura o valor no vetor, retornando -1 se não achar, e a posição do numero se encontrado
var posicao2 = num.indexOf(587)

console.log(`A posição do 90 é ${posicao}`)

if(posicao2 < 0)
{
    console.log(`O valor 587 não foi encontrado dentro do arra\n`)
}

for(let pos in num) //para cada posição em num
{
    console.log(`v[${pos}] = ` +num[pos])
}