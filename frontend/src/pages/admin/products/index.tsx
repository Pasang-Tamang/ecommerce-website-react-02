
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { deleteData, getData } from '../../../services/axios.service';
import Loader from '../../../components/Loader';
import { Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import {AiFillDelete } from 'react-icons/ai';
import moment from "moment" 

import { useSelector } from 'react-redux';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




const Products = () =>  {

  const [products, setProducts] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  const getProducts = async() => {
    setIsLoading(true)
    const response = await getData("/product")
    console.log(response.data)
    setProducts(response.data)
    setIsLoading(false)
    //console.log(products)
    }
    
  useEffect(() => {
    getProducts()
  }, [])

  const jwt = useSelector((state:any) => (state.auth.jwt))
    

  const deleteHandler = async (e:any, id:number) => {
    e.preventDefault()
    console.log("clicked")
    console.log(id)

    

    const response = await deleteData("/product/", id, jwt)
    console.log(response)

    
    // const deleteProduct = products.results.filter((product:any) => {
    //   return product.id !== id
    // })
    // console.log(deleteProduct)
    // setProducts((prev:any) => {
    //   return {...prev, results: deleteProduct}
    // })
  }
  
  
  return (
    <TableContainer component={Paper}>
      {
         isLoading ? <Loader/> :  products.status === "success" &&   
      
      (<Table sx={{ minWidth: 100 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="left">Brand</StyledTableCell>
            <StyledTableCell align="right">Created At</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
            products.results.map((product:any) => {
            return (
              <StyledTableRow key={product.id} >
              <StyledTableCell component="th" scope="row">
               <img src={product.productImage} alt="product Image" style={{width: "100px", height: "100px"}} />
              </StyledTableCell>
              <StyledTableCell align="left">{product.name}</StyledTableCell>
              <StyledTableCell align="right">{product.price}</StyledTableCell>
              <StyledTableCell align="right">{product.category}</StyledTableCell>
              <StyledTableCell align="left">{product.brand}</StyledTableCell>
              <StyledTableCell align="right">{moment(product.createdAt).format("YYYY-MM-DD")}</StyledTableCell>
              <StyledTableCell align="right">
                <Button className='btn btn-primary '><FaEdit/></Button>
                <Button className='btn btn-danger ms-2' onClick={(e) => {deleteHandler(e, product.id)}}><AiFillDelete/></Button>
              </StyledTableCell>
            </StyledTableRow>
            )
          })
        }
        
        </TableBody>
      </Table>)}
    </TableContainer>
  );
}

export default Products