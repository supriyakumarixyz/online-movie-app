import { useState, useEffect, useContext } from 'react';
import { data, seatdata } from '../App'
import { useLocation, useParams, useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Booking() {
  const Movies = useContext(data);
  // const Seats = useContext(seatdata);
  // const Seats = 100;
  const [Seats, setSeatsVal] = useState(100);
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState([]);
  const [seats, setSeats] = useState([]);
  useEffect(() => {
    let singleMovieData = Movies.filter((value) => {
      return value.imdbID == id;
    })
    setSingleMovie(singleMovieData);
    setSeats(Array(Seats).fill(false));
  }, [])

  const handleSeatSelect = (index) => {
    toast(`Seat No ${index+1} selected...!!!`);
    setSeats((prevSeats) => {
      const newSeats = [...prevSeats];
      newSeats[index] = !newSeats[index];
      return newSeats;
    });
  };

  const history = useLocation();
  const navigate = useNavigate();
  const handleBooking = (e) => {
    e.preventDefault();
        const selectedSeats = seats.reduce((acc, seat, index) => {
        if (seat) {
          acc.push(index + 1);
        }
        return acc;
        }, []);
    
        if(selectedSeats.length>=1){
        history.pathname = '/bookingsuccess/'+selectedSeats;
        navigate(history.pathname);
        toast(`Proceeding For Payment`);
        }else{
        toast(`Please Select Seats...!!!`);     
        }
  };

  const handleCustomize = () => {
    toast(`You Are Not Authorized For This Section...!!!`);
  }

  return (
    <>
     <div className='container'>
      <Link to='/home'><button className='btn btn-info '>Home</button></Link>
      <Link to='/'><button className='btn btn-info float-right '>Logout</button></Link>
      </div>
      <div className='container'>
        <div className='row'>
          <ToastContainer />
          <div className='col-md-12'>
            <h4 className='text-center'>Booking Page</h4>
            {
              singleMovie.map((value, index) => (
                <div key={index}>
                  <h5 className='text-weight-bold'>Movie Name : {value.Title}</h5>
                  <img src={value.Poster} style={{ float: 'right', height: '200px' }} />
                  <p className="card-text">
                    {value.Plot}<br />
                    <b>Released :</b> {value.Released}<br />
                    <b>Runtime :</b> {value.Runtime}<br />
                    <b>Actors :</b> {value.Actors}<br />
                    <b>Writer :</b> {value.Writer}<br />
                    <b>Language :</b> {value.Language}<br />
                  </p>
                  <p>Ticket Price : $500</p>
                </div>
              ))
            }

            <div className="seats-container m-2">
              {seats.map((seat, index) => (
                <div
                  key={index}
                  className={`seat ${seat ? 'selected' : ''}`}
                  onClick={() => handleSeatSelect(index)}
                >
                  {index + 1}
                </div>
              ))}
            </div>

            <div className='text-center m-2'>
            <button className="btn btn-success" onClick={handleBooking} style={{ width: "250px" }}>
              Book Ticket
            </button>
            {/* <button className="btn btn-danger mx-2 my-2" onClick={handleCustomize} style={{ width: "250px" }}>
              Customize Seat Plan
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}