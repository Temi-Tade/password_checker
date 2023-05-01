let navBarBtn = document.querySelector('#navbarbtn')
let navBar = document.querySelector('nav')
let navBg = document.querySelector('#navbg')

navBarBtn.addEventListener('click', () => {
	navBar.style.left = '0'
	navbg.style.display = 'block'
	window.addEventListener('click', () => {
		if (event.target === navBg) {
			navBar.style.left = '-20rem'
			navBg.style.display = 'none'
		}
	})
})