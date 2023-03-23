import MainView from "./pages/Home"

export default function App() {
    return (
        <div className='flex'>
            {/* Side bar */}
            <div className="w-1/4 border-r bg-white">Side bar</div>
            {/* Feed */}
            <MainView/>
            {/* Follow and Trends */}
            <div className='flex-1 py-4 pl-10 pr-28 bg-white'>Follow and Trends</div>
        </div>
    )
}