import {remult} from 'remult'


interface authProps{
    username: string,
    loggedIn: boolean,
    setLoggedIn: (loggedIn: boolean) => void;
    setCurrentUser: (user: string) => void;
    showLoginDialog: (show: boolean) => void;
    showRegisterDialog: (show: boolean) => void;
}

const Header: React.FC<authProps> = ({loggedIn, setLoggedIn, setCurrentUser, showLoginDialog, showRegisterDialog}): JSX.Element => {

    const signout = () => {
        fetch('/api/signout', {
            method: 'POST',
        });
        // when the user signed out remove logged in user from frontend
        remult.user = undefined;
        setLoggedIn(false)
        setCurrentUser('')
    }
    return (
        <nav className='flex p-4 top-0 pb-8 border-b bg-white justify-between items-center'>
            <h1 className="text-lg font-extrabold ">Home</h1>
            <div>
                {loggedIn ? (<button className="py-1 px-4 bg-blue-400" onClick={signout}>Sign Out</button>) : 
                            (
                                <div className="flex"> 
                                    <button className="mx-3 py-1 px-4 bg-blue-400 text-sm text-white" onClick={() => showLoginDialog(true)}>Login</button>
                                    <button className="-1 py-1 px-4 bg-blue-400 text-sm text-white" onClick={() => showRegisterDialog(true)}>SignUp</button>
                                </div>
                            )
                }
            </div>
        </nav>
    )
}

export default Header;