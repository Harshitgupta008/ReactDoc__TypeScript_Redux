import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SliderStatus } from "../../Redux/feature/ReduxThunk/ReduxSlideSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const slidestatus:boolean = useSelector((state: any) => state.slider.slidestatus);
    const cartTotalQuantity:number = useSelector((state: any) => state.cart.cartTotalQuantity);

    const { productid } = useParams();

    const Navigate = useNavigate();
    const BackPage = () => {
        return Navigate(-1);
    }
    return <>
        <div className="fixed bg-white z-50  h-20 shadow-lg w-full justify-between px-5 items-center flex">
            <div className="h-fit flex justify-center items-center gap-5 w-fit">
                {
                    productid ?
                        <svg onClick={BackPage} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 cursor-pointer">
                            <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
                        </svg>
                        :
                        <div onClick={() => dispatch(SliderStatus())} className="sm:hidden w-6 h-6 transition-all duration-500 ease-in-out relative flex justify-center items-center cursor-pointer flex-col gap-1">
                            <div className={`h-[3px] w-5 bg-black rounded-full transition-transform duration-700  ease-in-out ${slidestatus ? "rotate-[45deg] absolute " : ""}`}></div>
                            <div className={`h-[3px] w-5 bg-black rounded-full transition-opacity  ${slidestatus ? "opacity-0" : ""}`}></div>
                            <div className={`h-[3px] w-5 bg-black rounded-full transition-transform duration-700  ease-in-out ${slidestatus ? "rotate-[-45deg] absolute" : ""}`}></div>
                        </div>
                }

                <Link to={""}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44.36 48.82" className="h-9 w-9">
                        <g data-name="Layer 2" fill="#000000" className="color000 ">
                            <g data-name="Layer 1" fill="#000000" className="color000 ">
                                <path fill="#ff491f" d="M37.17 48.82H0L3.77 12.5H33.4l.6 6.06Z" className="colorff491f " />
                                <path fill="#ed3618" d="M19.09 24.24h20.59l2.62 24.58H16.47Z" className="colored3618 " />
                                <path fill="#ffe14d" d="M21.15 24.24h20.59l2.62 24.58H18.53Z" className="colorffe14d " />
                                <path fill="currentColor" d="M26.58 16.79a.74.74 0 0 1-.74-.74V8.73a7.26 7.26 0 1 0-14.51 0v7.33a.74.74 0 1 1-1.47 0V8.73a8.73 8.73 0 0 1 17.46 0v7.33a.74.74 0 0 1-.74.73zM31.45 39a5.51 5.51 0 0 1-5.51-5.51v-4.76a.74.74 0 1 1 1.47 0v4.77a4 4 0 0 0 8.07 0v-4.77a.74.74 0 0 1 1.47 0v4.77a5.51 5.51 0 0 1-5.5 5.5z" className="text-slate-700 " />
                            </g>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className="hidden sm:flex w-fit h-fit border-[1px] py-1 gap-2 px-2 justify-center items-center rounded-xl  border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" placeholder="Search the product" className="h-7 w-80 outline-none" />
            </div>
            <div className="flex  gap-10">

                <Link to={"/reduxthunkApi/userCart"} className="relative">
                    {
                        cartTotalQuantity === 0 ? "" :
                            <div className="min-h-5 min-w-6 w-fit  absolute top-[-16px] left-[-12px] flex justify-center items-center bg-red-500 rounded-full text-sm text-white"> {cartTotalQuantity}
                            </div>
                    }
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </Link>

                <Link to={""}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </Link>
            </div>
        </div>
    </>
}
export default Navbar;