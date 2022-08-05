import { Button } from '@mui/material';





const WalletButton = () => {
  return(
    <Button
      size='small'
      sx={{
        background:'#4A6C77',
        color:'white',
        fontSize:'14px',
        fontWeight: 700,
        lineHeight: '19px',
        '&:hover':{
          background:'rgba(0, 255, 206)',
          color:'white'
        }
      }}
    >Connect Wallet</Button>
  );
}


export default WalletButton;