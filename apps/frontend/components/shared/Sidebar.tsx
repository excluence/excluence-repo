import { Box, Typography } from "@mui/material";
import WalletButton from "../header/WalletButton";

export default function Sidebar() {
    return <Box sx={{
        width: '90%',
        paddingX: '5%',
        paddingY: '5%',
        bgcolor: 'black',
        height: '96.5%',
        color: 'white'
    }}>
        
        <Box sx={{
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
        }}>
        <Typography variant="h4" sx={{
            fontFamily: 'Russo One',
            alignSelf: 'center',
            marginBottom: '1rem'
        }} >EXCLUENCE</Typography>
        <WalletButton />
        </Box>
    </Box>
}