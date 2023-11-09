import dotenv from 'dotenv'
dotenv.config() 

 export const URLS = {
   
    BASE_PAGE: process.env.BASEURL 
}

 export const CREDENTIALS = { 
    LOGINUSERNAME: process.env.LOGINUSERNAME,
    LOGINPASSWORD: process.env.LOGINPASSWORD
    
}
