import { Button, ButtonGroup, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Web3Auth } from "@web3auth/modal";
import {getAddress, login, loginActions} from "../../../redux/login";
import { useEffect } from "react";
import { getAuthorizationToken } from "../../../redux/utils";
import {WALLET_ADAPTERS} from '@web3auth/base'
import ProfileCard from "../ProfileCard";

export default function WalletButton() {
    let web3auth: Web3Auth;
    if(typeof window !== "undefined"){
        web3auth = new Web3Auth({
          clientId: process.env['NEXT_PUBLIC_WEB3AUTH_CLIENT_ID'] as string, // Get your Client ID from Web3Auth Dashboard
          chainConfig: {
            chainNamespace: "eip155",
            chainId: "0x89", // Use 0x13881 for Mumbai Testnet
          },
          
        });

        web3auth.initModal({
            modalConfig: {
                [WALLET_ADAPTERS.OPENLOGIN]: {
                    label: 'openlogin',
                    showOnModal: false
                }
            }
        }).then();
        
    
    }
    const [address] = useAppSelector((state) => [state.login.address]);
    const dispatch = useAppDispatch();

    const handleOnConnectClick = async () => {
        await web3auth.connect();
        const userInfo = await web3auth.authenticateUser();
        dispatch(login(userInfo.idToken));
        
    }

    const loginAfterConnection = async () => {
        // try {
            const userInfo = await web3auth.authenticateUser();
            dispatch(login(userInfo.idToken));
        // } catch (e) {}
    }

    useEffect(() => {
        if (typeof window !==  'undefined') {
            const token = getAuthorizationToken()
            if (address === undefined && web3auth.connected) {
               loginAfterConnection();
            }
        }
    }, [])
    return (
        <>
            {
                address === undefined?
                <Button disableElevation
                sx={{
                    borderRadius: '0.5rem',
                    paddingY: '0.8rem',
                    bgcolor: 'white',
                    color: 'black',
                    ":hover": {
                        bgcolor: 'secondary.main',
                        color: 'black'
                    },
                    ":focus":{
                        bgcolor: 'secondary.main',
                        color: 'black'
                    },
                }} 
                onClick={() => {handleOnConnectClick()}} variant="contained">
                    <Typography sx={{fontWeight: 'bold'}}>Connect Wallet</Typography>   
                </Button>:
                <ProfileCard address={address} onLogOutClick={async () => {
                    await web3auth.logout()
                    dispatch(loginActions.logOut())
                }} />
            }
        </>
    )
}