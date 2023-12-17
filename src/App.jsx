import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

import Header from './components/sharedComponents/Header'
import Footer from './components/sharedComponents/Footer'
import Home from './components/user/home/Home'
import Nav from './components/sharedComponents/Nav'
import Login from './components/guest/Login';
import Register from './components/guest/Register';
import MyProfile from './components/user/MyProfil/MyProfil';
import Statistic from './components/user/Statistic';
import Wallet from './components/user/Wallet/Wallet';
import AddTransaction from './components/user/AddTransaction';
import NotFound from './components/sharedComponents/NotFound';
import AddCard from './components/user/MyProfil/cardInformation/AddCard';
import Logout from './components/user/Logout';
import AuthGuard from './components/guards/AuthGuard';
import { AuthProvider } from './utils/context/userContext';

function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Nav />
            <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
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
                </Route>
                <Route path='/*' element={< NotFound />} />
              </Routes>
              <Footer />
            </main>
          </div>
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
