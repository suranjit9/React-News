import { useParams } from "react-router-dom";
import Nav from "../nav/Nav";


const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Nav></Nav>
            <h2>news hello {id}</h2>
        </div>
    );
};

export default News;