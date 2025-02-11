const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quentity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('cart', cartSchema);