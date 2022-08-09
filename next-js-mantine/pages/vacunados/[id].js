import React from 'react';
import Link from 'next/link';
import prisma from '../../lib/prisma'
import { createStyles, Avatar, Text, Group ,Badge,useMantineTheme,} from '@mantine/core';
import { IconPhoneCall, IconId,IconMapPin,IconUser } from '@tabler/icons';

export const getStaticPaths = async () => {
  
  const personas = await prisma.persona.findMany()
 
  // map data to an array of path objects with params (id)
  const paths = personas.map(persona => {
    return {
      params: { id: persona.doc_identidad.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  var int = parseInt(id);
  
  const data = await prisma.persona.findUnique({
    where: {
      doc_identidad: int,
    },
    select: {
      doc_identidad: true,
      nombre_per: true,
      apellido_per: true,
      sexo: true,
      n_telefono_per: true,
      nacionalidad: true,
      direccion: true,
      alto_riesgo: true,
    },
  })
  
  return {
        props: { person: data }
      }
}

const Details = ({ person }) => {
  // const theme = useMantineTheme();
  // const useStyles = createStyles((theme) => ({
  //   icon: {
  //     color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  //   },
  
 
  // }));
  
  // const { classes } = useStyles();
  const rColors = {
    true: 'red',
    false: 'blue',
    
  };

  return (
    <div>
      <Group >
        <Avatar  size={94} radius="md" />
        <div>
          <Text  sx={{ textTransform: 'uppercase' }} weight={700} >
            
            PACIENTE
          </Text>

          <Text size="lg" weight={500} >
          {person.nombre_per} {person.apellido_per}
          </Text>

          <Group  spacing={10} mt={3}>
            <IconId stroke={1.5} size={16}  />
            <Text >
              {person.doc_identidad}
            </Text>
          </Group>
          <Group  spacing={10} mt={3}>
            <IconUser stroke={1.5} size={16}  />
            <Text >
              {person.sexo}
            </Text>
          </Group>

          <Group  spacing={10} mt={3}>
            <IconMapPin stroke={1.5} size={16}  />
            <Text >
              {person.nacionalidad} {person.direccion}
            </Text>
          </Group>

 

          <Group  spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={16}  />
            <Text >
              {person.n_telefono_per}
            </Text>
          </Group>

          <Group  spacing={10} mt={5}>
          <Text size="xs" >
              Alto Riesgo
            </Text>
          <Badge 
           color={rColors[person.alto_riesgo.toString()]}
           >

          {person.alto_riesgo.toString()}
          </Badge>
          </Group>

        </div>
      </Group>
      
      
      
      <Link href="/vacunados">
     <a>Go back</a>
     </Link>
     </div>
  );
}











export default Details;