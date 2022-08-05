import { Box, Typography, Stack } from '@mui/material';


const MintInfo = (props:any) => {

  const { name, content } = props;
  return(
    <Stack direction='row' justifyContent='center' alignItems='center' spacing={0.3} sx={{background:"#2A4149",padding:'3px',borderRadius:'4px'}}>
      <Typography sx={{color:'#83A8B6',fontSize:'12px',fontWeight:'500'}}>{name}:</Typography>
      <Typography sx={{color:'white',fontSize:'12px',fontWeight:'500'}}>{content}</Typography>
    </Stack>
  );
}

export default MintInfo;