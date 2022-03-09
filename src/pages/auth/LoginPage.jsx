import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL  = process.env.REACT_APP_BACKEND_URL;
const USERS_PATH = BACKEND_URL + '/users';

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // <- handler

    const submitHandler = async (event) => {
        event.preventDefault();

        const options =  {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,   
            })
        };

        const result = await fetch(USERS_PATH+'/login', options);
        const body = await result.json();
        if (body.message === 'success') {
            const { token, user } = body.data;
            console.log('mein token:', token);
            console.log('Login succesfull');
            onLogin({
                user,
                token
            });
            navigate('/users');
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <div>
                Email: 
                <input type="text"
                    value={email}
                    onInput={(event) => setEmail(event.target.value)}></input>
            </div>
            <div>
                Password:
                <input type="password"
                    value={password}
                    onInput={(event) => setPassword(event.target.value)}></input>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginPage;