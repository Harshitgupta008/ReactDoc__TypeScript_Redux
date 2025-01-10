import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getData } from "../../Redux/feature/ReduxThunk/ReduxThunkSlice";
import { AppDispatch, RootState } from "../../Redux/app/store";
import Loader from "../../Loader";
import SideSlideBar from "./SideSlideBar";
import ImageCard from "./ImageCard";
import { useNavigate } from "react-router-dom";

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
const ThunkHome: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { data, isLoading, isError } = useSelector((state: RootState) => state.product);
    const [FilteredData, setFilteredData] = useState<any>();
    const [dataCategory, setDataCategory] = useState<Set<string>>(new Set());
    const [categorieStatus, setCategoryStatus] = useState<string>("all");

    const Navigate = useNavigate();

    const CheckProduct = (productid: number) => {
        return Navigate(`/reduxthunkApi/${productid}`)
    }

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    useEffect(() => {
        if (data && data.products) {
            const categories = new Set(data.products.map((product: ProductsType) => product.category));
            setDataCategory(categories);
            if (categorieStatus === "all") {
                setFilteredData(data);
            } else {
                const filteredProducts = data.products.filter((product: ProductsType) => product.category === categorieStatus);
                setFilteredData({
                    ...data,
                    products: filteredProducts,
                });
            }
        }
    }, [data, categorieStatus]);

    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <h1>Error loading products.</h1>;
    }
    return <>
        <div className="flex">
            <SideSlideBar dataCategory={dataCategory} setCategoryStatus={setCategoryStatus} categorieStatus={categorieStatus} />
            <div className="w-full h-fit gap-5 px-2 py-4 flex flex-wrap justify-center items-center">
                {
                    !FilteredData ? <h1 className="text-center mt-48">No data Found</h1>
                        :
                        FilteredData.products.map((product: ProductsType) => {
                            return <div key={product.id} >
                                <ImageCard title={product.title} price={product.price} discount={product.discount} image={product.image} id={product.id} CheckProduct={CheckProduct} product={product}/>
                            </div>
                        })
                }
            </div>
        </div>

    </>
}
export default ThunkHome