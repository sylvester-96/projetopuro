// const paragraph = document.querySelector('#paragraph')

// const ps = paragraph.querySelectorAll('p')

// const estiloBody = getComputedStyle(document.body)

// const backgroundColorBody = estiloBody.backgroundColor

 

//  for(let p of ps){

//     p.style.backgroundColor = backgroundColorBody
//     p.style.color = 'blue'

// }

function random(min, max){

    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

let rand = 10
const min = 1
const max = 50

while (rand !== 10){

        rand = random(min, max)
        console.log(rand)

}