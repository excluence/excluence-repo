import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { signIn, useSession } from "next-auth/react";
import { Header } from "../components/header/Header";
import { Box , Tabs, Tab, Typography} from "@mui/material";
import { useState } from "react";
import DiscordServers from "../components/dashboard/DiscordServers";
import Created from "../components/dashboard/Created";
import DiscordRoles from "../components/dashboard/DiscordRoles";
import Collected from "../components/dashboard/Collected";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { dashboardActions } from "../redux/dashboard";


const customNodeOptions = {
  rpcUrl: 'https://rpc-mumbai.maticvigil.com/', // Polygon RPC URL
  chainId: 80001, // Polygon chain id
}

//Initialize within your constructor


const Home: NextPage = () => {

  const [value] = useAppSelector((state) => [state.dashboard.tabIndex]);



  function getTabPanel() {
    switch(value) {
      case 0: 
        return <Created />;
      case 1:
        return <Collected />
      case 2:
        return <DiscordServers />;
      case 3:
        return <DiscordRoles />
    }
  }


  return (
    <Box width={'90%'} sx={{
      paddingX: '5%',
      paddingY: '2rem',
    }}>
      <main className={styles.main}>
        {/* <Box sx={{
          width: '90%',
          paddingX: '5%',
          paddingY: '2rem'
        }}>
          <Typography>Created NFTs</Typography>
        </Box>
        <Box sx={{
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center',
          paddingY: '2rem'
          }}> */}
          {
            getTabPanel()
          }
        {/* </Box> */}
      </main>
    </Box>
  );
};

export default Home;
