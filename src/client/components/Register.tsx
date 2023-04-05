import {FormEvent, useState} from 'react'
import User from '../../shared/User'
import {remult} from 'remult'

const userRepo = remult.repo(User)

export default function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const registerUser = (e: FormEvent) => {
        e.preventDefault();

        userRepo.insert({
            name,
            email,
            password
        })
        setName('')
        setEmail('')
        setPassword('')
    }
    return (
        <div>
            <form onSubmit={registerUser}>
                <div>Create your account</div>
                <div>
                    <input placeholder="Name"
                           type='text'
                           value={name}
                           onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input placeholder="Email"
                           type='email'
                           value={email}
                           onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <input placeholder="Password"
                           type='password'
                           value={password}
                           onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p>By igning up, you agree to our <b>Terms</b>, <b>Privacy Policy</b>, and <b>Cookie Use</b>.</p>
                <div>
                    <button className="w-2/3 bg-blue-400"
                            onClick={registerUser}>Sign up</button>
                </div>
            </form>
        </div>
    )
}