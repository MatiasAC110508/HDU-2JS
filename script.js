const mySet = new Set([1, 1, 2, 2, 3, 4, 4, 5]);
console.log(mySet);
// Expected output: Set {1, 2, 3, 4, 5}

mySet.add(6);
console.log(mySet.has(6));
// Expected output: true

mySet.delete(3);
console.log(mySet);
// Expected output: Set {1, 2, 4, 5, 6}

for (const value of mySet) {
  console.log(value);
}
// Expected output:
// 1
// 2
// 4
// 5
// 6

let myMap = new Map([["key1", "value1"], ["key2", "value2"]]);
console.log(myMap);
// Expected output: Map { "key1" => "value1", "key2" => "value2" }

for (const value in myMap) {
  console.log(value);
}
// Expected output:
// key1
// key2

for (const value of myMap) {
  console.log(value);
}
// Expected output:
// key1: value1
// key2: value2

myMap.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
// Expected output:
// value1
// value2

// Lista de productos (pueden repetirse)
const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónica" },
    { id: 2, nombre: "Auriculares", precio: 150, categoria: "Electrónica" },
    { id: 3, nombre: "Libro", precio: 25, categoria: "Libros" },
    { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónica" }, // duplicado
    { id: 4, nombre: "Mouse", precio: 40, categoria: "Electrónica" }
];

// Función de validación
function validarProducto(producto) {
    if (!producto.id || !producto.nombre || !producto.precio) {
        console.error("Producto inválido:", producto);
        return false;
    }
    if (typeof producto.id !== "number" || typeof producto.nombre !== "string" || typeof producto.precio !== "number") {
        console.error("Tipos incorrectos en producto:", producto);
        return false;
    }
    return true;
}

// Filtramos solo productos válidos
const productosValidos = productos.filter(validarProducto);

// 1️⃣ Lista completa de productos válidos
console.log("Lista completa de productos válidos:");
console.log(productosValidos);

// 2️⃣ Lista de productos únicos usando Set (basado en JSON)
const productosUnicos = new Set(productosValidos.map(p => JSON.stringify(p)));
console.log("Productos únicos:");
productosUnicos.forEach(p => console.log(JSON.parse(p)));

// 3️⃣ Categorías y nombres de productos usando Map
const categoriasMap = new Map();

productosValidos.forEach(producto => {
    if (!categoriasMap.has(producto.categoria)) {
        categoriasMap.set(producto.categoria, []);
    }
    categoriasMap.get(producto.categoria).push(producto.nombre);
});

console.log("Categorías y nombres de productos:");
console.log(categoriasMap);

