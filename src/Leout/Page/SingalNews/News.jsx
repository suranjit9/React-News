import {  Link, useLoaderData, useParams } from "react-router-dom";
import Nav from "../nav/Nav";
import Right from "../Home/Right";


const News = () => {
    const { id } = useParams();
    const news = useLoaderData();
    const find = news.find(aNews => aNews._id === id)
    console.log(find);
    
    return (
        <div>
            <Nav></Nav>
            <div className="grid grid-cols-4 gap-4">
                <div className=" col-span-3">
                    <div className="card  bg-base-100 shadow-xl mb-4">
                        <figure><img src={find.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{find.title}</h2>
                            <p>{find.details}</p>
                            <hr />

                        </div>
                    </div>
                    <Link to='/'><button className="bg-[#D72050] text-white">All news in this category</button></Link>
                </div>
                {/* Right BAr */}
                <div className=" col-span-1">
                    <Right></Right>
                </div>
            </div>
        </div>
    );
};

export default News;