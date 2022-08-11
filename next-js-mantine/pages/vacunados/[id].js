import React from "react";
import Link from "next/link";
import prisma from "../../lib/prisma";
import { Avatar, Text, Group, Badge,  SimpleGrid, Box } from "@mantine/core";
import { IconPhoneCall, IconId, IconMapPin, IconUser } from "@tabler/icons";


const Details = ({ person }) => {
  

  // console.log(person[0])
  const rColors = {
    true: "red",
    false: "blue",
  };

  return (
    <div>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][2]} 0%, ${
            theme.colors[theme.primaryColor][4]
          } 100%)`,
        })}>

      <Group>
        <Avatar size={94} radius="md" />
        <div>
          <Text sx={{ textTransform: "uppercase" }} weight={700}>
            PACIENTE
          </Text>

          <Text size="lg" weight={500}>
            {person[0].nombre_per} {person[0].apellido_per}
          </Text>

          <Group spacing={10} mt={3}>
            <IconId stroke={1.5} size={16} />
            <Text>
              {person[0].nacionalidad} {person[0].doc_identidad}
            </Text>
          </Group>
          <Group spacing={10} mt={3}>
            <IconUser stroke={1.5} size={16} />
            <Text>{person[0].sexo}</Text>
          </Group>

          <Group spacing={10} mt={3}>
            <IconMapPin stroke={1.5} size={16} />
            <Text>
              {person[0].direccion} - {person[0].nombre_municipio}
            </Text>
          </Group>

          <Group spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={16} />
            <Text> {person[0].n_telefono_per}</Text>
          </Group>

          <Group spacing={10} mt={5}>
            <Text size="xs">Alto Riesgo</Text>
            <Badge color={rColors[person[0].alto_riesgo.toString()]}>
              {person[0].alto_riesgo.toString()}
            </Badge>
          </Group>
        </div>
      </Group>
      </Box>
      <Box sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][2]} 0%, ${
            theme.colors[theme.primaryColor][4]
          } 100%)`,
        })}>

      <Group>
        
        <div>
          <Text sx={{ textTransform: "uppercase" }} weight={700}>
            INFORMACION DE VACUNA
          </Text>

          <Text size="lg" weight={500}>
            {person[0].nombre_per} {person[0].apellido_per}
          </Text>

          <Group spacing={10} mt={3}>
            <IconId stroke={1.5} size={16} />
            <Text>
              {person[0].nacionalidad} {person[0].doc_identidad}
            </Text>
          </Group>
          <Group spacing={10} mt={3}>
            <IconUser stroke={1.5} size={16} />
            <Text>{person[0].sexo}</Text>
          </Group>

          <Group spacing={10} mt={3}>
            <IconMapPin stroke={1.5} size={16} />
            <Text>
              {person[0].direccion} - {person[0].nombre_municipio}
            </Text>
          </Group>

          <Group spacing={10} mt={5}>
            <IconPhoneCall stroke={1.5} size={16} />
            <Text> {person[0].n_telefono_per}</Text>
          </Group>

          <Group spacing={10} mt={5}>
            <Text size="xs">Alto Riesgo</Text>
            <Badge color={rColors[person[0].alto_riesgo.toString()]}>
              {person[0].alto_riesgo.toString()}
            </Badge>
          </Group>
        </div>
      </Group>
      </Box>
      </SimpleGrid>
      <Link href="/vacunados">
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default Details;

export const getStaticProps = async (context) => {
  const id = context.params.id;
  var int = parseInt(id);

  const pern = await prisma.$queryRaw`SELECT *  
  FROM persona left join reside 
  on persona.doc_identidad = reside.doc_identidad 
  left join municipio 
  on reside.cod_municipio = municipio.cod_municipio
  where persona.doc_identidad = ${int}`;
  console.log(pern);

  return {
    props: {
      person: JSON.parse(JSON.stringify(pern)),
    },
  };
};

export const getStaticPaths = async () => {
  const personas = await prisma.persona.findMany();

  const paths = personas.map((persona) => {
    return {
      params: { id: persona.doc_identidad.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// const data = await prisma.persona.findUnique({
//   where: {
//     doc_identidad: int,
//   },
//   select: {
//     doc_identidad: true,
//     nombre_per: true,
//     apellido_per: true,
//     sexo: true,
//     n_telefono_per: true,
//     nacionalidad: true,
//     direccion: true,
//     alto_riesgo: true,
//     reside:{
//       select:{
//         cod_municipio:true,
//       },

//     },
//   },

// });
