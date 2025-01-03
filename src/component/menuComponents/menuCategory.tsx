import {Box, Divider, Title} from "@mantine/core";
import MenuItem from "./menuItem.tsx";
import MenuSubCategory from "./menuSubCategory.tsx";
import {Item, Category as CategoryType} from './MenuTypes.ts'
import {FC, Key} from "react";

interface MenuCategoryProps {
    category: CategoryType;
}

const MenuCategory: FC<MenuCategoryProps> = ({category}) => {

    return (
        <Box>
            <Title tt="uppercase" size={"h3"} c={"primary.9"}>{category.name}</Title>
            <Divider my={"md"} color={"primary.6 "}></Divider>
            <Box  style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // Two columns
                gap: "1rem 10rem", // Spacing between grid items
            }}>
            {category.items && category.items.map((item: Item, index: Key | null | undefined) => (
                <MenuItem key={index} item={item} />
            ))}
        </Box>
            {category.subcategories && category.subcategories.map((subcategory, index) => (
                <MenuSubCategory key={index} subcategory={subcategory} />
            ))}
        </Box>
    )

}
export default MenuCategory