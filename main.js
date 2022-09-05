let articuloVenta

class Producto {
    constructor(articulo, valor, metodoDePago) {
        this.articulo = articulo;
        this.valor = valor;
        this.metodoDePago = metodoDePago;
    }
    
    lista1 = (precio1) => (this.valor = this.valor * 1.60);
    lista3 = (listaContado) => (this.valor = this.valor * 0.90);
    lista4 = (listaTarjeta) => (this.valor = this.valor * 1.45);

}

function datosCompra() {
    let articulo = prompt("Ingrese articulo a comprar");
    let valor = parseFloat(prompt("Ingrese valor del articulo"));
    let metodoDePago = prompt("Ingrese si paga contado o con tarjeta");

    const objet = new Producto(articulo, valor, metodoDePago);
    return objet;
}


function hideMenu() {
    const hide = prompt("Nota de venta para vender articulos, (Esc to exit)\n1. Agregar articulo de venta\n2. Ingresar valor unidad\n3. Elegir lista de pago contado\n4. Elegir lista de pago con tarjeta\n5. Mostrar resultado");
    return hide;
}

function objeText(objett) {
    let texto = "";
    for (const clave in objett) {
        if (typeof objett[clave] !== "function")
            texto += clave + " : " + objett[clave] + "\n";
    }
    return texto;
}

function caja() {
    let select = hideMenu();
    while (select?.toLowerCase() != "esc") {
        if (select != "") {
            select = parseInt(select);
            if (!isNaN(select)) {
                switch (select) {
                    case 1:
                        articuloVenta = datosCompra();
                        break;
                    case 2:
                        const precio_1 = parseFloat(prompt("ingrese nuevo valor de costo"));
                        articuloVenta.lista1(precio_1);
                        break;
                    case 3:
                        const contado = parseFloat(prompt("Ingrese contado"));
                        articuloVenta.lista3(contado);
                        break;
                    case 4:
                        const tarjeta = parseFloat(prompt("Ingrese tarjeta"));
                        articuloVenta.lista4(tarjeta);
                        break;
                    case 5:
                        const O_texto = objeText(articuloVenta);
                        alert(O_texto);
                        break;
                    default:
                        alert("opcion incorrecta");
                        break;
                }
            } else {
                alert("Error");
            }
        } else {
            alert("Select option");
        }
        select = hideMenu();
    }
}

function main() {
    articuloVenta = datosCompra();
    caja();
}

main();


