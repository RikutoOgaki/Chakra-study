import {
    Box, Flex, Text, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

export default function Sample01() {
    return (
        <>
            <Flex>
                <Menu>

                    <MenuList>
                        <MenuItem>a</MenuItem>
                        <MenuItem>b</MenuItem>
                        <MenuItem>c</MenuItem>
                        <MenuItem>d</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </>
    )
}