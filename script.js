

let buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => btn.addEventListener('click', function(e) {
  e.preventDefault()

  alert('clicked')

}))

document.addEventListener('DOMContentLoaded', function() {

})
