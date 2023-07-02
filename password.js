let form = document.querySelector('form')

let classXchange = (el, initial, final) => {
	document.querySelector(el).classList.remove(initial)
	document.querySelector(el).classList.add(final)
}

let checkPassword = (str) => {
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
	
	if (str.match('\i','[a-zA-Z0-9]')) {
		classXchange('#special', 'validated', 'unvalidated')
	} else {
		classXchange('#special', 'unvalidated', 'validated')
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	
	let userPassword = password.value.toString()
	if (userPassword.length === 0 || userPassword.value === '') {
		alert('Password cannot be empty!')
		document.querySelectorAll('#conditions ul li').forEach((val, ind, arr) => {
			val.classList.add('unvalidated')
		})
	}else{
		checkPassword(userPassword)
	}
})