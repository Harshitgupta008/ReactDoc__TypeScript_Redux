import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../Redux/app/store";
import { useEffect, useState } from "react";
import { getData } from "../../Redux/feature/ReduxThunk/ReduxThunkSlice";
import Loader from "../../Loader";
import { addToCart } from "../../Redux/feature/CartFeture/CartSlice";

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
}

const ProductDetail: React.FC = () => {
    const [productData, setProductData] = useState<ProductsType>();
    const dispatch = useDispatch<AppDispatch>();
    const { data, isLoading, isError } = useSelector((state: any) => state.product);

    const { productid } = useParams();

    const calculateDiscountedPrice = (price: number, discount: number) => {
        const discountAmount = (price * discount) / 100;
        return Math.floor(price - discountAmount);
    }

    useEffect(() => {
        dispatch(getData())
    }, [dispatch]);

    useEffect(() => {
        if (data && productid) {
            const findDetail = data.products.find((product: ProductsType) => product.id === parseInt(productid));
            setProductData(findDetail);
        }
    }, [productid, data]);

    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <h1>Error loading products.</h1>;
    }
    return <>
        <div className="pt-5 h-fit flex justify-center items-center">
            {
                !productData ? <h1>Detail not Found</h1> :
                    <div className="w-full flex flex-wrap md:justify-evenly justify-center items-start md:items-center">

                        <div className="lg:h-[600px] p-5 lg:w-[600px] w-full md:h-96 md:w-96 flex justify-center items-center">
                            <img className="max-w-full h-auto lg:h-[600px] md:h-96" src={productData.image} alt="Product image" />
                        </div>

                        <div className="h-fit min-h-fit xl:w-1/2 p-5 w-full md:w-[400px] lg:h-[600px] md:h-96 flex justify-center items-center">
                            <div className="space-y-4">
                                <h1 className="text-xl font-semibold">{productData.title}</h1>

                                <div className="flex justify-start items-center gap-3">
                                    {
                                        !productData.discount ?
                                            <h1 className="text-xl font-bold"><span className="text-green-500">$</span>{productData.price}</h1>
                                            :
                                            <>
                                                <h1 className="text-gray-400 text-lg line-through">{productData.price}</h1>
                                                <h1 className="text-xl font-bold"><span className="text-green-500">$</span>{calculateDiscountedPrice(productData.price, productData.discount)}</h1>
                                                <div className="text-sm flex h-fit w-fit justify-center items-center text-gray-500"><h1 className="bg-red-400 text-white min-h-6 min-w-6 p-1 h-fit w-fit rounded-full flex justify-center items-center ">{productData.discount}%</h1><span>off</span> </div>
                                            </>
                                    }
                                </div>

                                <div className="text-gray-700 text-sm flex flex-col gap-2">
                                    <div className="flex gap-3 ">
                                        <strong className="text-black">Brand:</strong> {productData.brand}
                                    </div>
                                    <div className="flex gap-3">
                                        <strong className="text-black">Model:</strong> {productData.model}
                                    </div>
                                    <div className="flex gap-3">
                                        <strong className="text-black">Color:</strong> {productData.color}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="font-medium text-lg">About this Product:</h2>
                                    <p className="text-sm text-gray-600">{productData.description}</p>
                                </div>

                                <div className="bg-gray-600 flex gap-2 mt-4 px-6 py-2 h-fit w-48 rounded-xl justify-center items-center cursor-pointer text-white hover:bg-gray-700 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    <button onClick={()=>dispatch(addToCart(productData))} className="h-fit w-fit">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    </>
}
export default ProductDetail;