import { Button, IconButton } from '@mui/material';
import {styled} from '@mui/material/styles';
import style from './button.module.css';



export const OutlineBtn = (props:any) => {
  const { title } = props;
  return(
    <Button
      className={style.btn}
      variant='outlined'
    >
    {title}
    </Button>
  );
}


export const IconBtn = (props:any) => {
  const { icon } = props;

  return(
    <>
      <IconButton
        sx={{border:'1px solid white',borderRadius:'2px !important','&:hover':{background:'rgba(0, 255, 206, 0.3)'}}}
      >
        <img src={icon}></img>
      </IconButton>
    </>
  );
}

