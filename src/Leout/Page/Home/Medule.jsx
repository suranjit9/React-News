import { Link } from "react-router-dom";
import { AiFillEye } from 'react-icons/ai';
import PropTypes from 'prop-types';


const Medule = ({ news }) => {
    const { title, image_url, details, total_view, _id } = news;
    return (
        <div className="card  bg-base-100 shadow-xl mb-4">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ? <p>{details.slice(0, 200)} <Link
                    to={`/news/${_id}`} 
                    className="text-green-600"
                    >Read More ...</Link> </p> : <p>details</p>
                }
                <hr />
                <div className="flex justify-between">
                    <div className="">
                     <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            
                    </div>
                 
                   
                    </div>
                    <div className=" flex items-center">
                    <span><AiFillEye className="mr-2"></AiFillEye></span>
                            <p>{total_view}</p>
                            
                    </div>
                </div>
            </div>
        </div>
    );
};
Medule.propTypes ={
    news:PropTypes.object.isRequired,
}

export default Medule;