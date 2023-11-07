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