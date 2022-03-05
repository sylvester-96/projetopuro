

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
                newLine.innerHTML = `<p id="result3">Nao encotramos valores validos</p>`

            }   

    }
   CalculaImc()
})

