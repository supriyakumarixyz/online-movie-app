import {useState,useEffect,useContext} from 'react';
import { data } from '../App'
import { useLocation,useNavigate,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const Movies = useContext(data);
  const [movies,setMovies] = useState(Movies);
  useEffect(()=>{
  },[])

  const history = useLocation();
  const navigate = useNavigate();
  const handleProceed = (index) => {
    toast("Pleae Select Seat...!!!");
    history.pathname = '/booking/' + index;
    navigate(history.pathname);
  };
  
  return (
    <>
      <div className='container'>
      <Link to='/home'><button className='btn btn-info '>Home</button></Link>
      <Link to='/'><button className='btn btn-info float-right '>Logout</button></Link>
      </div>
      <div className='container'>
        
          <div className='row'>
            <div className='col-md-12'>
            {
              movies.map((value,index)=>(
                <div className='col-md-12 m-2' key={index} onClick={(e) => { handleProceed(value.imdbID); }}>
                <div className='card-deck'>
                  <div className="card">
                    <img className="card-img-top" src="" />
                    <div className="card-body">
                      <h5 className="card-title">{value.Title}</h5>
                      <img src={value.Poster} style={{float:'right',height:'200px'}}/>
                      <p className="card-text">
                        {value.Plot}<br/>
                        Released : {value.Released}<br/>
                        Runtime : {value.Runtime}<br/>
                        Actors : {value.Actors}<br/>
                        Language : {value.Language}<br/>
                      </p>
                      {/* <p className="card-text">$ 500</p> */}
                      <button  className="btn btn-warning">
                      Book Now ($500 per Ticket)
                      </button>
                    </div>
                  </div> 
                </div>
                </div>
              ))
            }
            </div>
          </div>
      </div>
    </>
  )
}
