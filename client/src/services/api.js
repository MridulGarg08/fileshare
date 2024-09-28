import axios from "axios";
 

const headers={
    "Content-Type": "multipart/form-data"
}
export const createsignedurl = async (req, res) =>{
    try {
       const resp= await axios.get('https://fileshare-backend-7b6i.onrender.com/image-url')
       return resp.data;
        
    } catch (error) {
        console.log("Error while calling api", error.message);
        return error.response.data;
    }
}

export const uploadfile = async (url,file) =>{
    try {
       const resp= await axios.put(url,file,{headers:headers})
       return resp.data;
        
    } catch (error) {
        console.log("Error while calling api", error.message);
        return error.response.data;
    }
}
