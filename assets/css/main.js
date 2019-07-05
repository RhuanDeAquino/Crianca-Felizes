//let menuLista = document.getElementById('menu-lista')
let click = 0;

let eventclick = () => {
	let compara = click % 2;
	if (compara == 0 ){
		menuLista.style.display = 'block'
		click++
	}
	else {
		menuLista.style.display = 'none'
		click++
	}
	console.log(compara)

}



