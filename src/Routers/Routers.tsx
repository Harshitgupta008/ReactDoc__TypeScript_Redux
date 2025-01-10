import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home/Home";
import Todos from "../Component/Todos/Todos";
import Hooks from "../Component/Hooks/Hooks";
import TodoFigma from "../Component/TodoFigme/TodoFigms";
import ReduxAndReduxToolkit from "../Component/ReduxAndReduxToolKit/ReduxAndReduxToolkit";
import UserDetail from "../Component/ReduxAndReduxToolKit/UserData/UserDetail";
import ReduxThunkMain from "../Component/ReduxAndReduxToolKit/Fetch Api Using Redux/ReduxThunkMain";
import ThunkHome from "../Component/ReduxAndReduxToolKit/Fetch Api Using Redux/ThunkComponent/ThunkHome";
import ProductDetail from "../Component/ReduxAndReduxToolKit/Fetch Api Using Redux/ThunkComponent/ProductDetail";
import ItemCart from "../Component/ReduxAndReduxToolKit/Fetch Api Using Redux/ThunkComponent/ItemCart";

const Routers: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todos />} />
            <Route path="/hooks" element={<Hooks />} />
            <Route path="/todoFigma" element={<TodoFigma />} />
            <Route path="/Redux-toolkit" element={<ReduxAndReduxToolkit />} />
            <Route path="/Redux-toolkit/user/:userid" element={<UserDetail />} />

            {/* Thunk route start here */}
            <Route path="/reduxthunkApi" element={<ReduxThunkMain />}>
                <Route path="/reduxthunkApi" element={<ThunkHome />} />
                <Route path="/reduxthunkApi/:productid" element={<ProductDetail />} />
                <Route path="/reduxthunkApi/userCart" element={<ItemCart />} />
            </Route>
        </Routes>
    )
}
export default Routers;