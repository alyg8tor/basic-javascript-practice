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
const allDivs = Array.from(document.querySelectorAll('div'))

let mainHeader = document.querySelector('header')

let revertButton = document.createElement('button')
revertButton.textContent = 'ALL CHARACTERS'

revertButton.addEventListener('click', () => {
    femaleCharacters.forEach((character) => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: revert;')

    })
    maleCharacters.forEach((character) => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: revert;')

    })
    otherCharacters.forEach((character) => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: revert;')
    })
})

let maleButton  = document.createElement('button')
maleButton.textContent = 'MALE CHARACTERS'

maleButton.addEventListener('click', () => {
    femaleCharacters.forEach((character) => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: none;')
        //matchedDiv.classList.add('animated', 'bounceOutLeft')

    })
    otherCharacters.forEach((character) => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: none;')
        //matchedDiv.classList.add('animated', 'bounceOutLeft')
    })
})

let femaleButton = document.createElement('button')
femaleButton.textContent = 'FEMALE CHARACTERS'


femaleButton.addEventListener('click', () => {
    maleCharacters.forEach((character) => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: none;')
    })
    otherCharacters.forEach((character) => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: none;')
    })
})

let otherButton = document.createElement('button')
otherButton.textContent = 'OTHER CHARACTERS'

otherButton.addEventListener('click', () => {
    femaleCharacters.forEach((character) => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: none;')
    })
    maleCharacters.forEach((character) => {
        let matchedDiv = allDivs.find((oneDiv) => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute('style', 'display: none;')
    })
})

mainHeader.appendChild(revertButton)
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')

