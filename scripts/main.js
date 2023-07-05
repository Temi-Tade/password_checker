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
	let state = loadData()
	if (userPref.checked === true) {
		state.showInfo = false
		info.style.display = 'none'
		saveData(state)
	} else {
		state.showInfo = true
		info.style.display = 'none'
		saveData(state)
	}
})

let changeTheme = (el, val) => {
	let state = loadData()
	if (el.checked === true) {
		val = "dark"
		state.theme = val
		darkModeCss.href = './styles/darkmode.css'
		createPopUp('Dark theme initialized')
		saveData(state)
	} else {
		val = "light"
		state.theme = "light"
		darkModeCss.href = ''
		createPopUp('Light theme initialized')
		saveData(state)
	}
}