
import { useState } from 'react';
import {
  AppShell,
  useMantineTheme,
} from '@mantine/core';
import useSWR from 'swr'
import { FooterS } from './Footer';

import { HeaderMenu } from './HeaderMenu';
import {linksData } from '../data/links';
export  const ApplitationContainer  = ({children}) =>{
  const theme = useMantineTheme();
  const { data, error } = useSWR('../data/links.ts', fetch)
  console.log(data)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
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
       <HeaderMenu links={linksData[0].links }></HeaderMenu>
      }
    >
      {children}
    
    </AppShell>
  );
}


