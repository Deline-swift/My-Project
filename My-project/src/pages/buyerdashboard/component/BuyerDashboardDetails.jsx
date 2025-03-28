import React, { useState, useEffect } from 'react';
import image1 from "../../../assets/image/Apples.jpg"
import image2 from "../../../assets/image/Cabbage.jpg"
import image3 from "../../../assets/image/Banana.jpg"
import image4 from "../../../assets/image/Cucumbers.jpeg"
import image5 from "../../../assets/image/BellPepper.jpg"
import image6 from "../../../assets/image/Orange.jpeg"
import image7 from "../../../assets/image/Carrot.jpeg"
import image8 from "../../../assets/image/Strawberries.jpg"
import image9 from "../../../assets/image/Tomatoes.jpg"



const fetchProducts = () => {
  return [
    { id: 1, name: 'Tomatoes', price: '2000frs', image: image9, category: 'Vegetables', description: 'Fresh red tomatoes.' },
    { id: 2, name: 'Cabbage', price: ' 3000frs', image: image2, category: 'Vegetables', description: 'Fresh and crispy cabbage.' },
    { id: 3, name: 'Carrots', price: ' 400frs', image: image7, category: 'Vegetables', description: 'Sweet and fresh carrots.' },
    { id: 4, name: 'Bananas', price: ' 2300frs', image: image3, category: 'Fruits', description: 'Sweet yellow bananas.' },
    { id: 5, name: 'Oranges', price: '4000frs', image: image6,category: 'Fruits', description: 'Juicy fresh oranges.' },
    { id: 6, name: 'Apples', price: '10000frs', image:image1, category: 'Fruits', description: 'Crunchy red apples.' },
    { id: 7, name: 'cucumbers', price: '6500frs', image: image4, category: 'vegetable', description: 'Fresh and Healthy Cumcumbers From our Farm.' },
    { id: 8, name: 'Strawberry', price: '18000frs', image: image8, category: 'Fruits', description: 'Fresh Strawberries Just The way you like it.' },
    { id: 9, name: 'Bell Pepper', price: '8000frs', image: image5, category: 'vegetables', description: 'Make your meals more spicy with our fresh bell pepper.' },

  ];
};

function BuyerDashboardDetails() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('name');
  const [modalProduct, setModalProduct] = useState(null);

  // Simulating a component mount that fetches product data
  useEffect(() => {
    const data = fetchProducts();  // Simulated data fetch
    setProducts(data);
  }, []);

  // Handle adding products to cart
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex === -1) {
      // Product not in the cart, add it
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    } else {
      // Product already in the cart, increase quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    }
  };

  // Handle searching products
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products by category
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products by name or price
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === 'price') {
      return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
    }
    return 0;
  });

  // Handle product modal (product details)
  const openModal = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-green-600 text-white w-64 p-4 flex flex-col space-y-6">
        
        <nav>
          <ul className="space-y-4 pt-12">
            <li>

            </li>
            <li className='hover:bg-green-500 p-2 rounded w-full text-left text-xl font-bold'><a href="#">Available Products</a></li>
            <li className='hover:bg-green-500 p-2 rounded w-full text-left text-xl font-bold'><a href="#">Cart</a></li>
            <li>
              <button className="hover:bg-green-500 p-2 rounded w-full text-left text-xl font-bold">Logout</button>
            </li>
            
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Available Products</h1>
          <div className="flex items-center space-x-4">
            <span className="font-medium">Welcome, Buyer</span>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Logout
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex items-center mb-6 space-x-4">
          <input
            type="text"
            placeholder="Search Products..."
            value={searchQuery}
            onChange={handleSearch}
            className="p-3 border border-gray-300 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="All">All Categories</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-[1000px]">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-lg text-green-600 mt-2">{product.price}</p>
              <p className='text-xl  pt-2'>{product.description}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg w-full hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
              
            </div>
          ))}
        </div>

        {/* Product Modal (for product details) */}
        {modalProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <button onClick={closeModal} className="absolute top-2 right-2 text-red-500 font-bold">X</button>
              <h2 className="text-2xl font-semibold">{modalProduct.name}</h2>
              <img
                src={modalProduct.image}
                alt={modalProduct.name}
                className="w-full h-48 object-cover rounded-md my-4"
              />
              <p className="text-lg">{modalProduct.description}</p>
              <p className="text-xl font-bold text-green-600 mt-4">{modalProduct.price}</p>
              <button
                onClick={() => addToCart(modalProduct)}
                className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg w-full hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}

        {/* Cart Summary */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold">Cart</h3>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between items-center p-2 border-b">
                  <span>{item.name}</span>
                  <span>{item.quantity} x {item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuyerDashboardDetails;