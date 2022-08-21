import {
    Avatar,
    Badge,
    Table,
    Group,
    Text,
    ActionIcon,
    Anchor,
    ScrollArea,
    useMantineTheme,
  } from '@mantine/core';
  import { IconPencil, IconTrash } from '@tabler/icons';
import { altoRiesgo, IDetallePersona } from '../interfaces';
  
  interface UsersTableProps {
    data: { avatar: string; name: string; job: string; email: string; phone: string }[];
  }
  
  const jobColors: Record<string, string> = {
    engineer: 'blue',
    manager: 'cyan',
    designer: 'pink',
  };
  
  export function DetallePersona({ detalles_persona}: IDetallePersona) {
    const theme = useMantineTheme();
    
     
    
    return (
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th> Nombre
                <td>
                 <Group spacing="sm">
                  <Avatar />
                 <Text size="sm" weight={500}>
                 {detalles_persona.nombre_per} {detalles_persona.apellido_per} 
                 </Text>
                 </Group>
                 </td>
              </th>
              <th>Cedula
                <td>
                 <Group spacing="sm">
                  
                 <Text size="sm" weight={500}>
                 {detalles_persona.doc_identidad}
                 </Text>
                 </Group>
                 </td>
              </th>
              <th>Fecha de Nacimiento
                <td>
                 <Group spacing="sm">
                 
                 <Text size="sm" weight={500}>
                 {detalles_persona.fecha_nac.toString().split("T00:00:00.000Z")}
                 </Text>
                 </Group>
                 </td>
              </th>
              <th>Alto Riesgo
                <td>
                 <Group spacing="sm">
                 <Badge  color={altoRiesgo[detalles_persona.alto_riesgo.toString()]}>
                  {detalles_persona.alto_riesgo.toString()}
                  </Badge>
                 </Group>
                 </td>
              </th>
              
            </tr>
          </thead>
          <tbody> 
    </tbody>
        </Table>
      </ScrollArea>
    );
  }





//   <div>
//      <tr>
//         <td>
//           <Group spacing="sm">
//             <Avatar />
//             <Text size="sm" weight={500}>
//               {detalles_persona.nombre_per}
//             </Text>
//           </Group>
//         </td>
  
//         <td>
//           <Badge
            
//             variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
//             >
//             {detalles_persona.ocupacion_per}
//           </Badge>
//         </td>
//         <td>
//           <Anchor<'a'> size="sm" href="#" onClick={(event) => event.preventDefault()}>
//             {detalles_persona.sexo}
//           </Anchor>
//         </td>
//         <td>
//           <Text size="sm" color="dimmed">
//             {detalles_persona.n_telefono_per}
//           </Text>
//         </td>
//         <td>
//           <Group spacing={0} position="right">
//             <ActionIcon>
//               <IconPencil size={16} stroke={1.5} />
//             </ActionIcon>
//             <ActionIcon color="red">
//               <IconTrash size={16} stroke={1.5} />
//             </ActionIcon>
//           </Group>
//         </td>
//       </tr>
//     </div>