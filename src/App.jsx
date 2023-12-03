import React from 'react'
import Main from './UI/mainbox/MainBox'
import SignUp from './pages/signup/SignUp'
import SignIn from './pages/signin/SignIn'
import { useLocation } from 'react-router-dom';
import './App.css'


function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {

  return (
    <>
      <ScrollToTop />
      <Main />
      {/* <SignUp/> */}
      {/* <SignIn/> */}
    </>
  )
}

export default App
