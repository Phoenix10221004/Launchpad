import { Rating, Stack, Typography } from '@mui/material';


const ratingTitle  = {
  color:'white',
  fontWeight: 500,
  fontSize:'16px',
}

const CustomRating = () => {
  return(
    <>

      <Stack direction='column' spacing={1} sx={{width:'50%'}}>
        <Typography sx={ratingTitle}>Total Supply: 3,333</Typography>  
        <Rating
          sx={{
            color:'var(--text-primary)',
            '& .MuiSvgIcon-root': {
              color: `var(--text-primary)`
            }
          }}
          precision={0.5}
          defaultValue={2.5}
        />
      </Stack>
    </>
  );
}

export default CustomRating;