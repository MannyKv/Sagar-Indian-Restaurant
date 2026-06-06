import {Box, Group, Text, Tooltip} from "@mantine/core";
import {FC} from "react";
import {Item as ItemType} from './MenuTypes.ts'
import {VeganIcon} from "lucide-react";

interface ItemProps{
    item:ItemType
}
const MenuItem: FC<ItemProps> = ({item}) => {

    return (
        <Box>
            <Group justify="space-between" align="flex-start" wrap="nowrap" gap="md">
                <Group gap="xs" align="center" wrap="nowrap">
                    <Text tt="uppercase" size={"sm"} c={"primary.8"} style={{lineHeight: 1.2}}>
                        {item.name}
                    </Text>
                    {item.vegan ? (
                        <Tooltip label={"Can be made vegan"}>
                            <VeganIcon size={"1.25rem"} style={{color: "#E03131", flexShrink: 0}}/>
                        </Tooltip>
                    ) : null}
                </Group>

                <Text tt="uppercase" size={"xs"} c={"primary.8"} style={{whiteSpace: "nowrap"}}>
                    ${item.price[0]} | ${item.price[1]}
                </Text>
            </Group>
            <Text size={"xs"} mt={4} style={{lineHeight: 1.4}}>{item.description}</Text>
        </Box>
    )

}
export default MenuItem
