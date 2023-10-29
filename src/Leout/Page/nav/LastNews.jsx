import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LastNews = () => {
    return (
        <div className="flex border bg-[#F3F3F3] mt-4 mb-2">
            <Link>
                <button className="btn btn-primary">Bracking News</button>
            </Link>
            <Marquee>
                I can be a React component, multiple React components, or just some text.
                I can be a React component, multiple React components, or just some text.
                I can be a React component, multiple React components, or just some text.
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default LastNews;