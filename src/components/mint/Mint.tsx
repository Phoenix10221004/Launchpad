import { useState } from 'react';
import { Box, Stack, Button } from '@mui/material';
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const PrettoSlider = styled(Slider)({
  color: 'rgba(42, 65, 73, 1)',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    background:'linear-gradient(90.03deg, #00FFCE 0%, #27A0D3 100%)'
  },
  '& .MuiSlider-thumb': {
    height: 0,
    width: 0,
    backgroundColor: '#fff',
    border: 'none',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});


const Mint = () => {
  const [mintAmount, setMintAmount] = useState<number>(20);
  return(
    <>
        <Stack sx={{marginTop:'30px'}} direction='row' justifyContent="space-between" alignItems='center'>
          <Stack direction='column' spacing={0.5}>
            <Typography sx={{color:'white',fontWeight:'500',fontSize:'12px'}}>70% (2333/3333) Minted</Typography>
            <Typography sx={{color:'rgba(131, 168, 182, 1)',fontWeight:'500',fontSize:'12px'}}>1000 Remaining</Typography>
          </Stack>
          <Button sx={{
            background:'#27A0D3',
            color:'white',
            borderRadius:'3px',
            paddingLeft:'20px',
            paddingRight:'20px'
          }}>
            Mint
          </Button>
        </Stack>
        <PrettoSlider
            value={mintAmount}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={20}
          />
    </>
  );
}
export default Mint;