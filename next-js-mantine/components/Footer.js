import { createStyles, Container, Group, Anchor,Image } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },


}));



export function FooterS() {
  const { classes } = useStyles();
  

 

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group >
        <Image
        radius="md"
        src="logo-ucab.svg"
        alt="Random unsplash image"
         />
        </Group>
      </Container>
    </div>
  );
}