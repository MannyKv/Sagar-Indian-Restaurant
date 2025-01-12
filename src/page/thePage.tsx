import {Box, Title, Text, Button} from "@mantine/core";
import classes from "./thePage.module.css"
import SagarLogo from '../assets/SagarLogov2.svg?react';
import MenuComp from "../component/menuComponents/menu.tsx";
import Footer from "../component/footer.tsx";
import React, { useEffect, useState } from 'react';
const openingHours = [
    { day: "MON - TUE", open: "5:00 PM", close: "9:00 PM" },
    { day: "WED - SUN", open: "5:00 PM", close: "10:00 PM" },

];

const ThePage = () =>{

    const scrollToFooter=()=>{
        const element = document.getElementById("footer");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    const scrollToMenu=()=>{
        const element = document.getElementById("menu");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    const [logoCount, setLogoCount] = useState(0);

    useEffect(() => {
        const calculateLogos = () => {
            const logoWidth = 1000; // Adjust this to match the actual width of SagarLogo
            const screenWidth = window.innerWidth;
            setLogoCount(Math.ceil(screenWidth / logoWidth)+1);
        };

        calculateLogos();
        window.addEventListener('resize', calculateLogos);
        return () => window.removeEventListener('resize', calculateLogos);
    }, []);
return (
    <Box className={classes.background}>
        {/*<Box style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>*/}
        {/*<SagarLogo></SagarLogo>*/}
        {/*    <SagarLogo/>*/}
        {/*    <SagarLogo/>*/}
        {/*</Box>*/}
            <Box
                style={{
                    display: 'flex',
                    flexDirection:"row",
                    justifyContent:"center",
                    width:"100%"
                }}
            >
                {Array.from({ length: logoCount }).map((_, index) => (
                    <SagarLogo key={index} style={{ height: '100%' }} />
                ))}
        </Box>
       <Box className={classes.container}>
           <Title  className={classes.mainTitle} size="h1" c="primary.9" fw={900}>
               SAGAR INDIAN <br/> RESTAURANT
           </Title>
           <Title size="h4" c="primary.9" fw={900}>
               73 MOKOIA ROAD, BIRKENHEAD, AUCKLAND
           </Title>
           <Title size={"h5"} c="primary.9" style={{fontFamily: "Noto-serif"}}>Ph: 09 4185019</Title>
           <Text fz="sm" className={classes.description} >
               At Sagar Indian Restaurant, we bring the authentic flavors of Indian cuisine to the North Shore. Our extensive menu offers something for every taste, including a variety of delicious vegetarian options.
           </Text>
           <Box style={{marginTop:"4vh"}}>
           <Button style={{marginRight:"2vw"}} onClick={scrollToFooter} color={"primary.7"}>About Us</Button>
           <Button onClick={scrollToMenu}  color={"primary.7"}>Menu</Button>
           </Box>
           <Box style={{marginTop:"4vh", marginBottom:"4vh"}}>
               <Title style={{fontSize: "1.75rem"}} size="h5" c="primary.9">
                   OPENING HOURS:
               </Title>
               <ul style={{ listStyleType: "none" }}>
                   {openingHours.map(({day, open, close}) => (
                       <li key={day} style={{display: "flex", justifyContent: "space-between", width:"40rem"}}>
                           <Text size='xs' style={{margin:"0.25rem"}}>{day}</Text>
                           <Text size='xs' style={{margin:"0.25rem"}}>{open} - {close}</Text>
                       </li>
                   ))}
               </ul>
           </Box>
           <MenuComp></MenuComp>
       </Box>
    <Footer/>
    </Box>
)
}
export default ThePage;