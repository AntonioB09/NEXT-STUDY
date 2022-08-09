import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Container,
  ActionIcon,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { IconChevronDown, IconActivity ,IconSettings} from "@tabler/icons";
import { NextLink } from "@mantine/next";
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export function HeaderMenu() {
  const { classes } = useStyles();

  return (
    <Header height={56} mb={120}>
      <Container>
        <div className={classes.inner}>
        <ActionIcon color="blue" size="xl" radius="lg" >
            <Link href="/" passHref>
               <IconActivity  variant="transparent"><IconSettings size={16} /></IconActivity >
            </Link>
            
        </ActionIcon>
        <Title order={3}> <Text color="green" inherit component="span">VACUCAB</Text></Title>
          <Group spacing={5}>
            <Menu trigger="hover" exitTransitionDuration={0} withArrow>
              <Menu.Target>
                <a>
                  <Center>
                    <span>Registro</span>
                    <IconChevronDown size={12} stroke={1.5} />
                  </Center>
                </a>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item component={NextLink} href="/vacunados">
                  Vacunados
                </Menu.Item>
                <Menu.Item component={NextLink} href="#" >
                  Contagiados
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Space w="md" />
            <Menu trigger="hover" exitTransitionDuration={0} withArrow>
              <Menu.Target>
                <a>
                  <Center>
                    <span>Centros de Salud</span>
                    <IconChevronDown size={12} stroke={1.5} />
                  </Center>
                </a>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item component={NextLink} href="/hello">
                  Vacunacion
                </Menu.Item>
                <Menu.Item component={NextLink} href="/hello">
                  Hospitalizacion
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </div>
      </Container>
    </Header>
  );
}
