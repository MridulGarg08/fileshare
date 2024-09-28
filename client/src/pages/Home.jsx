import { useRef, useEffect, useState} from "react"
import { createsignedurl,uploadfile} from "../services/api.js";
const Home = () => {

  const [url,seturl]=useState('')
  const [file,setfile]=useState('')

  const fileInputRef=useRef();

  useEffect(()=>{
    const getdata=async()=>{
      const resp=await createsignedurl();
      seturl(resp.url);
    }
    getdata();
  },[])

  useEffect(()=>{
    const getdata=async()=>{
      const resp=await uploadfile(url,file);
      seturl(url.split('?')[0]);
    }
    file && getdata();
  },[file])

  return (
    <>
    <div className='ml-28 mt-6 space-y-6'>
        <h1 className='font-extralight text-7xl'>Filebin</h1>
        <p className='text-[20px] font-light mt-0'>Convenient file sharing in three steps without registration.</p>
        <div className='space-y-6 font-light text-xl'>
        <p className=''>
          <span className='bg-gray-500 pl-3 pr-3 pt-1 pb-1 rounded-full mr-2 text-white'>1</span>
          <input type="file" className="hidden"
          ref={fileInputRef}
          onChange={(e)=>setfile(e.target.files[0])}
          >
          </input>
          <button onClick={()=>fileInputRef.current.click()} className='bg-blue-500 text-white pl-3 pr-3 pt-1 pb-1 rounded-md font-medium text-[15px]'>Select files to upload</button> or <em>drag and drop</em> files into this browser window.</p>
        <p className=''><span className='bg-gray-500 pl-3 pr-3 pt-1 pb-1 rounded-full mr-2 text-white'>2</span>The file uploads will begin. Wait until they complete.</p>
        <p><span className='bg-gray-500 pl-3 pr-3 pt-1 pb-1 rounded-full mr-2 text-white'>3</span>The files will be available at <a className='text-blue-700 underline' href={url.split('?')[0]}>{url.split('?')[0]}</a> which is a link you can share.</p><br></br>
        <p>The files can be deleted manually at any time and willany case be deleted automatically 6 days from now</p>
        </div>
    </div>
    </> 
  )
}

export default Home