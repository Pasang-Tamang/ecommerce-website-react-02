import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import { Col, Row } from "react-bootstrap";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ButtonSpinner from "../../Loader/Spinner";

const ProductFormModal = ({ open, handleClose, categories, handleChange, handleSubmit, isSpinning }: any) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
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
            
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select label="Category" defaultValue = "" name="category"  onChange={handleChange}>
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
            
            />
          </Col>
        </Row>

        <Row>
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
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} disabled = {isSpinning}> {isSpinning ? <ButtonSpinner/> : "Submit"}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductFormModal;
