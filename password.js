let form = document.querySelector('form')

let matches = {
	uppercase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
	lowercase: () => {
			matches.uppercase.map((val, ind, arr) => {
			return val.toLowerCase()
		})
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	
	let userPassword = password.value.toString()
	
})

x = matches.uppercase.map((val, ind, arr) => {
	return val.toLowerCase()
})

alert(x)