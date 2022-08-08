
import { useState } from 'react';
import {
  AppShell,
  Footer,
  useMantineTheme,
} from '@mantine/core';

import { FooterS } from './Footer';
import { HeaderMenu } from './HeaderMenu';

export  const ApplitationContainer  = ({children}) =>{
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}

      footer={
        
         <FooterS></FooterS>
        
      }
      header={
       <HeaderMenu></HeaderMenu>
      }
    >
      {children}
    
    </AppShell>
  );
}