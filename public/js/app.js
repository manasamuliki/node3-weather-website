

fetch('http://puzzle.mead.io/puzzle').then( (response) => {
    response.json().then((data) => {
        console.log(data);
        console.log('hhhh');
    })
})

fetch('http://localhost:3000/weather?address=!').then( (response) => {
    response.json().then((data) => {
        if (data.errror) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
        
    })
})
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
//messageOne.textContent = 'From JavaScript'


weatherForm.addEventListener('submit', (e) => {
e.preventDefault()
const location = search.value

messageOne.textContent = 'Loading...'
messageTwo.textContent = ''
fetch('/weather?address=' + location).then( (response) => {
    response.json().then((data) => {
        if (data.errror) {
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
        
    })
})
})






