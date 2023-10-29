
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZoon1 from '../../../assets/Img/qZone1.png'
import qZoon2 from '../../../assets/Img/qZone2.png'
import qZoon3 from '../../../assets/Img/qZone3.png'
const Right = () => {
    return (
        <div>
            <div className='space-y-3'>
                <h2 className="text-xl font-bold">Login with </h2>
                <div>
                    <button className="btn btn-outline">
                        <FcGoogle className='text-xl'></FcGoogle>
                        Sign In With Google
                    </button>
                    <button className="btn btn-outline mt-2">
                        <AiOutlineGithub className='text-2xl'></AiOutlineGithub>
                        Sign In With GitHub
                    </button>
                </div>
            </div>
            {/* Find on */}
            <div className='mt-4'>
                <h2 className="text-xl font-bold">Find On  </h2>
                <div>
                <a href="#" className='flex items-center border rounded-t-lg w-full p-4'>
                    <FaFacebook className='text-xl'></FaFacebook>
                    <span className='ml-2 text-xl '>Facebook</span>
                </a>
                <a href="#" className='flex items-center border-x w-full p-4'>
                    <FaTwitter className='text-xl'></FaTwitter>
                    <span className='ml-2 text-xl '>Facebook</span>
                </a>
                <a href="#" className='flex items-center border rounded-b-lg w-full p-4'>
                    <FaInstagram className='text-xl'></FaInstagram>
                    <span className='ml-2 text-xl '>Facebook</span>
                </a>
                </div>
            </div>

            {/* Q Zone */}
            <div className='mt-4 bg-[#F3F3F3] '>
                <h2 className="text-xl font-bold pl-4 pt-4">Q Zone  </h2>
                <div className='space-y-4 pl-2'>
                <img src={qZoon1} alt="" />
                <img src={qZoon2} alt="" />
                <img src={qZoon3} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Right;