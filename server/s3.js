import aws from 'aws-sdk'
import dotenv from 'dotenv'
import crypto from 'crypto'
import { promisify } from 'util';


dotenv.config();

const randomBytes=promisify(crypto.randomBytes);

const region=process.env.AWS_REGION;
const accessKeyId=process.env.AWS_ACCESSKEYID;
const secretAccessKey=process.env.AWS_SECRETACCESSKEY;
const bucketname=process.env.AWS_BUCKETNAME;

const s3= new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: "v4"
}) 

const generatesignedurl= async () => {

    const bytes= await randomBytes(16);
    const imagename=bytes.toString('hex');

    const params={
        Bucket: bucketname,
        Key: imagename,
        Expires: 60 
    }

     const signedurl=await s3.getSignedUrlPromise('putObject',params)
     return signedurl;
    
}
export default generatesignedurl;