import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { getCookie } from '@/uttil';
import { useDispatch } from 'react-redux';
import { xoaKhoaHocThunk } from '@/redux/reducers/khoaHocReducer';

function XoaComponent(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const {maKhoaHoc} = props;
    const token = getCookie("token")
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAgree = async () => {
    try{
        const res = await dispatch(xoaKhoaHocThunk(maKhoaHoc,token));
        if(res.status === 200){
            // handleClose()
            alert("Xóa thành công!");
            window.location.reload();
            
          }
    }catch(error){
        alert(error.response.data)
        
    }
    
    // console.log("🚀 ~ maKhoaHoc:", maKhoaHoc);

  }
  return (
    <div>
        <button onClick={handleClickOpen}><DeleteOutlineIcon className='text-red-500'/></button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            Thông Báo
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc là muốn xóa khóa học này chứ nhỉ ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default XoaComponent