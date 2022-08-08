import { createStyles, Container, Group, Anchor } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import Link from 'next/link';
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
  
  <Link href="/hello" passHref>
  <Anchor component="a">Next link</Anchor>
  </Link>
 

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <MantineLogo size={28} />
        <Group ></Group>
      </Container>
    </div>
  );
}