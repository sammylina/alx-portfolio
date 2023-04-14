import {FormEvent, useState} from 'react'
import User from '../../shared/User'
import {remult} from 'remult'

// Remult User object
const userRepo = remult.repo(User)

interface registerProp {
    setShowRegister: (show: boolean) => void,
}

export default function Register({setShowRegister}: registerProp) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const registerUser = async (e: FormEvent) => {
        e.preventDefault();

        try {
         await userRepo.insert({
            name,
            email,
            password
        })} catch(e: any) {
            alert(e.message)
        }
        setName('')
        setEmail('')
        setPassword('')
        setShowRegister(false)
    }



    return (
    <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setShowRegister(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="">
                            <div className="mt-2 text-center ">
                                <h4 className="text-lg font-medium text-gray-800">
                                    Create Your Account
                                </h4>

                    <form onSubmit={registerUser} className='my-4'>
                        <div className='p-2'>
                            <input placeholder="Name"
                                   type='text'
                                   value={name}
                                   onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='p-2'>
                            <input placeholder="Email"
                                   type='email'
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='p-2'>
                            <input placeholder="Password"
                                   type='password'
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <p className='text-sm text-blue-700'>By signing up, you agree to our <b>Terms</b>, <b>Privacy Policy</b>, and <b>Cookie Use</b>.</p>
                        <div className='my-4'>
                            <button className="w-2/3 bg-blue-400"
                                    onClick={registerUser}>Sign up</button>
                        </div>
                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    return (
        <div>
        </div>
    )
}