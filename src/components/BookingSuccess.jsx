import {useState,useEffect,useContext} from 'react';
import { data } from '../App'
import { useLocation,useNavigate,useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BookingSuccess() {
  const { id } = useParams();
  let bookedseat = id.split(',');
  const [seatnumber,setSeatNumber] = useState([]);
  const [paymode,setPaymode] = useState();
  const [timer,setTimer] = useState(60);
  
  useEffect(()=>{
    
    bookedseat.forEach((value)=>{
      if(!seatnumber.includes(value)){
      setSeatNumber(Object.keys(seatnumber.push(value)))
      }
    })

    timer > 0 && setTimeout(() => {
      setTimer(timer - 1)
      
    }, 1000);
    
  },[timer])

  const handlePayMode = (paymodeval) => {
    setPaymode(paymodeval);
  }
  const history = useLocation();
  const navigate = useNavigate();
  const handlePayNow = (e) => {
    e.preventDefault();
    if(paymode==true){
      toast(`Online Payment Mode Disabled Now...!!!`);
      setPaymode();
    }else if(paymode==false){
      toast(`Thank-You...!!!`);
      setPaymode();
      history.pathname = '/home';
      navigate(history.pathname);
    }else{
      toast(`Please Select Pay Mode...!!!`);
    }
    
  }
  
  return (
    <>
      <div className='container'>
      <Link to='/home'><button className='btn btn-info '>Home</button></Link>
      <Link to='/'><button className='btn btn-info float-right '>Logout</button></Link>
      </div>
      <div className='container text-center'>
          <div className='row'>
            <ToastContainer />
            <div className='col-md-12'>
                <h2 className='text-success'>Payment & Checkout</h2>
                <h4>Seat No : {id}</h4>   
                <h4>Total Amount To Paid : ${bookedseat.length*500}</h4>  
                <div className=''>
                  Payment Mode: <input name='paynow' type='radio' value='Online' onClick={()=>{handlePayMode(true)}}/> Online <input name='paynow' type='radio' value='Offline' onClick={()=>{handlePayMode(false)}}/> Offline
                </div>
                <div>
                <Link to='/home'><button className='btn btn-warning mt-5'>Back To Home</button></Link>
                <Link to='#'><button className='btn btn-success mx-2 mt-5' disabled={timer==0 ? true : false} onClick={handlePayNow}>Pay Now {timer} Sec </button></Link>
                </div>
            </div>
          </div>
      </div>
    </>
  )
}