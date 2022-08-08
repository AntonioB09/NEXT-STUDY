import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Button,
  MantineProvider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { MenuHeader } from "./MenuHeader";
import { ThemeIcon } from "@mantine/core";
import { IconActivity } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },
}));

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);

  const { classes, cx } = useStyles();

  return (
    <MantineProvider
      theme={{
        colors: {
          centrosaludcolor: [
            "#228be6",
            "#228be6",
            "#228be6",
            "#228be6",
            "#228be6",
            "#228be6",
            "#228be6",
            "#228be6",
          ],
        },
        primaryColor: "centrosaludcolor",
      }}
    >
      <Header height={60} mb={120}>
        <Container className={classes.header}>
          <ThemeIcon radius="xl" size="xl">
            <IconActivity />
          </ThemeIcon>

          <Group position="center">
            <MenuHeader></MenuHeader>
            <Button>Centros de Salud</Button>
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Container>
      </Header>
    </MantineProvider>
  );
}
