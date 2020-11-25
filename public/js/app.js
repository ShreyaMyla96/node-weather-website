const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgone = document.querySelector('#message-1')
const msgtwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() // Prevents the default behaviour of form, which is refreshing the page.....

    const location = search.value
    msgone.textContent = 'Loading....'   //setting the context for a paragraph...
    msgtwo.textContent = ''


    fetch('http://localhost:3000/weather?address='+ location).then((response) => {
     response.json().then((data) => {
        
        if(data.error){
            msgone.textContent = data.error
        } else{
            msgone.textContent = data.location
            msgtwo.textContent = data.forecast
        }
        
    })
})
})