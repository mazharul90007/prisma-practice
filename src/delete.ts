import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

//delete single data
const deleteData = async () => {
    // const singleDelete = await prisma.post.delete({
    //     where: {
    //         id: 10
    //     }
    // });

    //delete multiple data
    const deleteMany = await prisma.post.deleteMany({
        where: {
            published: true
        }
    })

    console.log(deleteMany)
}

deleteData();