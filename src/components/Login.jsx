import {useState,useEffect,useContext} from 'react';
import { data } from '../App'
import { useLocation,useNavigate,useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const history = useLocation();
  const navigate = useNavigate();
  const handleLogin = () => {
    history.pathname = '/home';
    navigate(history.pathname);
  }
  return (
    <>
      <div className='container'>
          <div className='row'>
            <ToastContainer />
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <h2 className='text-success text-center'>Login</h2>
                <div className='form-group'>
                  <label>Username</label>
                  <input type='text' className='form-control' value='dummy@gmail.com' placeholder='Enter Your Useraname dummy@gmail.com' />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input type='text' className='form-control' value='dummy@123' placeholder='Enter Your Password dummy@123' />
                </div>
                <div className='form-group'>
                  <input type='submit' onClick={handleLogin} className='form-control btn btn-warning' value='Login'/>
                </div>
            </div>
            <div className='col-md-4'>
              <img className='login-img' src="https://media.istockphoto.com/id/1177049680/vector/movie-tickets-vector-cinema-ticket-design.jpg?s=612x612&w=0&k=20&c=6gZIUIPsNas6jCs-Vh3SeX7kTu6zGFUEVZDLdQHDvCc=" />
            </div>
          </div>
      </div>
    </>
  )
}
