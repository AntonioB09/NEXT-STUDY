import { GetServerSideProps } from "next";
import { useState } from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
  Anchor,
  Badge,
} from "@mantine/core";
import { keys } from "@mantine/utils";
import {
  IconSelector,
  IconChevronDown,
  IconChevronUp,
  IconSearch,
} from "@tabler/icons";
import {  Persona, TableSortProps, ThProps } from "../../interfaces";

import prisma from "../../lib/prisma";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  th: {
    padding: "0 !important",
   
  },

  control: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[1],
    },
  },

  icon: {
    width: 21,
    height: 21,
    borderRadius: 21,
  },
}));

function Th({ children, reversed, sorted, onSort }: ThProps) {
  const { classes } = useStyles();
  const Icon = sorted
    ? reversed
      ? IconChevronUp
      : IconChevronDown
    : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text weight={500} size="sm" >
            {children}
          </Text>
          <Center className={classes.icon}>
            <Icon size={14} stroke={1.5} />
          </Center>
        </Group>
      </UnstyledButton>
    </th>
  );
}

function filterData(data: Persona[], search: string) {
  
  
  const query = search.toLowerCase().trim();
  
    
    return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toString().toLowerCase().includes(query))
    );
  
}

function sortData(
  data: Persona[],
  payload: { sortBy: keyof Persona | null; reversed: boolean; search: string }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].toString().localeCompare(a[sortBy].toString());
      }

      return a[sortBy].toString().localeCompare(b[sortBy].toString());
    }),
    payload.search
  );
}

export default function Vacunados({ personas }: TableSortProps) {
  
  // console.table(personas);
  console.table(typeof personas[0].fecha_nac);
  // personas.map((x) => {
  //   ["alto_riesgo"].forEach((key) => {
  //     x[key] = x[key].toString();
  //   });
  //   return x;
  // });
  console.table(typeof personas[0].fecha_nac);
    
  console.table(personas);
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(personas);
  const [sortBy, setSortBy] = useState<keyof Persona | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof Persona) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(personas, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(
      sortData(personas, {
        sortBy,
        reversed: reverseSortDirection,
        search: value,
      })
    );
  };

  // console.log('xs7777',sortedData)
  enum altoRiesgo{
    true = "red",
    false = "green" 
  }
  
  // const dia = personas[0].fecha_nac.getDate()
  //  console.log(personas[0].fecha_nac)
  const rows = sortedData.map((row) => (
    <tr  key={row.doc_identidad}>
      <td>
        <Link href={`/vacunados/${row.doc_identidad}`} passHref>
          <Anchor component="a">
            {row.nombre_per} {row.apellido_per}
          </Anchor>
        </Link>
      </td>
      <td>{row.doc_identidad}</td>
      <td >{row.fecha_nac.toString().split("T00:00:00.000Z")}</td>
      <td > {row.sexo}</td>
      <td>{row.ocupacion_per}</td>
      <td>
        
        <Badge  color={altoRiesgo[row.alto_riesgo.toString()]}>
          {row.alto_riesgo.toString()}
        </Badge>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <TextInput
      
        placeholder="Search by any field"
        mb="md"
        icon={<IconSearch size={14} stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table
        highlightOnHover
        horizontalSpacing="md"
        verticalSpacing="xs"
        
        sx={{ tableLayout: "fixed", minWidth: 700 ,textAlign :"center"}}
      >
        <thead   >
          <tr >
            <Th
              sorted={sortBy === "nombre_per"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("nombre_per")}
              
            >
              Nombre
            </Th>

            <Th
              sorted={sortBy === "doc_identidad"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("doc_identidad")}
            >
              Cedula
            </Th>
            <Th
              sorted={sortBy === "fecha_nac"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("fecha_nac")}
            >
              Fecha de nacimiento
            </Th>
            <Th
              sorted={sortBy === "sexo"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("sexo")}
            >
              Genero
            </Th>
            <Th
              sorted={sortBy === "sexo"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("sexo")}
            >
              Ocupacion
            </Th>
            <Th
              sorted={sortBy === "alto_riesgo"}
              reversed={reverseSortDirection}
              onSort={() => setSorting("alto_riesgo")}
            >
                Alto Riesgo
            </Th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={Object.keys(personas[0]).length}>
                <Text weight={500} align="center">
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ScrollArea>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pern = await prisma.persona.findMany({
    select: {
      doc_identidad: true,
      nombre_per: true,
      apellido_per: true,
      sexo: true,
      fecha_nac: true,
      ocupacion_per: true,
      alto_riesgo: true,
    },
  }); 
  // console.table(pern);
  

  return {
    props: {
      personas: JSON.parse(JSON.stringify(pern)) as Persona[]
      
    },
  };
};
