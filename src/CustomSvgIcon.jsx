import { deepPurple } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}  

export default function CustomSvgIcon (){
    return (
        <div className = "CustomSvgIcon"
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      {/* <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" /> */}
      <HomeIcon sx={{ color: deepPurple[300], fontSize: 50 }} />
    </div>
    );
}