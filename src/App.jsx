import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'


import Header from './components/sharedComponents/Header'
import Footer from './components/sharedComponents/Footer'
import Home from './components/user/Home'
import Nav from './components/sharedComponents/Nav'
import Login from './components/guest/Login';
import Register from './components/guest/Register';
import MyProfile from './components/user/MyProfil/MyProfil';
import Statistic from './components/user/Statistic';
import Wallet from './components/user/Wallet/Wallet';
import AddTransaction from './components/user/AddTransaction';
import NotFound from './components/sharedComponents/NotFound';
import Details from './components/user/Details';
import AddCard from './components/user/MyProfil/cardInformation/AddCard';
import { AuthProvider } from './utils/context/userContext';
import Logout from './components/user/Logout';
import AuthGuard from './components/guards/AuthGuard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <Routes>
              <Route path='/' element={< Home />} />
              <Route path='/login' element={< Login />} />
              <Route path='/register' element={< Register />} />

              <Route element={< AuthGuard />}>
                <Route path='/logout' element={< Logout />} />
                <Route path='/profile' element={< MyProfile />} />
                <Route path='/profile/addCard' element={< AddCard />} />
                <Route path='/statistic' element={< Statistic />} />
                <Route path='/wallet' element={< Wallet />} />
                <Route path='/transaction' element={< AddTransaction />} />
                <Route path='/transaction/details' element={< Details />} />
              </Route>
              <Route path='/*' element={< NotFound />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
