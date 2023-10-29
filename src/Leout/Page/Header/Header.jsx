import moment from 'moment/moment';
import logo from '../../../../public/Img/logo.png'

const Header = () => {
    return (
        <div>
            <div className='text-center mt-4'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;