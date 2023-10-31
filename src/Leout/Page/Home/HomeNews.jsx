

import { Outlet } from 'react-router-dom';
import Medule from './Medule';

const HomeNews = () => {
    return (
        <div>
           
            {/* <Medule></Medule> */}
          <Outlet></Outlet>
        </div>
    );
};

export default HomeNews;