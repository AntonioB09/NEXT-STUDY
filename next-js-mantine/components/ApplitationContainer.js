
import { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';
import { HeaderSimple } from './Header';

export  const ApplitationContainer  = ({children}) =>{
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}

      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
<HeaderSimple></HeaderSimple>
      }
    >
      {children}
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}