import React from 'react'
import { useState } from 'react'
const Log=()=>{
    const [formData,SetFormData]=useState({
        username:"",
        password:"",
        email:""
    });
    const [errors,setErrors]=useState({});
    const handleInputChange=(e)=>{
        const{name,value,type,checked}=e.target;
        SetFormData((prev)=>({
            ...prev,
            [name]:type==="checkbox"?checked:value,
        }));
        if(errors[name]){
            setErrors((prev)=>({...prev ,[name]: ""}));
        }
    };
    const validateForm =()=>{
        const newErrors={};
        if(!formData.username.trim()){
            newErrors.username ="username is required "
        }
        if(!formData.password){
            newErrors.password="password is required ";
        }
        else if(formData.password.length<6){
            newErrors.password="password must be at least 6 charcahter";
        }
        return newErrors;
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const newErrors=validateForm();
    
    if(Object.keys(newErrors).length>0){
        setErrors(newErrors);
        return;
    }
    console.log("form submitted:",formData);
    };


  return (
    <div className="w-screen h-screen bg-gradient-to-br from-sky-900 via-sky-600 to-sky-300 flex justify-center items-center">
     <div className="flex justify-center items-center w-m h-120 bg-white rounded-lg flex-col drop-shadow-xl">
            <h2 className="text-black font-bold text-2xl mt-6">Signup </h2>
            <hr className="w-12 bg-sky-900 h-2 rounded-lg mt-1"/>
            <form  onSubmit={handleSubmit}>
            <div className="flex items-start mt-4 flex-col" >
            <label className="text-black text-md font-medium  ">Name:</label>
            <input type="text" 
            name="username"
            value={FormData.username}
            onChange={handleInputChange}
             placeholder="enter your name " required className={`rounded-lg bg-zinc-200 h-12 w-2xs mt-3 ml-9 cursor-pointer active:bg-sky-200 hover:bg-sky-900 pl-5 ${buildErrorMessage.username?"border-red-500":"border-gray-300"}`}/>
             {Error.username && (
                <p className='text-red-500 text-xs mt-1'>{buildErrorMessage.username}</p>
             )}
            </div>
            <div className="flex items-start mt-4 flex-col" >
                <label className="text-black text-md  font-medium ">Email:</label>
                <input type="email"  placeholder="enter your email " required className="rounded-lg bg-zinc-200 h-12 w-2xs mt-3 ml-9 cursor-pointer active:bg-sky-200 hover:bg-sky-900 pl-5"/>
                </div>
                <div className="flex items-start flex-col mt-4" >
                    <label className="text-black text-md font-medium left-0">Password:</label>
                    <input type="password"  placeholder="enter your password " required className="rounded-lg bg-zinc-200 h-12 w-2xs mt-3 ml-9 cursor-pointer active:bg-sky-200 hover:bg-sky-900 pl-5 text-white"/>
                    </div>
                    <button className="bg-sky-900 text-white rounded-full w-30 h-9 mt-5 ml-9 hover:bg-sky-400 active:bg-sky-400 ml-26">Signup</button>
                </form>
                    <p className="text-gray-500 mt-3">Already have an account? <a href="#" className="text-blue-400">login</a></p>
         </div>
    </div>
  );
};
export default Log;
