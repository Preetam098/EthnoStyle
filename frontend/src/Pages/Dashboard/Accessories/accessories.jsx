import React , {useState , useEffect} from "react";
import Layout from "../../../Layout/Index";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../../Redux/actions/productAction";





const Accessories = () => {
  
  const dispatch = useDispatch();
  const [booking, setBooking] = useState({
    title: "",
    price: "",
    id: "",
  });
  const product = useSelector((state) => state?.productReducer?.product);

  const filterData = product.filter((data) => {
    return data.category === "electronics";
  });
  

  useEffect(() => {
    dispatch(productAction());
  }, []);
  console.log("ffff", filterData);

  const handleAddtoCart = (product) => {
    console.log("e.target.value", product);
    const { title, price, id } = product;
    setBooking({
      ...booking,
      title,
      price,
      id,
    });
  };


  return (
    <div className="container mx-auto my-10">
    <div className="grid grid-cols-1  place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {filterData?.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
            src={product.image}
            className="w-40 h-48 object-cover mx-auto object-center"
            alt={product.name}
          />
         
          <div className="p-4">
            <h3 className="text-md font-medium text-[#2b79c2]">{product.title}</h3>
            <p className="text-[#2b79c2] text-sm capitalize">{product.category}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold text-[#2b79c2]">${product.price}</span>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-[#2b79c2] rounded-full hover:bg-[#1d5d8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b79c2]"
                onClick={() => {
                  handleAddtoCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Layout(Accessories);