let navBarBtn = document.querySelector('#navbarbtn')
let navBar = document.querySelector('nav')
let navBg = document.querySelector('#navbg')
let togglePwdBtn = document.querySelector('#togglePasswordBtn')
let password = document.querySelector('input[type=password]')
let closeInfoBtn = document.querySelector('#closeInfoBtn')
let info = document.querySelector('#info')
let userPref = document.querySelector('#showInfo')
let form = document.querySelector('form')
let conditions = document.querySelectorAll('ul#result li')
let popUp = document.querySelector('#pop-up')
let theme = document.querySelector("#theme")
let darkModeCss = document.querySelector('#darkmode')
let sync = document.querySelector('#syncVal')

let loadData = () => {
	return JSON.parse(localStorage.getItem('appUser'))
}

let setInfoDisplay = () => {
	let state = loadData()
	switch (state.showInfo.toString()) {
		case 'true':
			info.style.display = 'block'
			break
			
		case 'false':
			info.style.display = 'none'
			break
			
	}
}

let setTheme = () => {
	let state = loadData()
	switch (state.theme){
		case 'light':
			darkModeCss.setAttribute.href = ''
			theme.checked = false
			break
			
		case "dark":
			darkModeCss.href = './styles/darkmode.css'
			theme.checked = true
			break
	}
}

let setSync = () => {
	let state = loadData()
	switch (state.isSync.toString()) {
		case 'true':
			sync.checked = true
			break
		
		case 'false':
			sync.checked = false
			break
	}
}

//user_passwords: [], gen_pwsswords: []
if (localStorage.getItem('appUser') === null) {
	let me = {
		theme: "light",
		isSync: false,
		showInfo: true
	}
	localStorage.setItem('appUser', JSON.stringify(me))
} else {
	let state = loadData()
	
	setInfoDisplay()
	setTheme()
	setSync()
}

let saveData = (x) => {
	localStorage.setItem('appUser', JSON.stringify(x))
}

