export const getProducts = (callback) =>
fetch('https://fakestoreapi.com/products?limit=8')
    .then(res=>res.json())
    .then(json=>callback(json))