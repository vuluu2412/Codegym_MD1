const Connection = require('../model/connection');
Connection.connecting();

class ProductService {
    static getProducts() {
        let connection = Connection.getConnection();
        return new Promise((resolve, reject) => {
            connection.query('select * from ProductList', (err, products) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(products);
                }
            });
        })
    }

    static saveProduct(product) {
        let connection = Connection.getConnection();
        return new Promise((resolve, reject) => {
            connection.query(`insert into ProductList (name,price,quantity)VALUES ('${product.name}',${+product.price},${+product.quantity}) `, (err, products) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('Create success')
                    resolve(products);
                }
            });
        })
    }

    static findById(id) {
        let connection = Connection.getConnection();
        return new Promise((resolve, reject) => {
            connection.query(`select * from productlist where id = ${id} `, (err, products) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(products);
                }
            });
        })
    }

    static editProduct(product,id) {
        let connection = Connection.getConnection();
        return new Promise((resolve, reject) => {
            connection.query(` update productlist set name = '${product.name}', price = ${product.price},quantity = ${product.quantity} where id = ${id}`, (err, products) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('Edit success')
                    resolve(products);
                }
            });
        })
    }
}

module.exports = ProductService;