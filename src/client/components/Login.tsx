import {remult, UserInfo} from 'remult'
import {FormEvent, useState} from 'react'
import UserController from '../../shared/UserController'


export default function Login() {

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
        console.log("response came back: ", response)
        if (response.ok) {
            remult.user = await response.json();
            console.log("remult user: ", remult.user)
        }else {
            console.log(await response.json())
        }
        
        setName('')
        setPassword('')
    }

    return (
        <form onSubmit={userLogin}>
            <div>
                <h3>Sign in to Twitter</h3>
            </div>
            <div>
                <input placeholder='Name or email'
                       value={name}
                       onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <input placeholder='Password'
                       type='password'
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <button onClick={userLogin}>Log in</button>
                <button>Forget password?</button>
            </div>
            <div>
                <p>Don't have an account? <a>Sign up</a></p>
            </div>
        </form>
    )
}