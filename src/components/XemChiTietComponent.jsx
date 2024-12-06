import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getChiTietKhoaHocThunk } from '@/redux/reducers/khoaHocReducer';

// 
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PeopleIcon from '@mui/icons-material/People';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));
function XemChiTietComponent(props) {
    const {maKhoaHoc} = props;
    const dispatch = useDispatch();
    const chiTietKhoaHoc = useSelector(state => state.khoaHocReducer.chiTietKhoaHoc);

    
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleXemChiTiet = () => {
    dispatch(getChiTietKhoaHocThunk(maKhoaHoc))
  }
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
        <button onClick={handleClickOpen}><VisibilityIcon className='text-blue-500' onClick={handleXemChiTiet}/></button>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         Xem chi tiết
        </DialogTitle>
        <DialogContent>
            <Card sx={{ maxWidth: 345 }}>
        <CardHeader
                avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            
            title={chiTietKhoaHoc.tenKhoaHoc}
            subheader={chiTietKhoaHoc.ngayTao}
        />
        <CardMedia
            component="img"
            height="194"
            image={chiTietKhoaHoc.hinhAnh}
            alt="Paella dish"
        />
        
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <VisibilityIcon />
                {chiTietKhoaHoc.luotXem}
            </IconButton>
            <IconButton aria-label="share">
                <PeopleIcon />
                {chiTietKhoaHoc.soLuongHocVien}
            </IconButton>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography sx={{ marginBottom: 2 }}>
                {chiTietKhoaHoc.moTa}
            </Typography>
            
            
            </CardContent>
        </Collapse>
        </Card>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} autoFocus>
          Đóng
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default XemChiTietComponent