import { prisma } from "lib/prisma";


export default async function handlre(req, res) {

    const { name, email, feedbackType, message } = req.body;
    try {
        await prisma.feedback.create({
            data: {
                email,
                name,
                feedbackType,
                message,
            },
        });

        res.status(200).json({ message: 'exito' });
    } catch (error) {
        res.status(400).json({ error });
    }


}