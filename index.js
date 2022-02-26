/*
const nome = prompt('Digite seu nome completo:');
 document.body.innerHTML += `Seu nome é: ${nome}<br />`;  

 document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;

 document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`;

 document.body.innerHTML += `Qual o primeiro índice da letra LETRA no seu nome? ${nome.indexOf("G")} <br />`;

 document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? ${nome.lastIndexOf("l")}<br />`;

 document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`;

 document.body.innerHTML += `As palavras do seu nome são: ${nome.split("  ")}<br />`;

 document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase(nome)}<br />`;

 document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase(nome)}<br />`;
*/


/*let number = prompt('Digite um numero : ')
numberTest = document.querySelector('#manipu')

numberTest.innerHTML = number

//document.body.innerHTML += `<h1>Seu numero é : ${number}</h1></br>`

numberRaiz = Math.sqrt(number)
number = parseFloat(number)

document.body.innerHTML += `Raiz quadrada : ${numberRaiz}</br>` 

document.body.innerHTML += `${number} é inteiro : ${Number.isInteger(number)}</br>`

document.body.innerHTML += `É NaN ? : ${Number.isNaN(number)}</br>`

document.body.innerHTML += `Arredondado para baixo : ${Math.floor(number)}</br>`

document.body.innerHTML += `Arredondado para cima : ${Math.ceil(number)}</br>`

document.body.innerHTML += `Com duas casas decimais : ${number.toFixed(2)}</br>`*/


/*
function meuEscopo(){

    const form = document.querySelector('.form')
    const result = document.querySelector('#result')
    const people = []
    form.addEventListener('submit', function(event){
        event.preventDefault()

        const nome = document.querySelector("#name")
        const surname = document.querySelector("#surname")
        const wheight = document.querySelector("#wheight")
        const height = document.querySelector("#height")

       result.innerHTML +=  `<p> ${nome.value} $${wheight.val{surname.value} ue} ${height.value} </p>` 
       people.push({

        nome: nome.value,
        surname: surname.value,
        wheight: wheight.value,
        height: height.value

       })

       console.log(people)
 

    });

}

meuEscopo()*/

const form = document.querySelector('#form')

form.addEventListener('submit', function(e){

    e.preventDefault()

    let wheight = document.querySelector('#wheight')
    let height = document.querySelector('#height')

    function CalculaImc(){

        wheight = wheight.value
        height = height.value

        let numberWheight = parseFloat(wheight.replace(',', '.'))
        let numberHeight = parseFloat(height.replace(',', '.'))
       

        numberHeight = Math.pow(numberHeight, 2)

        let resultImc = (numberWheight/numberHeight)

         resultImc = parseFloat(resultImc.toFixed(1))

        
         
        // console.log(resultImc)

            if(resultImc < 0 ){

                
                newLine.innerHTML = `<p id="result3"> O valor digitado precisa ser maior do que zero</p>`
 
            }else if(numberHeight == 0 && numberWheight == 0){

                newLine.innerHTML = `<p id="result3">Digite um peso e altura maior que zero</p>`


            }
            
            else if(numberHeight == 0 ){

                    newLine.innerHTML = `<p id="result3">Digite uma altura valida!</p>`
    
                }else if(numberWheight == 0){
    
                newLine.innerHTML = `<p id="result3">Digite um peso valido!</p>`
    
    
                
            
            }else if(resultImc === 1 || resultImc < 18.5){

                newLine.innerHTML = `<p id="result2">O Resultado é :  ${resultImc} (Abaixo do peso)</p>`

            }else if(resultImc >= 18.5 && resultImc <= 24.9){

                newLine.innerHTML = `<p id="result2">O Resultado é :  ${resultImc} (Peso normal)</p>`

            }else if(resultImc >= 25 && resultImc <= 29.9){

                newLine.innerHTML = `<p id="result2">O Resultado é :  ${resultImc} (Sobrepeso)</p>`

            }else if(resultImc >= 30 && resultImc <= 34.9){

                newLine.innerHTML = `<p id="result2">O Resultado é :  ${resultImc} (Obesidade grau 1)</p>`

            }else if(resultImc >= 35 && resultImc <= 39.9){

                newLine.innerHTML = `<p id="result2">O Resultado é :  ${resultImc} (Obesidade grau 2)</p>`

            }else if(resultImc >= 40 ){

                newLine.innerHTML = `<p id="result2">O Resultado é :  ${resultImc} (Obesidade grau 3)</p>`

            } else{
                console.log(resultImc)
                newLine.innerHTML = `<p id="result3">Nao encotramos valores</p>`

            }

       //newLine.innerHTML = `<p id="result2">O Resultado é :  ${resultImc}</p>`
        

    }
   CalculaImc()
})




