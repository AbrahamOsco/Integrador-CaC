// esto es un arreglo de objetos no un json.Es decir esto es lo que escupe al hacer a un archivo.json un 
// JSON.parse("archivo.json") 
const productos = [
    {
        "id": 1,
        "nombre": "juan perez",
        "descripcion" : "una descripcion",
    }
]

exports.productos = productos;