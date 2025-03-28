import React, { useState } from 'react'

const FarmersDashboardDetails = () => {
   
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: "",
        image: null
      });
    
      const [products, setProducts] = useState([]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
      };
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const imageURL = URL.createObjectURL(file); // Preview image before upload
          setProduct({ ...product, image: imageURL });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!product.name || !product.description || !product.price || !product.image) {
          alert("Please fill all fields.");
          return;
        }
    
        // Add new product to list
        setProducts([...products, product]);
    
        // Clear the form
        setProduct({ name: "", description: "", price: "", image: null });

        document.getElementById("imageInput").value = "";
      };
    
    

  return (
    <div>
      <div className="flex flex-row">
        <div className='border h-auto border-slate-700 w-60 bg-slate-700'>
            {/* side bar */}
<ul className='text-white tracking-wide pt-32 font-bold '>
           <li ><a href="" className='hover:  hover:bg-green-700 px-4 py-2 rounded ml-2' >View Products</a></li>
            <li className='pt-8'><a href="#" className='hover:  hover:bg-green-700 px-4 py-2 rounded ml-2'>Upload Product</a></li>
            <li className='pt-8'><a href="#" className='hover:  hover:bg-green-700 px-4 py-2 rounded ml-2'>View Orders</a></li>
            <li className='pt-8'><a href="#" className='hover:  hover:bg-green-700 px-4 py-2 rounded ml-2'>Sales Analysis</a></li>
            <li className='pt-8'><a href="#" className='hover:  hover:bg-green-700 px-4 py-2 rounded ml-2'>Comments & Reviews</a></li>
</ul>
        </div>
        <div className='dashboard'>
          <div className='border ml-5 w-[1025px]  h-auto bg-slate-200 border-slate-200 rounded '>
          <h2 className='text-center text-3xl font-bold'>My Products</h2>
          <div id="my-products-container" className="flex flex-wrap gap-8 justify-center mb-16  border w-[97%] border-white ml-5 rounded-lg bg-white shadow-lg shadow-slate-400">
          
    {products.length > 0 ? (
      products.map((prod, index) => (
        <div key={index} className="product-container w-[300px] bg-white border border-gray-200 rounded-lg p-5 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center mb-8 h-[400px] mt-10">
          {/* Product Image */}
          <div className="product-image-container w-full h-64 flex justify-center items-center overflow-hidden rounded-lg mb-4 text-2xl ">
            {prod.image && (
              <img src={prod.image} alt={prod.name} className="image-preview object-cover w-full h-full" />
            )}
          </div>
          
          {/* Product Details (Name and Description) */}
          <div className="product-details text-center w-full">
            <h3 className="product-name text-3xl font-semibold text-gray-800 mb-2 ">{prod.name}</h3>
            <p className="product-description text-xl text-gray-600 mb-4 text-left tracking-wide">{prod.description}</p>
          </div>
          
          {/* Product Footer (Price) */}
          <div className="product-footer w-full flex justify-center mt-4">
            <p className="product-price text-lg font-semibold text-green-500 bg-green-50 px-4 py-2 rounded-lg text-left">
              Price: {prod.price}frs
            </p>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-600">No products uploaded yet.</p>
    )}
  </div>

          <div className='w-[900px] border border-white h-[700px] bg-white rounded ml-12 mt-8 shadow-lg shadow-slate-300 '>
            <h3 className='text-center text-3xl pt-5 font-bold'>
               Upload A Product
            </h3>
            <div className='border w-[50%] mt-8 ml-52 h-[500px] rounded shadow-xl shadow-slate-300 border-white'>
              <form onSubmit={handleSubmit} className='py-12'>
                <div className='gap-5'>
                <label htmlFor="Product Name"  className='ProductName  ml-5   ' >Product Name</label>
                <input name='name' onChange={handleChange} type="text" value={product.name}  placeholder='Enter the product Name' className='block border ml-5 mt-1 w-[90%] h-[40px] rounded pl-3 mb-5'/>
                <label htmlFor="Description" className='description mb-4 ml-5 '>Description</label>
                <input name='description'   onChange={handleChange} type="text" value={product.description}   placeholder='Describe the product' className='border block ml-5 mt-1 w-[90%] h-[40px] rounded pl-3 mb-5' />
                <label htmlFor="Price" className='Price mb-4 ml-5'>Price</label>
                <input name='price' onChange={handleChange} type="number" value={product.price}   placeholder='Enter the products price' className='border block ml-5 mt-1 w-[90%] h-[40px] rounded pl-3 mb-5'/>
                <label htmlFor="ProductImage" className=' Price mb-4 ml-5 mt-3'>
                  Product Image
                </label>
              <input id='imageInput'  name='image'   type="file" accept='image/*' onChange={handleImageChange} className='order block w-[90%] h-[45px] ml-5 mt-1 rounded pl-3 mb-5 border pt-3 text-sm  '/>
                
               
                </div>
                <button type='submit' className='border ml-[40%] w-[110px] h-[35px] rounded bg-green-700'>Upload</button>
                
              </form>
            </div>

          </div>
          <div className='border ml-12 mt-12 h-[100px] border-white mb-12 w-[88%] rounded bg-white  shadow-xl shadow-slate-300 '>
          <h3 className='pl-5 text-3xl font-bold'>Your Orders</h3>
               
              
            </div>
            <div className='border ml-12 mt-12 h-[100px] border-white mb-12 w-[88%] rounded bg-white  shadow-xl shadow-slate-300'>
                <h3 className='pl-5 text-3xl font-bold'>Sales Analytics</h3>
            </div>
            
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default FarmersDashboardDetails
