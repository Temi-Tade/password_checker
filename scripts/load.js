document.onreadystatechange = (e) => {
	setTimeout(() => {
		document.querySelector("#loading").style.display = "none"
	}, 2500)
}