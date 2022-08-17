import { GetServerSideProps } from 'next';
import { useState } from 'react';
import {
  createStyles,
  Table,
  ScrollArea,
  UnstyledButton,
  Group,
  Text,
  Center,
  TextInput,
} from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch } from '@tabler/icons';
import { RowData, TableSortProps, ThProps } from '../../interfaces';

import prisma from '../../lib/prisma';
const useStyles = createStyles((theme) => ({
  th: {
    padding: '0 !important',
  },

  control: {
    width: '100%',
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
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
  const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
  return (
    <th className={classes.th}>
      <UnstyledButton onClick={onSort} className={classes.control}>
        <Group position="apart">
          <Text weight={500} size="sm">
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

function filterData(data: RowData[], search: string) {
  
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

function sortData(
  data: RowData[],
  payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
  
) {
  const { sortBy } = payload;
  
  
  if (!sortBy) {
    return filterData(data, payload.search);
  }
  
  return filterData(
    [...data].sort((a, b) => {
      if (payload.reversed) {
        return b[sortBy].localeCompare(a[sortBy]);
      }
      
      
      return a[sortBy].localeCompare(b[sortBy]);
    }),
    payload.search
  );
}



export default function Vacunados( {personas}: TableSortProps) {
  personas.map(x => {
    ['doc_identidad'].forEach(key => {
      x[key] = x[key].toString();
    });
    return x;
  });
  
  // console.table(personas);
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState( personas);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);

  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData( personas, { sortBy: field, reversed, search }));
  };
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData( personas, { sortBy, reversed: reverseSortDirection, search: value }));
  };

// console.log('xs7777',sortedData)
  const rows = sortedData.map((row) => (
    <tr key={row.nombre_per}>
      <td>{row.nombre_per} {row.apellido_per}</td>
      <td>{row.doc_identidad}</td>
      <td>{row.fecha_nac}</td>
      <td>{row.sexo}</td>
      <td>{row.ocupacion_per}</td>
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
        horizontalSpacing="md"
        verticalSpacing="xs"
        sx={{ tableLayout: 'fixed', minWidth: 700 }}
      >
        <thead>
          <tr>
            < Th
              sorted={sortBy === 'nombre_per'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('nombre_per')}
            >
              Nombre 
            </ Th>
            < Th
              sorted={sortBy === 'doc_identidad'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('doc_identidad')}
            >
              Cedula
            </ Th>
            < Th
              sorted={sortBy === 'fecha_nac'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('fecha_nac')}
            >
              Fecha de nacimiento
            </ Th>
            < Th
              sorted={sortBy === 'sexo'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('sexo')}
            >
              Genero
            </ Th>
            < Th
              sorted={sortBy === 'sexo'}
              reversed={reverseSortDirection}
              onSort={() => setSorting('sexo')}
            >
              Ocupacion
            </ Th>
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







export const getServerSideProps:GetServerSideProps = async (ctx) => {

  const pern  =await prisma.persona.findMany({
    select:{
      doc_identidad:true,
      nombre_per:true,
      apellido_per:true,
      sexo:true,
      fecha_nac:true,
      ocupacion_per:true,

  }})
  // console.table( pern)

  // console.log(typeof pern)
  
  
  return {
    props:{
      personas: JSON.parse(JSON.stringify(pern )) 
     
    }
    
  }
}

