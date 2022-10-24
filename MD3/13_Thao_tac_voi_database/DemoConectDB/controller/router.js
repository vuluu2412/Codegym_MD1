const ProductRouting = require('./handle/productRouting');
// const NotFoundRouting = require('./handle/notFoundRouting')
const handler = {
    "home":ProductRouting.showHome,
    "product/create":ProductRouting.showFormCreate,
    "product/edit":ProductRouting.showFormEdit,
    "product/delete":ProductRouting.showFormDelete

}
module.exports = handler;