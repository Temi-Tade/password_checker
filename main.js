let navBarBtn = document.querySelector('#navbarbtn')
let navBar = document.querySelector('nav')
let navBg = document.querySelector('#navbg')
let togglePwdBtn = document.querySelector('#togglePasswordBtn')
let password = document.querySelector('input[type=password')
let closeInfoBtn = document.querySelector('#closeInfoBtn')
let info = document.querySelector('#info')
let userPref = document.querySelector('input[type=checkbox]')

if (localStorage.getItem('showInfo') === null) {
	localStorage.setItem('showInfo', true)
} else {
	if (JSON.parse(localStorage.getItem('showInfo')) === true) {
		info.style.display = 'block'
	}else{
		info.style.display = 'none'
	}
}

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

togglePwdBtn.addEventListener('click', () => {
	if (password.type === 'password') {
		password.type = 'text'
		togglePwdBtn.setAttribute('class', 'fas fa-eye-slash')
	}else{
		password.type = 'password'
		togglePwdBtn.setAttribute('class', 'fas fa-eye')
	}
})
closeInfoBtn.addEventListener('click', () => {
	if (userPref.checked === true) {
		localStorage.setItem('showInfo', false)
		info.style.display = 'none'
	} else {
		localStorage.setItem('showInfo', true)
		info.style.display = 'none'
	}
})

