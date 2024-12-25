import {Box, Title} from "@mantine/core";
import MenuItem from "./menuItem.tsx";
import { Subcategory as SubcategoryType } from "./MenuTypes";
import {FC} from "react";
interface SubcategoryProps {
    subcategory: SubcategoryType;
}

const MenuSubcategory: FC<SubcategoryProps> = ({subcategory}) =>{

    return(
        <Box>
            <Title tt="uppercase" size={"h3"} c={"primary.9"}>{subcategory.name}</Title>
            <Box style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                gap: "1 10rem", // Spacing between grid items
            }}>
            {subcategory.items.map((item, index) => (
                <MenuItem key={index} item={item} />
            ))}
            </Box>
        </Box>
    )
}
export default MenuSubcategory;