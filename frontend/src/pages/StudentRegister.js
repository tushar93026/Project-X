// import React, { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";
// import {Link} from 'react-router-dom'


// const StudentRegister = () => {


//     const [showPassword, setShowPassword] = useState(false)
//     const [showConfirmPassword, setConfirmPassword] = useState(false)

//     const [data,setData] = useState({
//         username: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//     })

//     const handleOnChange = (e) => {
//         const {name,value} = e.target
  
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


//     return(

//         <section id='signup'> 
//     <div className='mx-auto container p-4'>
     
//         <div className='bg-white p-5 w-full max-w-sm mx-auto'>

//             <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
//                 {/* <div>
//                 <img src={data.profilePic || loginIcon} alt='login icon' />
//                 </div> */}

//                 <form>

                  

                  
//                 </form>
//             </div>

//             <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>

//             <div className='grid'>
//                     <label>Username :</label>
//                     <div className='bg-slate-200 p-2'>
//                         <input type='name'
//                          placeholder='enter your name'
//                          className='w-full h-full outline-none bg-transparent'
//                          name='name'
//                          value={data.name}
//                          onChange={handleOnChange}
//                          required
//                          />
//                     </div>
//                 </div>


//                 <div className='grid'>
//                     <label>Email :</label>
//                     <div className='bg-slate-200 p-2'>
//                         <input type='email'
//                          placeholder='enter email'
//                          className='w-full h-full outline-none bg-transparent'
//                          name='email'
//                          value={data.email}
//                          onChange={handleOnChange}
//                          required
//                          />
//                     </div>
//                 </div>

//                 <div className='grid'>
//                     <label>Institute :</label>
//                     <div className='bg-slate-200 p-2'>
//                         <input type='institute'
//                          placeholder='enter institute'
//                          className='w-full h-full outline-none bg-transparent'
//                          name='institute'
//                          value={data.institute}
//                          onChange={handleOnChange}
//                          required
//                           />
//                     </div>
//                 </div>

//                 <div>
//                     <label>Password :</label>
                    // <div className='bg-slate-200 p-2 flex'>
                    //     <input type={showPassword ? "text" : "password"}
                    //      placeholder='enter password' 
                    //      className='w-full h-full outline-none bg-transparent'
                    //      name='password'
                    //      value={data.password}
                    //      onChange={handleOnChange}
                    //      required

                    //       />
                    //     <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                    //         <span>
                    //             {
                    //                 showPassword ? (<FaEyeSlash />) : (<FaEye />)
                    //             }
                                
                                
                    //         </span>
                    //     </div>
                    // </div>

                   


//                 </div>

//                 <div>
//                     <label>Confirm Password :</label>
//                     <div className='bg-slate-200 p-2 flex'>
//                         <input type={showConfirmPassword ? "text" : "password"}
//                          placeholder='enter confirm password' 
//                          className='w-full h-full outline-none bg-transparent'
//                          name='confirmPassword'
//                          value={data.confirmPassword}
//                          onChange={handleOnChange}
//                          required

//                           />
//                         <div className='cursor-pointer text-xl' onClick={()=>setConfirmPassword((preve)=>!preve)}>
//                             <span>
//                                 {
//                                     showConfirmPassword ? (<FaEyeSlash />) : (<FaEye />)
//                                 }
                                
                                
//                             </span>
//                         </div>
//                     </div>



//                 </div>

//                 <button className='bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>

//             </form>

//             <p className='my-5'>Already have an account ? <Link to={'/login'} className=' text-yellow-500 hover:text-yellow-600 hover:underline'>Login</Link> </p>

//         </div>

//     </div>
//     </section>
        
//     )
// }


// export default StudentRegister


import React, { useState } from "react";
import "./studentregister.css";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [showPassword,setShowPassword] = useState(false)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleTermsChange = (event) => {
    setTermsAgreed(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform registration logic here (e.g., API call)
    console.log(
      "Username:",
      username,
      "Email:",
      email,
      "Password:",
      password,
      "Confirm Password:",
      confirmPassword,
      "Terms Agreed:",
      termsAgreed
    );
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <label htmlFor="password">Password</label>
        <div className='bg-white'>
                        <input type={showPassword ? "text" : "password"}
                         placeholder='enter password' 
                         className='w-full h-full outline-none bg-transparent'
                         name='password'
                         value={handleSubmit.password}
                         onChange={handlePasswordChange}
                         required

                          />
                        <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                            <span>
                                {
                                    showPassword ? (<FaEyeSlash />) : (<FaEye />)
                                }
                                
                                
                            </span>
                        </div>
                    </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="checkbox"
            id="terms"
            checked={termsAgreed}
            onChange={handleTermsChange}
          />
          <label htmlFor="terms">Agree to our Terms and Conditions</label>
        </div>
        <button type="submit" className="button">
          Continue
        </button>
      </form>
      <p>Already registered? <Link to={'/studentlogin'}>Login</Link></p>
    </div>
  );
};

export default Register;