import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-900 text-base-content rounded">
            <nav className="grid grid-flow-col gap-4 text-white">
               <Link to="/about"><p className="link link-hover">About us</p></Link>
               <Link to="/contact"><p className="link link-hover">Contact</p></Link>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4 text-white text-3xl">
                    <a href=''>
                        <FaTwitter></FaTwitter>
                    </a>
                    <a href=''>
                        <FaYoutube></FaYoutube>
                    </a>
                    <a href=''>
                        <FaFacebook></FaFacebook>
                    </a>
                </div>
            </nav>
            <aside className='text-white'>
                <p>Copyright © 2023 - All right reserved by MU EVENT Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;