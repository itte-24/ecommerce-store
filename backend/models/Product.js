// backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String },
  description: { type: String },
  price: { type: Number, required: true },
  condition: { type: String, enum: ['new', 'open-box', 'used'], default: 'new' },
  stock: { type: Number, default: 0 },
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
