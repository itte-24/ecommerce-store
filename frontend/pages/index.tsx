import axios from 'axios';
import { useEffect, useState } from 'react';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  condition: string;
  images: string[];
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-white p-4">
      <h1 className="text-2xl font-bold mb-6">🛍️ Product Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="border rounded p-4 shadow hover:shadow-md transition">
            <img
              src={product.images?.[0] || '/no-image.png'}
              alt={product.name}
              className="w-full h-48 object-cover mb-3 rounded"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.condition}</p>
            <p className="text-xl font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
