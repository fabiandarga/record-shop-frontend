import { useState } from 'react';

const BACKEND_URL  = process.env.REACT_APP_BACKEND_URL;
const USERS_PATH = BACKEND_URL + '/users';

const RegisterPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault(); // Verhindert, dass der Browsert eine neue Seite öffnet
        console.log('/api/register', email, password);

        const options =  {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,   
            })
        };

        fetch(USERS_PATH, options);
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>Register</h2>
            <div>
                Email:
                <input type="text"
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}></input>
            </div>
            <div>
                Password:
                <input type="password"
                    value={password}
                    onInput={(e) => setPassword(e.target.value)}></input>
            </div>
            <div>
                First Name
                <input type="text"
                    value={firstName}
                    onInput={(e) => setFirstName(e.target.value)}></input>
            </div>
            <div>
                Last Name
                <input type="text"
                    value={lastName}
                    onInput={(e) => setLastName(e.target.value)}></input>
            </div>
            <div>
                <button>Register Now</button>
            </div>
        </form>
    )
}

export default RegisterPage;