import React from 'react';
import Link from 'next/link';
import prisma from '../../lib/prisma'

export const getStaticPaths = async () => {
  
  const feedbacks = await prisma.feedback.findMany()
 
  // map data to an array of path objects with params (id)
  const paths = feedbacks.map(feedback => {
    return {
      params: { id: feedback.id.toString() }
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
  
  const data = await prisma.feedback.findUnique({
    where: {
      id: int,
    },
    select: {
      id: true,
      email: true,
      name: true,
      message: true,
    },
  })
  
  return {
        props: { feedback: data }
      }
}

const Details = ({ feedback }) => {
  return (
    <div>
      <h1>{ feedback.name }</h1>
      <p>{ feedback.message }</p>
      <p>{ feedback.email }</p>
      <Link href="/feedback">
        <a>Go back</a>
      </Link>
    </div>
  );
}


export default Details;





// const SingleFeedback = ({ feedbackItem }) => {
//   return (
//     <div className="prose prose-blue text-white mx-auto h-screen">
//       <Link href="/feedback">
//         <a>Go back</a>
//       </Link>
//       <p>{feedbackItem.message}</p>
//       <p>
//         {feedbackItem.name} - {feedbackItem.email}
//       </p>
//     </div>
//   );
// };

// export default SingleFeedback;

// export const getServerSideProps = async (context) => {
//   console.log(context.params.id)
//   const id = context.params.id;
//   console.log(id)
//   var int = parseInt(id);
//   const data = await prisma.feedback.findUnique({
//     where: {
//       id: int,
      
//     },
//     select:{
//       message:true,
//       name:true,
//       email:true,
//     }
//   })
//   console.log(data)
//   return {
//         props: { feedbackItem: data }
//       }

// };
