import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='space-y-4'>
<h3 className='font-bold text-xl'>Login With</h3>
{/* Google */}
<button className="btn btn-outline bg-white text-black border-[#e5e5e5] w-full">
 <FcGoogle size={20}/>
  Login with Google
</button>

{/* GitHub */}
<button className="btn bg-black text-white border-black w-full">
 <FaGithub size={20}></FaGithub>
  Login with GitHub
</button>
        </div>
    );
};

export default SocialLogin;