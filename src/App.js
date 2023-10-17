import './App.css';
import Dashboard from './modules/Dashboard/Index';
import Form from './modules/Form/Form';
import { Routes,Route,Navigate } from 'react-router-dom';

const ProtectedRoutes=({children})=>{
  let isLoggedIn =localStorage.getItem('user:token')!==null;
  //development isloggedin=true;
  // isLoggedIn=true;
  if(!isLoggedIn) {return <Navigate to={'/users/sign_in'}/>}
  else if(isLoggedIn && ['/users/sign_in','/users/sign_up'].includes(window.location.pathname))
  {
    return <Navigate to={'/'}/>
  }
  return children
}

function App() {
  return (
   
    <Routes>
      <Route path='/' element={
        <ProtectedRoutes>
          <Dashboard/>
        </ProtectedRoutes>
      }></Route>
      <Route path='/users/sign_in' element={<ProtectedRoutes><Form isSignInPage={true}/></ProtectedRoutes>}></Route>
      <Route path='/users/sign_up' element={<ProtectedRoutes><Form isSignInPage={false}/></ProtectedRoutes>}></Route>
    </Routes>
    
    
  );
}

export default App;
