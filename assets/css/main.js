//let menuLista = document.getElementById('menu-lista')
let click = 0;

let eventclick = () => {
	let compara = click % 2;
	if (compara == 0 ){
		menuLista.style.display = 'block'
		menuLista.style.display = 'flex'
		click++
		imgLogo.style.display = 'none'
		nav.style.width = '100%'
		nav.style.height = '55%'
		menuHamburguer.style.height = '50%'
	}
	else {
		menuLista.style.display = 'none'
		click++
		imgLogo.style.display = 'block'
		imgLogo.style.display = 'flex'
		nav.style.width = '32%'
		//menuHamburguer.style.height = '100%'
	}
	console.log(compara)

}





