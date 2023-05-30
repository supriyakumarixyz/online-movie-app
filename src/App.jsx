import './App.css';
import React, { createContext } from 'react'
import Home from './components/Home';
import Login from './components/Login';
import Booking from './components/Booking';
import BookingSuccess from './components/BookingSuccess';
import { Routes, Route,Link } from 'react-router-dom';
import MOVIE_DATA from './constants/localmovies';
import seats from './constants/seats';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const data = createContext();
const seatdata = createContext();

export default function App() {
  
  return (
    <>
      <h4 className='text-center bg-dark text-light p-3'>Movie Ticket Booking App 
        {/* <Link to='/'><button className='btn btn-info float-right'>Home</button></Link> */}
      </h4>
      <data.Provider value={MOVIE_DATA}>
      <seatdata.Provider value={seats}>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/booking/:id' element={<Booking/>} />
        <Route exact path='/bookingsuccess/:id' element={<BookingSuccess/>} />
      </Routes>
      
      </seatdata.Provider>
      </data.Provider>
      <ToastContainer />
    </>
  )
}

export { data, seatdata }