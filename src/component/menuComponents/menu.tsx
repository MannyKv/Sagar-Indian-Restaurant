import {Box, Title, Text} from "@mantine/core";
import menu from '../../assets/menu.json';
import { Category as CategoryType } from './MenuTypes.ts';
import MenuCategory from './menuCategory.tsx';
const MenuComp = () =>{
const data: CategoryType[] = menu.categories
    return(
        <Box id={"menu"}>
            <Title size={"h2"} c={"primary.9"}>MENU</Title>
            <Text size={"sm"}>
                Authentic Indian cuisine for every taste,
                <br/>including a variety of vegetarian options</Text>
            <Box>
            {data.map((category,index)=>
            <MenuCategory key={index} category={category}/>
            )}
            </Box>
        </Box>
    )

}
export default MenuComp;