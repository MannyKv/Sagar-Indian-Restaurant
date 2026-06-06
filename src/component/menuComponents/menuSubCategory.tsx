import {Box, Divider, SimpleGrid, Title} from "@mantine/core";
import MenuItem from "./menuItem.tsx";
import { Subcategory as SubcategoryType } from "./MenuTypes";
import {FC} from "react";
interface SubcategoryProps {
    subcategory: SubcategoryType;
}

const MenuSubcategory: FC<SubcategoryProps> = ({subcategory}) =>{

    return(
        <Box style={{paddingTop: "2rem", paddingBottom:"2rem"}}>
            <Title tt="uppercase" size={"h3"} c={"primary.9"}>{subcategory.name}</Title>
            <Divider my={"md"} color={"primary.2"}></Divider>
            <SimpleGrid cols={{base: 1, sm: 2}} spacing={{base: "lg", sm: "xl"}} verticalSpacing="lg">
                {subcategory.items.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </SimpleGrid>
        </Box>
    )
}
export default MenuSubcategory;
