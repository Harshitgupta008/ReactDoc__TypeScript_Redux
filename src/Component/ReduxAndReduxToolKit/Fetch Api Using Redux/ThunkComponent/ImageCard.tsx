import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/feature/CartFeture/CartSlice";

interface ProductDetailType {
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
}

interface ProductsType {
    title: string;
    image: string;
    price: number;
    discount: number;
    id: number;
    product: ProductDetailType;
    CheckProduct: (id: number) => void;
}

const ImageCard: React.FC<ProductsType> = ({ title, price, discount, image, id, CheckProduct, product }) => {

    const dispatch = useDispatch();

    const calculateDiscountedPrice = (price: number, discount: number) => {
        const discountAmount = (price * discount) / 100;
        return Math.floor(price - discountAmount);
    }

    const AddInCart = (product: ProductDetailType) => {
        dispatch(addToCart(product));
    }

    return <>
        <div className=" w-72  h-fit py-4 px-5 flex flex-col bg-white rounded-xl shadow-lg justify-center items-center gap-5">
            <div className="relative cursor-pointer hover:scale-110 ease-in-out duration-300 transition-all w-60  h-60">
                <img onClick={() => CheckProduct(id)} className="object-contain w-60 h-60" src={image} alt="product" />
                {
                    discount ?
                        <div className="absolute top-2 w-10 flex h-6 px-1 rounded-r-full items-center  bg-red-400"><span className="text-white text-sm">{discount}%</span></div>
                        : ""
                }
            </div>
            <div className="flex flex-col gap-3 justify-start w-full">
                <h1 className="font-semibold">{title.slice(0, 20)}...</h1>
                <div className="flex gap-3 justify-start items-center">
                    {
                        discount ?
                            <p className="line-through text-gray-500">{price}</p>
                            :
                            <p className="text-gray-500 line-through">0.00</p>
                    }
                    <h1 className="text-xl font-bold"><span className="text-green-500">$</span>{discount ? calculateDiscountedPrice(price, discount) : price}</h1>
                    <div className="w-full  flex justify-center">
                        <div  onClick={() => AddInCart(product)} className="h-fit flex cursor-pointer items-center gap-2 w-24 text-sm text-white bg-gray-500 hover:bg-gray-700 px-4 py-1 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <button className="text-lg"> Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default ImageCard