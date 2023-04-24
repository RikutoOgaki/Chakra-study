import {
    Box, Flex, Text, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
} from '@chakra-ui/react'

export default function Sample01() {
    return (
        <>
            <Flex w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Option'
                        variant={'outline'}
                        bg={'blue.400'}
                    ></MenuButton>
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