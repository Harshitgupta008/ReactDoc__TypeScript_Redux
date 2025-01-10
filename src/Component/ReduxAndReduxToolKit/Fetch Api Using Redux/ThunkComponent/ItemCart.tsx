import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../Redux/feature/CartFeture/CartSlice";


interface ProductsType {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    brand: string;
    model: string;
    color: string;
    category: string;
    discount: number
    cartItemQuantity: number
}

const ItemCart: React.FC = () => {
    const cartItem = useSelector((state: any) => state.cart.cartItem);
    const cartTotalAmount: number = useSelector((state: any) => state.cart.cartTotalAmount);
    const dispatch = useDispatch();

    const calculateDiscountedPrice = (price: number, discount: number) => {
        const discountAmount = (price * discount) / 100;
        return Math.floor(price - discountAmount);
    }

    return <div className="flex flex-wrap justify-center gap-3">
        {
            cartItem.length === 0 ? <h1 className="w-full text-center font-bold text-2xl text-gray-500 pt-20">Cart is Empty</h1>
                :
                <>
                    <div className="flex flex-col pt-5 items-center">
                        {
                            cartItem.map((item: ProductsType) => {
                                return <div key={item.id} className="flex flex-wrap gap-10 items-center   justify-center rounded-lg shadow-lg w-fit py-6 p-2">
                                    <div className="h-56 w-full flex justify-center items-center  sm:w-56">
                                        <img src={item.image} alt="productImage" className="h-56 w-56" />
                                    </div>
                                    <div className=" flex flex-col  justify-center w-full sm:w-[500px]">
                                        <h1 className="text-black font-medium">{item.title}</h1>
                                        <h3 className="text-black">color: <span className="text-gray-500">{item.color}</span></h3>
                                        {
                                            item.discount ?
                                                <h3 className="text-gray-500">price: <span className="text-green-600 font-bold">$</span> <span className="font-bold">{calculateDiscountedPrice(item.price, item.discount)}</span> <span className="line-through text-lg">{item.price}</span></h3>
                                                :
                                                <h3 className="text-black">price: <span className="text-green-600 font-bold">$</span><span className="text-lg">{item.price}</span></h3>

                                        }
                                        <div className="flex mt-4">
                                            <button onClick={() => dispatch(removeToCart(item))} className="w-fit h-fit border-[1px] px-3 active:text-white active:bg-black border-gray-400 font-bold flex justify-center items-center">-</button>
                                            <h1 className="w-fit h-fit border-[1px] px-3 border-gray-400 flex justify-center items-center">{item.cartItemQuantity}</h1>
                                            <button onClick={() => dispatch(addToCart(item))} className="w-fit h-fit border-[1px] px-3 active:text-white active:bg-black border-gray-400 font-bold flex justify-center items-center">+</button>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                    <div className="h-fit w-full sm:w-[400px] my-20 flex flex-col rounded-xl shadow-lg py-3 gap-2 px-5">
                        <h1 className="font-bold text-2xl text-center">Order Summary</h1>
                        <hr className="border-1 border-gray-300" />
                        <div className="flex  flex-col">
                            <div className="flex gap-5">
                                <strong>Price: </strong><h1>${cartTotalAmount}</h1>
                            </div>
                            <div className="flex gap-5">
                                <strong>Delivery:</strong><h1 className="text-green-500 font-semibold">Free</h1>
                            </div>
                        </div>
                        <hr className="border-1 border-gray-300" />
                        <div className="flex gap-5">
                            <strong>Subtotal: </strong> <strong className="text-gray-500">${cartTotalAmount}</strong>
                        </div>
                        <div className="mt-5 mb-2">
                            <button className="bg-gray-500 text-white px-6 py-2 rounded-xl">Procced to Pay</button>
                        </div>
                    </div>
                </>
        }
    </div>
}
export default ItemCart;