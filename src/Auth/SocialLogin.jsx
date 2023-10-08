import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from './AuthProvider';

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);

    const handleGoogleSignIn = () =>{
        googleSignIn().then(result=>{
            console.log(result.user)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    return (
        <div className='flex flex-col items-center justify-center mx-auto pt-4'>
            <button onClick={handleGoogleSignIn}><FaGoogle className='text-4xl text-white'></FaGoogle>

            </button>
            <p className='text-sm text-white'><small>Google Sign in</small> </p>
        </div>
    );
};

export default SocialLogin;