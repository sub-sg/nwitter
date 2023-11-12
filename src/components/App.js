import React from 'react';
import { useEffect, useState } from 'react';
import AppRouter from "./Router";
import { authService } from "../fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /* Test
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  setInterval(()=>{console.log(authService.currentUser);}, 2000);
  console.log(authService.currentUser);
  */

  // useEffect 함수는 특정한 시점에 실행되는 함수
  useEffect(()=> {
    console.log("useEffect()::");
    authService.onAuthStateChanged((user) => {
      console.log('======?');
      console.log(user);
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []); //[]로 지정해야 컴포넌트가 최초로 렌더링이 완료되었을 때, 1회만 동작함

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "initializing..."}
      {/* <AppRouter isLoggedIn={isLoggedIn} /> */}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
