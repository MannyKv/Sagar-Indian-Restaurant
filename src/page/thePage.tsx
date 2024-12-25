import {Box, Title,Text} from "@mantine/core";
import classes from "./thePage.module.css"
import SagarLogo from '../assets/SagarLogov2.svg?react';
import MenuComp from "../component/menuComponents/menu.tsx";

const openingHours = [
    { day: "MON - TUE", open: "5:00 PM", close: "9:00 PM" },
    { day: "WED - SUN", open: "5:00 PM", close: "10:00 PM" },

];

const thePage = () =>{
return (
    <Box className={classes.background}>
        <Box style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <SagarLogo></SagarLogo>
            <SagarLogo/>
            <SagarLogo/>
        </Box>
       <Box className={classes.container}>
           <Title  className={classes.mainTitle} size="h1" c="primary.9" fw={900}>
               SAGAR INDIAN <br/> RESTAURANT
           </Title>
           <Title size="h4" c="primary.9" fw={900}>
               73 MOKOIA ROAD, BIRKENHEAD, AUCKLAND
           </Title>
           <Text fz="sm" className={classes.description} >
               At Sagar Indian Restaurant, we bring the authentic flavors of Indian cuisine to the North Shore. Our extensive menu offers something for every taste, including a variety of delicious vegetarian options.
           </Text>
           <Box>
               <Title style={{fontSize: "1.75rem", paddingTop: "2rem"}} size="h5" c="primary.9">
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

    </Box>
)
}
export default thePage;