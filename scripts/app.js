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
