import {Box, Text, Divider, Group, SimpleGrid, Title} from "@mantine/core";
import MenuItem from "./menuItem.tsx";
import MenuSubCategory from "./menuSubCategory.tsx";
import {Item, Category as CategoryType} from './MenuTypes.ts'
import {FC, Key} from "react";

interface MenuCategoryProps {
    category: CategoryType;
}

const MenuCategory: FC<MenuCategoryProps> = ({category}) => {

    return (
        <Box style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
            <Group justify="space-between" align="flex-end" wrap="nowrap" gap="md">
                <Title tt="uppercase" size={"h3"} c={"primary.9"}>{category.name}</Title>
                <Text tt="uppercase" size={"sm"} c={"primary.8"} style={{whiteSpace: "nowrap"}}>DINE IN | TAKEAWAY</Text>
            </Group>
            <Divider my={"md"} color={"primary.6"}></Divider>
            <SimpleGrid cols={{base: 1, sm: 2}} spacing={{base: "lg", sm: "xl"}} verticalSpacing="lg">
                {category.items && category.items.map((item: Item, index: Key | null | undefined) => (
                    <MenuItem key={index} item={item}/>
                ))}
            </SimpleGrid>
            {category.subcategories && category.subcategories.map((subcategory, index) => (
                <MenuSubCategory key={index} subcategory={subcategory}/>
            ))}
        </Box>
    )

}
export default MenuCategory
