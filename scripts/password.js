let classXchange = (el, initial, final) => {
	document.querySelector(el).classList.remove(initial)
	document.querySelector(el).classList.add(final)
}

let checkPassword = (str) => {
	let specialChars = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

	if (str.match('.{8,}')) {
		classXchange('#length', 'unvalidated', 'validated')
	} else {
		classXchange('#length', 'validated', 'unvalidated')
	}
	
	if (str.match('[a-z]')) {
		classXchange('#lowercase','unvalidated','validated')
	} else {
		classXchange('#lowercase','validated','unvalidated')
	}
	
	if (str.match('[A-Z]')) {
		classXchange('#uppercase','unvalidated','validated')
	} else {
		classXchange('#uppercase','validated','unvalidated')
	}
	
	if (str.match('[0-9]')) {
		classXchange('#number', 'unvalidated', 'validated')
	} else {
		classXchange('#number', 'validated', 'unvalidated')
	}
	
	if (specialChars.test(str)) {
		classXchange('#special', 'unvalidated', 'validated')
	} else {
		classXchange('#special', 'validated', 'unvalidated')
	}
}

if (loadData().isSync === true) {
	form.onsubmit = (e) => {e.preventDefault()}
	document.querySelector('#result').style.display = 'block'
	document.querySelector("#checkPwdBtn").style.display = 'none'
	password.onkeyup = () => {
		let userPassword = password.value.toString()
		checkPassword(userPassword)
		if (document.querySelectorAll('.validated').length === 5) {
			document.querySelector('#copyPwdBtn').removeAttribute('hidden')
		}else{
			document.querySelector('#copyPwdBtn').setAttribute('hidden', '')
		}
	}
} else {
	form.addEventListener('submit', (e) => {
		e.preventDefault()
	
		let userPassword = password.value.toString()
		if (userPassword.length === 0 || userPassword.value === '') {
			createPopUp('Password cannot be empty!')
			conditions.forEach((val, ind, arr) => {
				val.classList.add('unvalidated')
			})
		} else {
			document.querySelector('#result').style.display = 'block'
			checkPassword(userPassword)
		}
	
		if (document.querySelectorAll('.validated').length === 5) {
			document.querySelector('#copyPwdBtn').removeAttribute('hidden')
		}else{
			document.querySelector('#copyPwdBtn').setAttribute('hidden', '')
		}
	})
}