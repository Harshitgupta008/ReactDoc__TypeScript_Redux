import { Provider } from "react-redux"
import Routers from "./Routers/Routers"
import { store } from "./Component/ReduxAndReduxToolKit/Redux/app/store"

const App: React.FC = () => {

  return (
    <>
      <div className='bg-gray-400 min-h-screen h-fit w-full flex flex-col gap-5'>
        <Provider store={store}>
          <Routers />
        </Provider>
      </div>
    </>
  )
}

export default App
