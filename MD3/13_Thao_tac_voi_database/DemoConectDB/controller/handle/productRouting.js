const fs = require('fs');
const qs = require('qs');
const ProductService = require('C:\\Users\\84967\\Desktop\\desktop\\Codegym_MD1-master\\Codegym_MD1\\MD3\\13_Thao_tac_voi_database\\DemoConectDB\\service\\ProductService.js');
// Pull ve copy lai duong dan tuyet doi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
class ProductRouting {
    static getHtmlProducts(products, indexHtml) {
        let tbody = '';
        products.map((product, index) => {
            tbody += ` <tr>
        <th scope="row">${index+1}</th>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td><a href="product/edit/${product.id}" class=" btn btn-success">Edit</a></td>
        <td><a href="product/delete/${product.id}"class=" btn btn-success">Delete</a></td>
    </tr>`
        });
        indexHtml = indexHtml.replace('{products}', tbody);
        return indexHtml;
    }

    static showHome(req, res) {
        fs.readFile('./view/index.html', "utf-8", async (err, indexHtml) => {
            if (err) {
                console.log(err);
            } else {
                let products = await ProductService.getProducts();
                indexHtml = ProductRouting.getHtmlProducts(products, indexHtml);
                res.writeHead(200, 'text/html');
                res.write(indexHtml);
                res.end();
            }
        });
    }

    static showFormCreate(req, res) {
        if (req.method === "GET") {
            fs.readFile('./view/product/create.html', "utf-8", async (err, createHtml) => {
                if (err) {
                    console.log(err);
                } else {
                    res.writeHead(200, 'text/html');
                    res.write(createHtml);
                    res.end();
                }
            });
        } else {
            let productChunk = '';
            req.on('data', chunk => {
                productChunk += chunk
            });
            req.on('end',async (err)=>{
                if (err){
                    console.log(err);
                } else {
                    let product= qs.parse(productChunk);
                   await ProductService.saveProduct(product);
                   res.writeHead(301,{'location':'/home'});
                   res.end();
                }
            });
        }
    }

    static showFormEdit(req, res,id) {
        if (req.method === "GET") {
            fs.readFile('./view/product/edit.html', "utf-8", async (err, editHtml) => {
                if (err) {
                    console.log(err);
                } else {
                    let product = await ProductService.findById(id);
                    editHtml = editHtml.replace('{name}',product[0].name);
                    editHtml = editHtml.replace('{price}',product[0].price);
                    editHtml = editHtml.replace('{quantity}',product[0].quantity);
                    res.writeHead(200, 'text/html');
                    res.write(editHtml);
                    res.end();
                }
            });
        }else {
            let productChunk = '';
            req.on('data', chunk => {
                productChunk += chunk
            });
            req.on('end',async (err)=>{
                if (err){
                    console.log(err);
                } else {
                    let product= qs.parse(productChunk);
                    console.log(product);
                    await ProductService.editProduct(product,id);
                    res.writeHead(301,{'location':'/home'});
                    res.end();
                }
            });
        }
    }

    static showFormDelete(req, res,id) {
        if (req.method === "GET") {
            fs.readFile('./view/product/delete.html', "utf-8", async (err, deleteHtml) => {
                if (err) {
                    console.log(err);
                } else {
                    // let product = await ProductService.findById(id);
                    res.writeHead(200, 'text/html');
                    res.write(deleteHtml);
                    res.end();
                }
            });
        }else {
            let productChunk = '';
            req.on('data', chunk => {
                productChunk += chunk
            });
            req.on('end',async (err)=>{
                if (err){
                    console.log(err);
                } else {
                    let product= qs.parse(productChunk);
                    console.log(product);
                    await ProductService.deleteProduct(product,id);
                    res.writeHead(301,{'location':'/home'});
                    res.end();
                }
            });
        }
    }
}
module.exports = ProductRouting;