// import React, { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import {Link} from 'react-router-dom'

// const StudentLogin = () => {

//     const [showPassword,setShowPassword] = useState(false)

//     const [data,setData] = useState({
//         email: "",
//         password: ""
//     })

//     const handleOnChange = (e) => {
//         const{name,value} = e.target

//         setData((preve) => {
//             return{
//                 ...preve,
//                 [name] : value
//             }
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//     }

//     console.log("login data" , data)


//     return(

//         <section id='login'> 
//         <div className='mx-auto container p-4'>

            
            
         
//             <div className='bg-white p-5 w-full max-w-sm mx-auto'>
    
//                 {/* <div className='w-20 h-20 mx-auto'>
//                     <img src={} alt='login icon' />
//                 </div> */}
    
//                 <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
//                     <div className='grid'>
//                         <label>Email :</label>
//                         <div className='bg-slate-200 p-2'>
//                             <input type='email'
//                              placeholder='enter email'
//                              className='w-full h-full outline-none bg-transparent'
//                              name='email'
//                              value={data.email}
//                              onChange={handleOnChange}
//                              />
//                         </div>
//                     </div>
    
                    
    
//                     <div>
//                         <label>Password :</label>
//                         <div className='bg-slate-200 p-2 flex'>
//                             <input type={showPassword ? "text" : "password"}
//                              placeholder='enter password' 
//                              className='w-full h-full outline-none bg-transparent'
//                              name='password'
//                              value={data.password}
//                              onChange={handleOnChange}
    
//                               />
//                             <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
//                                 <span>
//                                     {
//                                         showPassword ? (<FaEyeSlash />) : (<FaEye />)
//                                     }
                                    
                                    
//                                 </span>
//                             </div>
//                         </div>
    
//                         <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-yellow-500'>
//                         Forgot password?
//                         </Link>
    
    
//                     </div>
    
//                     <button className='bg-blue-900 hover:bg-blue-950 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
    
//                 </form>
    
//                 <p className='my-5'>New User ? <Link to={'/studentregister'} className=' text-blue-900 hover:text-blue-950 hover:underline'>Register</Link> </p>
    
//             </div>
    
//         </div>
//         </section>

        

        
//     )
// }


// export default StudentLogin


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './studentlogin.css'

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here using email and password
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <a href="#">Forgot Password?</a>
        <button type="submit">Login</button>
        <p>New User? <Link to={'/studentregister'}>Register</Link></p>
      </form>
    </div>
  );
}

export default StudentLogin;