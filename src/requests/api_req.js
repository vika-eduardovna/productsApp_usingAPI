export const getProducts = (callback) =>
    fetch('https://fakestoreapi.com/products?limit=8')
        .then(res => res.json())
        .then(json => callback(json))


export const deleteProduct = (callback, id) =>
    fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(json => callback(json))

        export const addNewProd = (body, callback) => {
            fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(json => callback(json))
        }