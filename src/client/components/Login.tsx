import {remult} from 'remult'
import {FormEvent, useState} from 'react'

interface loginProps {
    onLogin: (user: string) => void;
    showLogin: boolean,
    setShowLogin: (show: boolean)  => void,
}

// Login Dialog Component
export default function Login({onLogin, setShowLogin}: loginProps) {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = async (e: FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, password})
        })
        if (response.ok) {
            // save the logged in user in frontend for later use
            remult.user = await response.json();
            const username = remult.user?.name || '';
            onLogin(username)
        }else {
            alert(await response.json())
        }
        
        setName('')
        setPassword('')
        setShowLogin(false)
    }

    return (
    <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setShowLogin(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="">
                            <div className="mt-2 text-center ">
                                <h4 className="text-lg font-medium text-gray-800">
                                    SignIn to Twitter
                                </h4>

        <form onSubmit={userLogin} className='w-full my-4'>
            <div className='p-2 '>
                <input placeholder='Name or email'
                       value={name}
                       onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='p-2'>
                <input placeholder='Password'
                       type='password'
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='p-4'>
                <button className='bg-blue-400 text-white py-1 mx-2' onClick={userLogin}>Log in</button>
                <button className='p-0 text-sm text-red-500 border-none'>Forget password?</button>
            </div>
            <div>
                <p>Don't have an account? <a>Sign up</a></p>
            </div>
        </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
   // return (
   // )
}