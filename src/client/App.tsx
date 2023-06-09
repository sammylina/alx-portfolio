import {useState} from 'react';
import MainView from "./pages/Home"
import Register from "./components/Register"
import Login from './components/Login'

export default function App() {
    
    const [currentUser, setCurrentUser] = useState('');
    const [loggedIn, setLoggedIn] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    return (
        <div className=' pl-96'>
            {/* Login dialog box */}
            <div className="border-r bg-white">
                {showLogin && (<Login showLogin={showLogin} setShowLogin={(show) => setShowLogin(show)} onLogin={(user: string) => {
                    setCurrentUser(user)
                    setLoggedIn(true)
                }}/>)}
            </div>
            {/* Main application(always avaialble)*/}
            <MainView username={currentUser} 
                      loggedIn={loggedIn} 
                      setLoggedIn={(loggedIn) => setLoggedIn(loggedIn)}
                      setCurrentUser={(username) => setCurrentUser(username)}
                      setShowLogin={(show) => setShowLogin(show)}
                      setShowRegister={(show) => setShowRegister(show)}
                />
            {/* Register dialog box */}
            <div className='py-4 pl-10 pr-28 bg-white'>
                {showRegister && (<Register setShowRegister={(show) => setShowRegister(show)}/>) }
            </div>
        </div>
    )
}