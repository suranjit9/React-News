import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import LastNews from "../nav/LastNews";
import Nav from "../nav/Nav";
import LeftBar from "./LeftBar";
import Medule from "./Medule";
import Right from "./Right";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div className="">
           <Header></Header>
           <LastNews></LastNews>
           <Nav></Nav>
           <div className="grid md: grid-cols-4 gap-4">
            <div>
                <LeftBar></LeftBar>
            </div>
            <div className="col-span-2">
                {
                    news.map(aNews => <Medule
                    key={aNews._id}
                    
                    news={aNews}
                    ></Medule>)
                }
                
            </div>
            <div>
                <Right></Right>
            </div>
           </div>
        </div>
    );
};

export default Home;