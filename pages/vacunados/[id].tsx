import { GetStaticProps, GetStaticPaths } from "next";

import prisma from "../../lib/prisma";

const StaticPropsDetail = ({ dpersondetail }) => {
  console.table(dpersondetail);

  return (
    <div>
      <h1>{dpersondetail.doc_identidad}</h1>
      <p>{dpersondetail.nombre_per}</p>
      <p>{dpersondetail.fecha_nac}</p>
      <p>{dpersondetail.sexo}</p>
      <p>{dpersondetail.ocupacion_per}</p>
    </div>
  );
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
  const data = await prisma.persona.findUnique({
    where: {
      doc_identidad: int,
    },
  });

  return {
    props: { dpersondetail: JSON.parse(JSON.stringify(data)) },
  };
};
