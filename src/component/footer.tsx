import {Box, Title,Text} from "@mantine/core";
import SagarLogo from '../assets/SagarLogov2.svg?react';
import {Mail} from "lucide-react";
import classes from "./footer.module.css";
import React, {useEffect, useState} from "react";
const Footer =()=>{
    const handleEmailClick = () => {
        window.location.href = `mailto:sagarindianrestuarant@gmail.com`;
    };
    const [logoCount, setLogoCount] = useState(0);

    useEffect(() => {
        const calculateLogos = () => {
            const logoWidth = 1000; // Adjust this to match the actual width of SagarLogo
            const screenWidth = window.innerWidth;
            setLogoCount(Math.ceil(screenWidth / logoWidth) +1 );
        };

        calculateLogos();
        window.addEventListener('resize', calculateLogos);
        return () => window.removeEventListener('resize', calculateLogos);
    }, []);
    return(
        <>
        <Box id="footer" style={{display:"flex", flexDirection:"row",width:"100%", justifyContent:"center", transform:"scale(-1,-1)"}}>
            {/*<SagarLogo></SagarLogo>*/}
            {/*<SagarLogo/>*/}
            {/*<SagarLogo/>*/}
            {Array.from({ length: logoCount }).map((_, index) => (
                <SagarLogo key={index} style={{height: '100%' }} />
            ))}
        </Box>

        <Box bg={"primary.9"} style={{height: "100%", width: "100vw"}}>
            <Box className={classes.content_container}>
                <Box style={{width: "fit-content", margin: "0 auto", flex: 1}}> {/* Parent container */}
                    <Title size={"h3"} c="white" fw={900} style={{fontFamily: "Noto-serif"}}>
                        SAGAR <br/>
                        INDIAN RESTAURANT
                    </Title>
                    <Text size={"sm"} c={"white"}> {/* Center align the text */}
                        Since opening in 2000, we have been open operating 7 days a week providing a warm and friendly space to eat and laugh with friends.
                        <br/><br/>Sagar Indian Restaurant aims to bring the taste of India to the North Shore. Our experienced and professional chef is passionate about authentic Indian cuisine. You will love our extensive and delicious menu!
                        <br/><br/>We hope to see you soon!
                    </Text>
                    <Box onClick={handleEmailClick}>
                    <Mail color={"white"} size={48} style={{marginTop:"5rem", cursor:"pointer"}}></Mail>
                    </Box>
                </Box>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1597.1479381640552!2d174.72192187984362!3d-36.81142929806282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d38f3b668f529%3A0x5ddd826843e43bc!2sSagar%20Indian%20Restaurant!5e0!3m2!1sen!2snz!4v1735193635166!5m2!1sen!2snz"
                    width="100rem" height="500rem" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" style={{flex: 1, marginLeft:"2rem"}}></iframe>
            </Box>
        </Box>

        </>
    )
}
export default Footer;