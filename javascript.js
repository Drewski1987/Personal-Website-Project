// github commands offline
// 1. call a console.log wthe the string "Hello Worldl" 
// 2. load hello world on each page on home, about, work/portfolio
// 3. load hellot world on about page
// 4. load hello world on work/portfolio
// 5. Test page


const greeting ="Hello World!"
console.log (greeting)

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})

setTimeout(() => {
    window.location.href = window.location.origin
  }, 5000)