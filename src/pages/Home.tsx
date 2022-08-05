import { useState } from 'react';
import { 
  Typography,
  Stack, 
  Divider, 
  Box, 
  Tabs, 
  Tab, 
  IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from './Home.module.css';
import { OutlineBtn, IconBtn } from '../components/button/CustomButton';
import CustomRating from '../components/rating/Rating';
import Select from '../components/select/Select';
import WalletButton from '../components/walletButton/WalletButton'
import NetworkDis from '../components/networkDisplay/NetworkDis';
import MintInfo from '../components/mintInfo/MintInfo';
import Mint from '../components/mint/Mint';
import Counter from '../components/Counter/Counter';



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


const tabTitleStyle = {
  color:'#83A8B6',
  fontFamily:'Manrope !important',
  fontWeight:'500 !important',
  fontSize:'16px !important',
}


const MyTabs = styled(Tabs)({
  background:'transparent',
  '& .css-1aquho2-MuiTabs-indicator':{
    display:'none'
  },
})
const MyTab = styled((props:any) => <Tab disableRipple {...props} />)(
  ({ theme }:any) => ({
    marginTop:'5px',
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    color: '#83A8B6',
    background:'transparent',
    // borderRadius: '5px',
    width:'100px',
    padding:'10px',
    '&.Mui-selected': {
      color: 'white',
      backgroundColor:'var(--secondary)',
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
  
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{display:'flex'}}>
          <Box sx={{ p: 3 }} className={styles.tab}>
            {children}
          </Box>
        </Box>
        
      )}
    </div>
  );
}


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



const Home = () => {

  const [value, setValue] = useState(0);
  const [whitelistState, setwhitelistState] = useState(false);
  const [publicState, setPublicState] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return(
    <>
      <Box className={styles.container}>
{/* left       */}
        <Box className={styles.left}>
          <Box className={styles.pro}>

            <Box className={styles.pro_left}>
              <img src='./assets/img/mark.png'></img>
            </Box>

            <Box className={styles.pro_right}>
              <Typography sx={{color:'white', fontSize:'36px',fontWeight:'700'}}>Project New</Typography>
              <Stack direction='row' spacing={2} alignItems='center'>
                <OutlineBtn  title='DOXXED' />
                <OutlineBtn  title='ESCROW 24HR' />
                <IconBtn icon='./assets/img/1.png'/>
                <IconBtn icon='./assets/img/2.png'/>
                <IconBtn icon='./assets/img/3.png'/>
              </Stack>
              <Divider sx={{background:'#2A4149',width:'95%',marginTop:'35px',marginBottom:'15px'}}/>
              <Box className={styles.flex}>
                <CustomRating/>
                <Select/>
              </Box>
            </Box>

          </Box>

          <Box className={styles.mobile}>
            <Mint/>
          </Box>

{/* Tabs */}
          <MyTabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <MyTab label="About" {...a11yProps(0)} />
            <MyTab label="Roadmap" {...a11yProps(1)} />
            <MyTab label="Team" {...a11yProps(2)} />
          </MyTabs>

{/* Tabpanel */}
          <TabPanel  value={value} index={0}>
            <Stack direction='column' spacing={2} sx={{overflow:'auto'}}>
              <Typography sx={tabTitleStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique tincidunt mi diam commodo nulla sit eu bibendum. Elit consequat, turpis morbi arcu eget tristique in amet, faucibus. Tortor enim, ornare tincidunt nulla vel. Ipsum interdum amet feugiat orci. Ornare sem aliquam dui in. In justo massa aliquam amet amet, amet elit, ut. Vitae sit purus venenatis massa netus morbi. Volutpat risus diam in a ac donec sagittis non purus. Varius fringilla purus fusce in lacinia condimentum. Phasellus dictum cursus sem eget volutpat mus dis urna. Duis in blandit quis neque egestas ac. Libero, fermentum egestas condimentum scelerisque. Sed turpis ut gravida tristique urna. Diam felis tortor tortor lacus, phasellus.
              </Typography>
              <Typography sx={tabTitleStyle}>
                Diam hac in venenatis ipsum facilisis. Integer elementum, nisl ipsum, magna. Gravida enim donec neque molestie diam malesuada. Id sed donec id in. Sollicitudin pellentesque facilisis curabitur facilisi est. Phasellus posuere ultrices consequat ultrices ultrices feugiat dictum. Eget aliquet amet leo senectus dictum mattis ac. Tincidunt placerat purus dui, in sed varius sed nec viverra. Mauris molestie cum eleifend vitae maecenas. Vel, mattis elit sem at vulputate integer augue. Ac enim ut lobortis sed iaculis massa consequat urna. Felis mauris, vel sed aliquam est consequat. Varius ut facilisis volutpat viverra nibh orci. Dui ut commodo nibh sit at hendrerit vestibulum neque aenean. Proin purus facilisis ultrices
              </Typography>
            </Stack>

           
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Stack direction='column' spacing={1} sx={{overflow:'auto'}}>
              <Typography sx={{color:'white',fontWeight:'700',fontSize:'14px',marginBottom:'10px'}}>Phase1</Typography>
              <Typography sx={tabTitleStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor erat enim in odio donec. Pretium scelerisque tincidunt non congue dignissim ultrices nisl, arcu. Maecenas in ultrices vitae elit phasellus enim venenatis. Mauris integer id enim amet facilisis massa dignissim arcu senectus. Ante suscipit quam egestas tortor adipiscing. Magna vitae eget sapien, nullam. Tempor a scelerisque orci, eget. A erat eget aliquet nunc et habitant nunc orci. Et mattis interdum suspendisse libero ultricies non id lectus eget
              </Typography>

              <Typography sx={{color:'white',fontWeight:'700',fontSize:'14px',marginBottom:'10px',marginTop:'10px'}}>Phase2</Typography>
              <Typography sx={tabTitleStyle}>
                Odio neque, non diam quam cras. Malesuada massa faucibus facilisi massa dictum donec lorem egestas. Massa blandit nunc tincidunt leo. Placerat ut luctus at leo volutpat consectetur nec et nec. Vel, id commodo in massa sit integer. Sed feugiat aenean sodales et elementum praesent vitae tempus pellentesque. Quam sit mi dui curabitur velit elementum arcu, turpis. Cras turpis ullamcorper arcu consequat. Sit turpis tempor enim purus dictumst scelerisque sit. Magna lectus mauris molestie eget dignissim. Ultricies netus accumsan sagittis, pharetra dui. Consectetur nulla eget pellentesque quam augue aliquet.
              </Typography>
            </Stack>
            
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Stack direction='column' spacing={1} sx={{overflow:'auto'}}>
              <Typography sx={{color:'white',fontWeight:'700',fontSize:'14px',marginBottom:'10px'}}>S◎Lace</Typography>
              <Typography sx={tabTitleStyle}>
                Founder / Artist / UI/UX Designer / Project Lead / Community Manager
              </Typography>
              <Typography sx={{...tabTitleStyle,marginTop:'10px'}}>
                S◎Lace has been a graphic and logo designer for over 15 years using mainly the Adobe Creative Suite. He is also a Frontend Web Developer for over 10 years specializing in HTML5, CSS3, PHP, MySQL, and JavaScript. He started leading communities mostly in gaming back in 2008 where he started his own Web-based game and Ragnarok Online server then moved over to GTA San Andreas online where he also scripted his own server from scratch using pawno language and led the community. For the most recent years, he worked as a Curriculum Developer for 5 years and has been freelancing in Graphics Designing and UI/UX designing. S◎Lace got into the crypto and NFT worlds in July of 2021 where he played Axie Infinity and participated in NFT collection releases in Ethereum and Solana.
              </Typography>
            </Stack>
          </TabPanel>

        </Box>



        <Divider orientation="vertical" sx={{background:'#2A4149',margin:'0px 30px'}} variant="middle" flexItem/>


{/* right */}
        <Box className={styles.right}>
          <Stack className={styles.header} direction='row' justifyContent='space-between' sx={{paddingBottom:'25px'}}>
            <NetworkDis/>
            <WalletButton/>
          </Stack>


{/* Whitelist */}
          <Box className={styles.panelNoneActive}>
            <Box className={styles.panel}>
              <Stack direction='row' justifyContent="space-between">
                <Stack direction='column' spacing={1}>
                  <Stack direction='row' spacing={1} alignItems='center'>
                    <Typography 
                      sx={{fontSize:'16px',color:'white',fontWeight:'700',marginTop:'2px'}}
                    >Whitelist</Typography>
                    <IconButton><img src='./assets/img/active.png'></img></IconButton>
                  </Stack>
                  
                  <Stack direction='row' spacing={1}>
                    <MintInfo name='Count' content='2356' />
                    <MintInfo name='Limit' content='1' />
                    <MintInfo name='Price' content='2 SOL' />
                  </Stack>
                </Stack>

                <Counter/>
              </Stack>
            </Box>
          </Box>


{/* Public */}
          <Box className={styles.panelActive}>
            <Box className={styles.panel}>
            <Stack direction='row' justifyContent="space-between">
              <Stack direction='column' spacing={1}>
                <Typography 
                  sx={{fontSize:'16px',color:'white',fontWeight:'700'}}
                >Public</Typography>
                <Stack direction='row' spacing={1}>
                  <MintInfo name='Limit' content='2' />
                  <MintInfo name='Price' content='2 SOL' />
                </Stack>
              </Stack>
              <Typography
                 sx={{fontSize:'12px',color:'white',fontWeight:'500'}}
              >erere</Typography>
            </Stack>
            </Box>
          </Box>


          <Box className={styles.desktops}>
            <Mint/>
          </Box>
          
{/* footer */}
          <Stack className={styles.footer} direction='row' justifyContent='space-between' alignItems='center'>
            <Typography sx={{color:'white',fontWeight:'500',fontSize:'12px',marginTop:'25px'}}>
              Terms of Service | Disclaimer
            </Typography>
            <img src='./assets/img/furrlabs_logo 1.png'></img>
          </Stack>
        
          
        </Box>
      </Box>
    </>
  );
}

export default Home;