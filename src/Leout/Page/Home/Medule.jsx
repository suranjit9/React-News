
import MeduleCard from "./MeduleCard";
import { useEffect, useState } from "react";


const Medule = () => {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(()=>{
        fetch ('../../../../public/data/news.json')
        .then(res => res.json())
        .then(data=> setData(data) )
        
    },[])
    // const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            {
                data.map(anews => <MeduleCard
                key={anews._id}
                news={anews}
                ></MeduleCard>)
            }
        </div>
        
    );
};
// Medule.propTypes ={
//     news:PropTypes.object.isRequired,
// }

export default Medule;