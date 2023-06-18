import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import NFTCard from "../../NFTCard";
import { useState, useEffect } from "react";
import ImportCollection from "./ImportCollection";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getAllMyNFTCollections } from "../../../redux/dashboard";
import { useRouter } from "next/router";
import Navcrumbs from "../../shared/Navcrumbs";

export default function Created() {
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useAppDispatch()
    const [createdCollections, fetchedCreatedCollections] = useAppSelector((state) => [state.dashboard.createdCollections,
         state.dashboard.fetchedCreatedCollections]);
    useEffect(() => {
        if(!fetchedCreatedCollections) {
            dispatch(getAllMyNFTCollections())
        }
    },[]);

    const router = useRouter();
    return <Box sx={{}}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '2rem',
                alignItems: 'center',
            }}>
                <Navcrumbs>
                    <Typography>Created NFTs</Typography>
                </Navcrumbs>
                <Button disableElevation onClick={() => {
                    setOpenModal(true)
                }} variant="contained">Import Collection</Button>
                <ImportCollection open={openModal} handleClose={() => {setOpenModal(false)}} />
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                // justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                {/* <Box sx={{
                    width: '80%',
                    display: 'flex',
                    flexWrap: 'wrap',
                }}> */}
                    {
                        createdCollections.map((collection, index) => {
                            return <NFTCard key={index} address={collection} onClick={() => {
                                router.push(`/collection/${collection}`)
                            }} />
                        } )
                    }
            {/* </Box> */}
        </Box>

    </Box>
}