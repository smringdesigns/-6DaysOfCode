// Bienvenida
alert("¡Bienvenido al sistema de lista de compras!");

let listaCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: []
};

// Funcion para mostrar la lista de compras
function mostrarLista() {
    let mensaje = "Lista de compras:\n";
    for (let categoria in listaCompras) {
        if (listaCompras[categoria].length > 0) {
            mensaje += `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaCompras[categoria].join(", ")}\n`;
        }
    }
    alert(mensaje);
    console.log(mensaje);
}

// Bucle principal
while (true) { 
    let opcion = prompt("¿Deseas agregar o eliminar un alimento a tu lista de compras? (agregar/eliminar/salir)").toLowerCase();

    if (opcion === "salir") { //si el texto leído es "salir", sale del bucle
        alert("Gracias por participar.")
        break;
    }

    if (opcion === "agregar") { // valor inicial como "sí", porque la primera vez siempre va a entrar en el while
        alert("Vamos a agregar los alimentos por categorías: ");

        let frutas = prompt("Agrega una fruta o deja vacío si no quieres agregar nada: ");
        if (frutas) {
            listaCompras.frutas.push(frutas);
            console.log(`Se ha agregado a tu lista: ${frutas}`);
        }

        let lacteos = prompt("Agrega un lacteo o deja vacío si no quieres agregar nada: ");
        if (lacteos) {
            listaCompras.lacteos.push(lacteos);
            console.log(`Se ha agregado a tu lista: ${lacteos}`);
        }

        let congelados = prompt("Agrega un congelado o deja vacío si no quieres agregar nada: ");
        if (congelados) {
            listaCompras.congelados.push(congelados);
            console.log(`Se ha agregado a tu lista: ${congelados}`);
        }

        let dulces = prompt("Agrega un dulce o deja vacío si no quieres agregar nada: ");
        if (dulces) {
            listaCompras.dulces.push(dulces);
            console.log(`Se ha agregado a tu lista: ${dulces}`);
        }
    } else if (opcion === "eliminar") {
        let categoriaEliminar = prompt("¿De qué categoría deseas eliminar un alimento? (frutas/lacteos/congelados/dulces)").toLowerCase();
        
        if (!listaCompras[categoriaEliminar] || listaCompras[categoriaEliminar].length === 0) {
            alert("No hay elementos en esta categoría para eliminar.");
            continue;
        }

        let itemEliminar = prompt(`Lista actual de ${categoriaEliminar}: ${listaCompras[categoriaEliminar].join(", ")}\n\nEscribe el nombre exacto del alimento que deseas eliminar:`);
        let indice = listaCompras[categoriaEliminar].indexOf(itemEliminar);

        if (indice !== -1) {
            listaCompras[categoriaEliminar].splice(indice, 1);
            alert(`Se ha eliminado ${itemEliminar} de la categoría ${categoriaEliminar}.`);
        } else {
            alert("El alimento no se encuentra en la lista.");
        }
    } else {
        alert("Opción no válida. Por favor, elige 'agregar', 'eliminar' o 'salir'.");
    }

    mostrarLista();

};