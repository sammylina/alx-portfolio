import MainView from "./pages/Home"
import Register from "./components/Register"
import Login from './components/Login'

export default function App() {
    return (
        <div className='flex'>
            {/* Side bar */}
            <div className="w-1/4 border-r bg-white">
                <Login/>
            </div>
            {/* Feed */}
            <MainView/>
            {/* Follow and Trends */}
            <div className='flex-1 py-4 pl-10 pr-28 bg-white'>
                <Register/>
            </div>
        </div>
    )
}