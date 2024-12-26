import {Box, Title,Text} from "@mantine/core";
import SagarLogo from '../assets/SagarLogov2.svg?react';
const Footer =()=>{

    return(
        <>
        <Box style={{display:"flex", flexDirection:"row", justifyContent:"center", transform:"scale(-1,-1)"}}>
            <SagarLogo></SagarLogo>
            <SagarLogo/>
            <SagarLogo/>
        </Box>

        <Box bg={"primary.9"} style={{height: "100%", width: "100vw"}}>
            <Box style={{display:"flex",margin: "10vw", marginTop: "10vh"}}>
                <Box style={{width: "fit-content", margin: "0 auto", flex: 1}}> {/* Parent container */}
                    <Title size={"h3"} c="white" fw={900} style={{fontFamily: "Noto-serif"}}>
                        SAGAR <br/>
                        INDIAN RESTAURANT
                    </Title>
                    <Text size={"sm"} c={"white"}> {/* Center align the text */}
                        At Sagar Indian Restaurant, we bring the authentic flavors of Indian cuisine to the North Shore.
                        Our extensive menu offers something for every taste, including a variety of delicious vegetarian
                        options.
                    </Text>
                </Box>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1597.1479381640552!2d174.72192187984362!3d-36.81142929806282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d38f3b668f529%3A0x5ddd826843e43bc!2sSagar%20Indian%20Restaurant!5e0!3m2!1sen!2snz!4v1735193635166!5m2!1sen!2snz"
                    width="450" height="450" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" style={{flex: 1}}></iframe>
            </Box>
        </Box>

        </>
    )
}
export default Footer;