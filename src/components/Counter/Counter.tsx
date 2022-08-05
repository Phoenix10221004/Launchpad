import { Stack, Typography } from '@mui/material';
import Countdown from "react-countdown";

const title = {
  fontWeight: 500,
  fontSize: '12px',
  color:'white',
};

const Completionist = () => <Typography style={title}>Success!</Typography>;


const renderer = (props:any) => {
  if (props.completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Typography sx={title}>Start in {props.formatted.hours}:{props.formatted.minutes}:{props.formatted.seconds}</Typography> 

    );
  }
};

const Counter = () => {
  return(
    <Countdown zeroPadTime={3} date={Date.now() + 15000} renderer={renderer} />
  );
} 

export default Counter;
