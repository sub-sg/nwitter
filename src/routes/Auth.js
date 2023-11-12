// mysite/Auth
import React from 'react';
import { useState } from 'react';
import { authService } from '../fbase';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    
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
        event.preventDefault(); // onSubmit 함수에서 이벤트의 기본값을 막음 (기본값인 페이지 새로고침 방지) 새로고침시 리액트 상태가 초기화 되는 현상이 발생함.
        try {
            let data;   
            if (newAccount) {
                // create new account
                data = await authService.createUserWithEmailAndPassword(email, password);
                //authService.setPersistence('session');    // local(default), session, none -- indexedDB 말고 sessionStorage에 저장됨. local 옵션은 indexedDB에 저장됨
            } else {
                // log in
                data = await authService.signInWithEmailAndPassword(email, password);
            }
            console.log(data);
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };

    /*
        UseState 함수들은 바로 이전 상태를 참조할 수 있음.
        UseState 함수에 함수를 인자로 전달하면 인자로 전달한 함수의 1번째 인자(prev)에 이전의 상태가 넘어옴.
    */
    const toggleAccount = () => setNewAccount((prev) => !prev);

    return (
        <>
            <div>
                <form onSubmit={onSubmit}>
                    <input name='email' type='email' placeholder='Email' required value={email} onChange={onChange}/>
                    <input name='password' type='password' placeholder='Password' required  value={password} onChange={onChange}/>
                    <input type='submit' value={newAccount ? 'Create Account' : 'Log In'} />
                    {error}
                </form>
                <span onClick={toggleAccount}>
                    {newAccount ? "Sign In" : "Create Account"}
                </span>
            </div>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </>
    );
}

export default Auth;