import axios from "axios"
import { errorToast } from "./toaster.service"
import { config } from "../config"

export const postData = async (url:string, data:any) => {
   try {
    const response = await axios.post(`${config.SERVER_URL}${url}`, data)
    return response.data
    
   } catch (error:any) {
    errorToast(error.response.data.error)
   }
}

export const getData = async (url:string) => {
  try {
   const response = await axios.get(`${config.SERVER_URL}${url}`)
   return response.data
  } catch (error) {
   console.log(error)
  }
}


export const deleteData = async(url:string, id:number, jwt:any) => {

 try {
  const response = await axios.delete(`${config.SERVER_URL}${url}${id}`, {
    headers:{
      Authorization: `Bearer ${jwt}`
    }
  })
  return response.data
  
 } catch (error:any) {
  errorToast(error.response.data.error)
 }
}