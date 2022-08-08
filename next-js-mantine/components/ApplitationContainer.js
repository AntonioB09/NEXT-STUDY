
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
import { FooterS } from './Footer';

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
         <FooterS></FooterS>
        </Footer>
      }
      header={
<HeaderSimple></HeaderSimple>
      }
    >
      {children}
    
    </AppShell>
  );
}