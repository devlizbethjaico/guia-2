// Módulo de gestión de productos 

//creando un arreglo de variables

//cada producto es un objeto
var products = [
    { id: 1, name: 'Laptop HP', price: 2500},
    { id: 2, name: 'Mouse Logitech',   price: null},
    { id: 3, name: 'Teclado Mecánico', price: -50 },
   { id: 4, name: 'Monitor LG',price: undefined },

]
//console.log(products)
// Busca un producto por ID
function getProductById(id) {

  var result = null;
  for (var i = 0; i < products.length; i++) {
     console.log("Iteración:", i);
 // console.log("Producto actual:", products[i]);

    if (products[i].id ==id) {   // ← ¿ves el problema?
      result = products[i];
    }
  }
  //console.log('resuelto',result)
  return result;
}

//console.log(getProductById(1) ,'resultado')

const product = getProductById(2);
console.log(product, 'individual')

// Aplica descuento al precio del producto
function calculateDiscount(product, discount) {
  var finalPrice = product.price - (product.price * discount);
  return finalPrice;  // ← ¿qué pasa si price es null?
}
 const discounted = calculateDiscount(product, 0.1);
  console.log("Precio con descuento:", discounted);
  
// Filtra productos por precio mínimo
function filterExpensive(minPrice) {
  return products.filter(p => p.price > minPrice);
}

// Función interna de depuración
function debugLog(msg) {
  console.log('[DEBUG]', msg);  // ← nunca se usa ni se exporta
}
debugLog("Iniciando proceso");


module.exports = { getProductById, calculateDiscount, filterExpensive };
