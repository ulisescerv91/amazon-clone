import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';

import { auth } from '../../firebase'

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const singIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                //successfully   created a new user with email and password
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>
            <div className="login__container">
                <h1>Sing-In</h1>

                <form >
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__container__singInButton' onClick={singIn}>Sing In</button>
                </form>

                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, consequuntur. Et, vero. Quidem rem praesentium dolores ab ut maxime mollitia aspernatur reiciendis rerum, laboriosam minima?
                </p>

                <button className='login__container__registerButton' onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}
