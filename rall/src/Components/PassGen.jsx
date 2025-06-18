
import { useState,useRef,useCallback,useEffect } from 'react'

export default function Cards() {
  const[length,setlength]=useState(8);
  const[numberallowed,setnumberallowed]=useState(false)
  const[charAllowed,setcharAllowed]=useState(false)
  const[password,setpassword]=useState(" ");
  const passwordRef=useRef(null)
  const passwordgenrator=useCallback(()=>{
    let password=" "
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed){
      str+='0123456789'
    }
    if(charAllowed){
      str+="!@#$%^& "
    }
    for(let i=1;i<=length;i=i+1){
      let char=Math.floor(Math.random()*str.length+1)
    password+=str.charAt(char);
    }
    setpassword(password)
  },[length,numberallowed,charAllowed,setpassword])
  const copypastetoclip=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordgenrator()
  },[length,numberallowed,charAllowed,passwordgenrator])
  return (
    <div className='W-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 mg-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center mg-3'>Password genrator </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 '
        placeholder='password'
        readOnly 
        ref={passwordRef}
        />
        <button onClick={copypastetoclip}  className='outline-none bg-blue-700 px-3 py-0.5 text-white shrink-0 '>Copy</button>
        </div>
        <div className='flex gap-x-2 text-sm' >
          <div className='flex items-center gap-x-3'>
            <input type="range"
            min={6}
            max={30}
            value={length}
            className='cursor-pointer'
           onChange={(e)=>{setlength(e.target.value)}}
            />
            <label > Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
            defaultChecked={numberallowed}
            id="number"
            onChange={()=>{
              setnumberallowed((prev)=>!prev);
            }}
            />
            <label htmlFor='number'>Number Allow</label>
          </div>
          <div className='flex items-center gap-x-1 '>
            <input type='checkbox'
            defaultChecked={charAllowed}
            id="charcter"
            onChange={()=>{
              setcharAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='charcter'>Charcter Allow</label>
          </div>
        </div> 
    </div>
  )
}
