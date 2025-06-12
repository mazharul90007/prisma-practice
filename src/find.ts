import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

const main = async () => {
    // find all
    const getAllFromDB = await prisma.post.findMany();

    //find first and findFirstOrThrow
    // const findFirst = await prisma.post.findFirstOrThrow({
    //     where: {
    //         id: 2
    //     }
    // });

    //find unique and findUniqueOrThrow
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 13
        },
        select: {
            title: true
        }
    })

    console.log({ findUnique })
}

main();