import { Link } from "react-router-dom"


function HotelList({loading,hotelsData}) {

    if(loading){
        return (
            <>
            {
                hotelsData.map((hotel,index)=>{
                    return(
                        <Link to={`${hotel._id}`} key={index} className="row container hof">
                            <div className="col-3 hi">
                                <img className=" img-fluid" src={hotel.image} alt="hotel"/>
                            </div>
                            <div className="col-5">
                                <div>{hotel.name}</div>
                                <div>{hotel.place}</div>
                                <div>{`${hotel.room} Room`}</div>
                            </div>
                            <div className="col-4">
                                <div>₹{hotel.price}</div>
                            </div>
                        </Link>
                    )
                    
                })
            }
                
            </>
        )
    }
    else{
        return <div>Loading...</div>
    }
}

export default HotelList
