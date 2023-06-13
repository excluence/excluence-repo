import { Avatar, CardHeader, IconButton } from "@mui/material";
import {BiExit} from 'react-icons/bi';

export default function ProfileCard(props: {address: string, onLogOutClick: () => void}) {
    const getAddress = () => {
        return `${props.address.substring(0, 5)}...${props.address.substring(props.address.length - 4)}`
    }
    return <CardHeader
                sx={{
                    bgcolor: 'primary.main',
                    borderRadius: '1rem'
                }}
                avatar={<Avatar src="https://miro.medium.com/v2/resize:fit:1200/1*5AvlVwUqh7sabHd389tMfw.png" />}
                title={getAddress()}
                titleTypographyProps={{
                    fontWeight: 'medium',
                    fontSize: '1.2rem'
                }}
                action={
                    <IconButton onClick={() => {props.onLogOutClick()}}><BiExit color="red" /></IconButton>
                }

            />
}