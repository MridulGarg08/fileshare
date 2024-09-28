import generatesignedurl from "../s3.js"

export const createsignedurl= async (req,res)=>{
    const url= await generatesignedurl();
    res.status(200).json({url})


}