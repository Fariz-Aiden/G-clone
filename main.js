// let h = document.querySelector('h1')

// h.addEventListener('dblclick',()=>{
//     h.className = 'dell'
//     document.title = 'Hello world'
// })



function searcher(){
    var gSearch = document.querySelector('#gSearch').value
    var clicker = document.querySelector('#clicker')
    var hrf = `https://www.google.com/search?q=${gSearch}`
    clicker.href = hrf
}