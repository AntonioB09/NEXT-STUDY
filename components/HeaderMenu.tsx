import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Menu,
  Center,
  Space,
  ActionIcon,
  Title,
  Text
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HeaderProps } from "../interfaces";
import { NextLink } from "@mantine/next";
import Link from "next/link";
import { IconActivity, IconSettings } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function HeaderMenu({ links }: HeaderProps) {
 
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

      const items = links.map((link) => (
    <Group spacing={5}>
      <Menu trigger="hover" exitTransitionDuration={0} withArrow>
        <Menu.Target>
          <a>
            <Center>
              <span>{link.label}</span>
            </Center>
          </a>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item component={NextLink} href="/vacunados">
            {link.sublabel}
          </Menu.Item>
          <Menu.Item component={NextLink} href="#">
            {link.sublabel2}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Space w="md" />
    </Group>
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <ActionIcon color="blue" size="xl" radius="lg">
          <Link href="/" passHref>
            <IconActivity>
              <IconSettings size={16} />
            </IconActivity>
          </Link>
            
        </ActionIcon>
        
        <Title order={3}> <Text color="green" inherit component="span">VACUCAB</Text></Title>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}
