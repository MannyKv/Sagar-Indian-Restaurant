import {Box, Text, Tooltip} from "@mantine/core";
import {FC} from "react";
import {Item as ItemType} from './MenuTypes.ts'
import {VeganIcon} from "lucide-react";

interface ItemProps{
    item:ItemType
}
const MenuItem: FC<ItemProps> = ({item}) => {

    return (
        <Box>
            <Box style={{display:"flex", justifyContent:"space-between"}}>
                <Text tt="uppercase" size={"md"} c={"primary.8"}>{item.name}

                    {item.vegan ? ( <Tooltip label={"Can be made vegan"}><VeganIcon style={{color:"E03131", marginLeft: "1rem"}}/></Tooltip>):null}</Text>
                
                <Text tt="uppercase" size={"xs"} c={"primary.8"}>{item.price[0]} | {item.price[1]}</Text>
            </Box>
            <Text size={"xs"}>{item.description}</Text>
        </Box>
    )

}
export default MenuItem