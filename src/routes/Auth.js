// mysite/Auth
import React from 'react';
import { useState } from 'react';
import { authService } from '../fbase';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

    const onChange = (event) => {
        // console.log(event.target.name);
        const {
            target: { name, value }
        } = event;

        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault(); // onSubmit 함수에서 이벤트의 기본값을 막음 (기본값인 페이지 새로고침 방지)
        try {
            let data;   
            if (newAccount) {
                // create new account
                data = await authService.createUserWithEmailAndPassword(email, password);
                //authService.setPersistence('session');    // local(default), session, none
            } else {
                // log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <input name='email' type='email' placeholder='Email' required value={email} onChange={onChange}/>
                    <input name='password' type='password' placeholder='Password' required  value={password} onChange={onChange}/>
                    <input type='submit' value={newAccount ? 'Create Account' : 'Log In'} />
                </form>
            </div>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </>
    );
}

export default Auth;