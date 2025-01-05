import {Box, Divider, Title} from "@mantine/core";
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
            <Divider my={"md"} color={"primary.2 "}></Divider>
            <Box style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                gap: "1rem 10rem", // Spacing between grid items
            }}>
            {subcategory.items.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
            </Box>
        </Box>
    )
}
export default MenuSubcategory;