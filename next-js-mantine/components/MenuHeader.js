import { Menu, Button, Text ,MantineProvider} from "@mantine/core";

import { NextLink } from "@mantine/next";

export function MenuHeader() {
  return (
    <MantineProvider theme={{
      colors: {
       personacolor: ['#51cf66','#69db7c','#8ce99a','#ebfbee','#2f9e44', '#2b8a3e','#37b24d', '#40c057'],
      },
      primaryColor: 'personacolor',
    }}
    >
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Registro</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Personas</Menu.Label>
        <Menu.Item component={NextLink} href="/hello">
          Vacunadas
        </Menu.Item>
        <Menu.Item component={NextLink} href="/hello">
          Tratamiento
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
    </MantineProvider>
  );
}
