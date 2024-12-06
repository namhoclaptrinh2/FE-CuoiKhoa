import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { getCookie } from '@/uttil';
import { xoaNguoiDung } from '@/redux/reducers/nguoiDungReducer';

function XoaUser(props) {
    const {taiKhoan}  = props;
    const dispatch = useDispatch();
    const token = getCookie("token")
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleAgree = async () => {
       
        try{
            const res = await dispatch(xoaNguoiDung(taiKhoan,token));
            if(res.status === 200 ){
                alert("xóa thành công");
                handleClose()
                window.location.reload();
            }else{
              alert(res.response.data)
              handleClose()
            }
            return res
            
        }catch(res){
            console.log(res)
        }
    
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
            Thông Báo - {taiKhoan}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Bạn có chắc là muốn xóa người dùng này chứ nhỉ ?
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

export default XoaUser