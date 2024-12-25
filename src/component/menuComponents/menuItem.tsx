import {Box, Text} from "@mantine/core";
import {FC} from "react";
import {Item as ItemType} from './MenuTypes.ts'
interface ItemProps{
    item:ItemType
}
const MenuItem: FC<ItemProps> = ({item}) => {

    return (
        <Box>
            <Box style={{display:"flex", justifyContent:"space-between"}}>
                <Text tt="uppercase" size={"md"} c={"primary.8"}>{item.name}</Text>
                <Text tt="uppercase" size={"md"} c={"primary.8"}>${item.price}</Text>
            </Box>
            <Text size={"xs"}>{item.description}</Text>
        </Box>
    )

}
export default MenuItem