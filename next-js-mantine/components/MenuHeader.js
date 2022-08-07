import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons';
import { NextLink } from '@mantine/next';


export function MenuHeader() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item component={NextLink} href="/hello">
      Hello
    </Menu.Item>
    </Menu.Dropdown>



        

    </Menu>

    
  );
}