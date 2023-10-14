//menu

let lastScroll = 0
const defaultOffset = 200
const header = document.querySelector('.header__menu')

const scrollPosition = function() {
  return window.pageYOffset || document.documentElement.scrollTop
}
const containHide = function() {
  return header.classList.contains('hide')
}

window.addEventListener('scroll', function() {
  
  if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    // scroll down
    header.classList.add('hide')
  }
  else if(scrollPosition() < lastScroll  && containHide()) {
    // scroll up
    header.classList.remove('hide')
  }
  
  lastScroll = scrollPosition()
})


//popup .lock 

// const body = document.body
// const click = document.querySelector('#click')

// click.addEventListener('click', isChecked)

// function isChecked() {
//   if (click.checked) {
//     body.classList.add('lock')
//     header.classList.add('hide')
//   } else {
//     body.classList.remove('lock')
//   }
// }