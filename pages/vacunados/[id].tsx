
import { GetStaticProps, GetStaticPaths } from "next";
import { DetallePersona } from "../../components/DetallesPersona";
import { IDetallePersona } from "../../interfaces";

import prisma from "../../lib/prisma";

const StaticPropsDetail = ({detalles_persona } :IDetallePersona ) => {
  // console.table(detalles_persona);
 if (detalles_persona.reside[0]){

   return (
     <div>
      {/* <h1>{detalles_persona.nombre_per}</h1>
      <p>{detalles_persona.apellido_per}</p>
      <p>{detalles_persona.fecha_nac.toString().split("T00:00:00.000Z")}</p>
      <p>{detalles_persona.sexo}</p>
      <p>{detalles_persona.ocupacion_per}</p>
      <p>{detalles_persona.alto_riesgo.toString()}</p>
      <p>{detalles_persona.n_telefono_per}</p>
      <p>{detalles_persona.nacionalidad}</p>
      <p>{detalles_persona.direccion}</p>
      <p>{detalles_persona.reside[0].fecha_reside.toString().split("T00:00:00.000Z")}</p>
      <p>{detalles_persona.es_paciente.toString()}</p> */}
       <DetallePersona  detalles_persona={ detalles_persona}/>
      
    </div>
  );
}else return (
  <div>
   <h1>{detalles_persona.nombre_per}</h1>
   <p>{detalles_persona.apellido_per}</p>
   <p>{detalles_persona.fecha_nac.toString().split("T00:00:00.000Z")}</p>
   <p>{detalles_persona.sexo}</p>
   <p>{detalles_persona.ocupacion_per}</p>
   <p>{detalles_persona.alto_riesgo}</p>
   <p>{detalles_persona.n_telefono_per}</p>
   <p>{detalles_persona.nacionalidad}</p>
   <p>{detalles_persona.direccion}</p>
   

   </div>
 )
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const personas = await prisma.persona.findMany();

  // map data to an array of path objects with params (id)
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const id   = params?.id;
  if (typeof id === "string")
   var int = parseInt(id);
  console.log(int);
  const DocPersona = await prisma.persona.findUnique({
    where: {
      doc_identidad: int,
    },
    include:{
      reside:true,
    }
  });
  // console.log(DocPersona );
  return {
    props: { detalles_persona: JSON.parse(JSON.stringify(DocPersona))  },
  };
};
