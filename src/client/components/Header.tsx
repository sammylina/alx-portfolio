

export default function Header() {
    return (
        <nav className='flex p-4 top-0 sticky border-b bg-white justify-between items-center'>
            <h1 className="text-lg font-extrabold ">Home</h1>
            <div>
                <button className="py-1 px-4 bg-blue-400">Login</button>
            </div>
        </nav>
    )
}