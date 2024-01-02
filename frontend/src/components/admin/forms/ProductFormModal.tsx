import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { Col, Form, Image, Row } from "react-bootstrap";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ButtonSpinner from "../../Loader/Spinner";

const ProductFormModal = ({ open, handleClose, handleUpdate, categories,  handleChange, handleSubmit, isSpinning, edit, product }: any) => {

  console.log(product.brand)
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{edit ? "Edit Product": "Add Product" }</DialogTitle>
      <DialogContent>

        {
            
            edit && (
              <Row className="mb-2" >
                <Col className="align-items-center d-flex flex-column" >
                <Form.Label className="d-block text-dark">Product Image</Form.Label>
                {/* <Form.Control name="productImage" value={product.productImage}></Form.Control> */}
                <Image src={product.productImage} style={{height:"280px", width: "200px"}} ></Image>
                </Col>
              </Row>
            )
        }
        <Row>
        
          <Col>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Product Name"
              type="text"
              fullWidth
              onChange={handleChange}
              variant="outlined"
              value={product.name}
            />
          </Col>

          <Col>
            <TextField
              autoFocus
              margin="dense"
              id="brand"
              name="brand"
              label="Product Brand"
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              value={product.brand}
             
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <TextField
              autoFocus
              margin="dense"
              id="price"
              name="price"
              label="Product Price"
              type="number"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              value={product.price}
            
            />
          </Col>

          <Col>
            <TextField
              autoFocus
              margin="dense"
              id="stock"
              name="countInStock"
              label="Product Stock"
              type="number"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              value={product.countInStock}
            
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select label="Category" value = {product.category }defaultValue = "" name="category"  onChange={handleChange}>
                {/* {console.log(categories)} */}
                {categories.map((category: any) => {
                  return (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Col>

          <Col>
            <TextField
              autoFocus
              margin="dense"
              id="description"
              name="description"
              label="Product Description"
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleChange}
              value={product.description}
            
            />
          </Col>
        </Row>

      {
        !edit && <Row>
        <Col>
        <TextField type="file"
         margin="normal"
         id="file"
         onChange={handleChange}
         name="productImage"
         fullWidth
         variant="outlined"
      
        ></TextField>
        </Col>
    </Row>
      }
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={edit? handleUpdate : handleSubmit} disabled = {isSpinning}> {isSpinning ? <ButtonSpinner/> : edit ? "Update" : "Submit"}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductFormModal;
