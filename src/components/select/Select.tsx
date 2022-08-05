import { Box, Stack, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';


const fontTitle1  = {
  color:'white',
  fontWeight: 500,
  fontSize:'16px',
 
}

const fontTitle2  = {
  color:'var(--text-primary)',
  fontWeight: 500,
  fontSize:'16px',

}
const Select = () => {
  return(
    <>
      <Stack direction='column' spacing={1} sx={{width:'50%'}}>
        <Typography sx={fontTitle1}>
          Price: 2 SOL
        </Typography>
        <Stack direction='row' spacing={0.2} alignItems='center'>
          <Typography sx={fontTitle1}>
            Bullish:
          </Typography>
          <Stack direction='row' spacing={0.2} alignItems='center'>
            <Typography sx={fontTitle2}>523</Typography>
            <ArrowDropUpIcon sx={{color:'var(--text-primary)'}}/>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Select;