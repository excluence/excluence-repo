/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addUserToToleOfCollection, dashboardActions } from "../redux/dashboard";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { backendApi } from "../axiosInstance";
import { getAuthorizationHeader } from "../redux/utils";
import Image from "next/image";
import {BsDiscord} from 'react-icons/bs';

export interface NFTCardProps {
    address: string;
    tokenId?: string;
    onClick?: () => void;
    isCollected?: boolean;
}

export default function NFTCard(props: NFTCardProps) {
    const { contract } = useContract(props.address);
    const { data: nft, isLoading, error } = useNFT(contract, props.tokenId || "1");
    const {data: session} = useSession()
    // const [currentCollectedContract] = useAppSelector((state) => [state.dashboard.currentCollectedContract]);
    const [showJoinCommunityBtn, setShowJoinCommunityBtn] = useState(true);
    const [fetchedNonJoinedRoles, setFetchedNonJoinedRoles] = useState(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (session && (session as any).accessToken && !fetchedNonJoinedRoles && props.isCollected) {
            fetchAllNonJoinedRolesInContract().then(() => {})
        }
    }, []);

    if (isLoading) return <Card variant="outlined" sx={{
        borderRadius: '. 5rem',
        marginX: '2rem',
        marginBottom: '2rem',       
        width: '25%',
        height: '70%',
        paddingY: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: 'primary.light'
    }}>
        <Box sx={{
            width: '90%',
            height: '80%',
            bgcolor: 'secondary.main'
        }}><CircularProgress /></Box>
        <CardContent>
            <Typography sx={{ fontWeight: 'medium', marginBottom: '1rem' }} >Loading your NFT</Typography>
        </CardContent>
    </Card>;
    if (error || !nft) return <Card variant="outlined" sx={{
        borderRadius: '. 5rem',
        marginX: '2rem',
        marginBottom: '2rem',       
        width: '25%',
        height: '70%',
        paddingY: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: 'primary.light'
    }}>
        <Image src="https://i.redd.it/j82jl2vpg4n71.jpg" style={{
            width: '90%',
            height: '80%'
        }} alt="image not found" />
        <CardContent>
            <Typography sx={{ fontWeight: 'medium', marginBottom: '1rem' }} >Failed to load</Typography>
        </CardContent>
    </Card>;

    const fetchAllNonJoinedRolesInContract = async () => {
        try {
            const res = await backendApi.get<{result: Record<string, string>[]}>(`synthetic-role/guild/collection/${props.address}/status`, {
                headers: getAuthorizationHeader()
            });
            setFetchedNonJoinedRoles(true);
            setShowJoinCommunityBtn(res.data.result.length > 0);
        } catch(e) {

        }
    }

    

    const handleJoinCommunityClick = () => {
        dispatch(dashboardActions.setCurrentCollectedContract(props.address));
        if (!(session && (session as any).accessToken)) {
            signIn('discord');
        }else {
            dispatch(addUserToToleOfCollection({
                address: props.address,
                accessToken: (session as any).accessToken
            }))
        }
    }

    return <Card variant="outlined" sx={{
        borderRadius: '. 5rem',
        marginX: '2rem',
        marginBottom: '2rem',       
        width: '25%',
        height: '70%',
        paddingY: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: 'primary.light'
    }}
    onClick={() => { 
        if(props.onClick !== undefined) {
            props.onClick();
        }
    }}
    >
        <ThirdwebNftMedia style={{
            width: '100%',
            height: '75%'
        }} metadata={nft.metadata} />
        <CardContent>
            <Typography sx={{ fontWeight: 'medium', marginBottom: '1rem' }} >{nft?.metadata.name}</Typography>
            {
                (props.isCollected === true && showJoinCommunityBtn) ? <Button onClick={() => {
                    handleJoinCommunityClick()
                }} fullWidth variant="contained" >{
                    session && (session as any).accessToken ? 'Join Community': <BsDiscord fontSize="1.8rem" />
                }</Button> : <></>
            }
        </CardContent>
    </Card>
}