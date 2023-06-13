import { Box, CardHeader, Typography } from "@mui/material";
import WalletButton from "../header/WalletButton";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { dashboardActions } from "../../redux/dashboard";
import {RxAvatar} from 'react-icons/rx';
import {BsDiscord} from 'react-icons/bs';
import {IoLogoBitbucket} from 'react-icons/io';
import {MdCreateNewFolder} from 'react-icons/md'
import { ReactNode } from "react";
import { useRouter } from "next/router";


const MenuItem = (props: {index: number, name: string, icon: ReactNode}) => {
    const [tabIndex] = useAppSelector((state) => [state.dashboard.tabIndex]);
    const dispatch = useAppDispatch();

    return <CardHeader 
        avatar={props.icon}
        title={props.name}
        titleTypographyProps={{
            fontSize: '1.2rem',
        }}
        sx={{
            bgcolor: props.index === tabIndex ? 'primary.light': 'black',
            marginLeft: '5%',
            marginTop: '1rem'
        }}
        onClick={() => {
            dispatch(dashboardActions.setTabIndex(props.index))
        }}
    />
}

export default function Sidebar() {

    const router = useRouter();


    return <Box sx={{
        width: '100%',
        
        paddingY: '5%',
        bgcolor: 'black',
        height: '96.5%',
        color: 'white',
        // display: 'flex'
    }}>
        
        <Box sx={{
            width:'90%',
            display: 'flex',
            paddingX: '5%',
            flexDirection: 'column',
        }}>
        <Typography variant="h4" sx={{
            fontFamily: 'Russo One',
            alignSelf: 'center',
            marginBottom: '1rem',
            cursor: 'pointer'
        }} 
        
        onClick={() => {
            if (router.pathname !== '/') {
                router.push('/');
            }
        }}
        >EXCLUENCE</Typography>
        <WalletButton />
        </Box>

        {
            router.pathname === '/'? <Box sx={{
                marginTop: '4rem'
            }}>
                <MenuItem icon={<MdCreateNewFolder />} index={0} name="Created NFTs" />
                <MenuItem icon={<IoLogoBitbucket />} index={1} name="Collected NFTs" />
                <MenuItem icon={<BsDiscord />} index={2} name="Discord Servers" />
                <MenuItem icon={<RxAvatar />} index={3} name="Discord Roles" />
            </Box>: <></>
        }
    </Box>
}