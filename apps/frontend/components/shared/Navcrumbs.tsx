import { Breadcrumbs, Typography } from "@mui/material";

import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Navcrumbs(props: {children: ReactNode}) {
    const router = useRouter()
    return <Breadcrumbs>
    <Typography onClick={() => {
        if(router.pathname  !== "/"){
            router.push('/')
        }
    }} sx={{
        ":hover" : {
            color: 'black'
        },
        cursor: 'pointer'
    }}>Studio</Typography>
    {props.children}
</Breadcrumbs>
}