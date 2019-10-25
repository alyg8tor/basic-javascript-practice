import { people } from '../assets/people.js'

console.log('I am JavaScript running in your page!')

let mainArea = document.querySelector('main')

people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h3')
    let pic = document.createElement('img')

    mainArea.setAttribute('class','charMain')
    pic.setAttribute('class','picDiv')
    personDiv.setAttribute('class', 'charDiv')

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    personDiv.appendChild(name)
    personDiv.appendChild(pic)

    mainArea.appendChild(personDiv)
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    }
    else {
        return charID
    }
}
const allDivs = Array.from(document.querySelector('div'))
console.log(allDivs)
let mainHeader = document.querySelector('header')
let maleButton  = document.createElement('button')
maleButton.textContent = 'MALE CHARACTERS'

maleButton.addEventListener('click', () => {
    maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "visibility: hidden;")
    })
})

let femaleButton = document.createElement('button')
femaleButton.textContent = 'FEMALE CHARACTERS'

mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')

console.log(maleCharacters)
console.log(femaleCharacters)
