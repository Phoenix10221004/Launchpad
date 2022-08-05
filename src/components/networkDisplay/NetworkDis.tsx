import { Stack, Box, Typography } from '@mui/material';


const NetworkDis = () => {
  return(
    <>
      <Stack direction='row' justifyContent='center' alignItems='center' spacing={0.5} sx={{background:'#1C3138',padding:'0px 5px'}}>
          <Typography sx={{fontWeight:400,fontSize:'14px',color:'white'}}>Solana Network:</Typography>
          <Typography sx={{fontWeight:400,fontSize:'14px',color:'#27A0D3'}}>2,358 TPs</Typography>
      </Stack>
        
    </>
  );
}

export default NetworkDis;