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