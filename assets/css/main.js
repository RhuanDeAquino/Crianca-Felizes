//let menuLista = document.getElementById('menu-lista')
let click = 0;

let eventclick = () => {
	let compara = click % 2;
	if (compara == 0 ){
		menuLista.style.display = 'block'
		click++
		imgLogo.style.display = 'none'
		nav.style.width = '100%'
	}
	else {
		menuLista.style.display = 'none'
		click++
		imgLogo.style.display = 'block'
	}
	console.log(compara)

}




