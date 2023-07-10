let createPopUp = (text) => {
	popUp.style.left = '0'
	popUp.innerHTML = text
	
	setTimeout(() => {popUp.style.left = '-25rem'}, 3000)
}

let copyPassword = (pwd) => {
	document.querySelector('#txt-id').value = password.value.toString()
	document.querySelector('#txt-id').select()
	document.execCommand('copy')
	createPopUp('Password copied successfully')
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
	} else {
		password.type = 'password'
		togglePwdBtn.setAttribute('class', 'fas fa-eye')
	}
})

closeInfoBtn.addEventListener('click', () => {
	let state = loadData()
	if (userPref.checked) {
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
		saveData(state)
		createPopUp('Dark theme activated')
	} else {
		val = "light"
		state.theme = val
		darkModeCss.href = ''
		saveData(state)
		createPopUp('Light theme activated')
	}
}

let changeValidationMode = (el, val) => {
	let state = loadData()
	if (el.checked === true) {
		createPopUp('Synchronous validation mode activated')
		document.querySelector("#checkPwdBtn").style.display = 'none'
		document.querySelector("#result").style.display = 'block'
		val = true
		state.isSync = val
		saveData(state)
		history.go(0)
	} else {
		createPopUp('Synchronous validation mode deactivated')
		document.querySelector("#checkPwdBtn").style.display = 'block'
		document.querySelector('#result').style.display = 'none'
		val = false
		state.isSync = val
		saveData(state)
		history.go(0)
	}
}

let clearAppData = () => {
	let req = confirm('You are about to clear all related data to this application, this includes all user preferences. This action cannot be undone, click OK to continue\nNote that the application will be relaunched after its related data is cleared')
	switch (req.toString()) {
		case 'true':
			createPopUp('Application data successfully cleared.')
			let state = loadData()
			state.theme = 'light'
			state.isSync = 'false'
			state.showInfo = 'true'
			saveData(state)
			history.go(0)
			break
			
		case 'false':
			createPopUp('Application data still remains intact')
	}
}

