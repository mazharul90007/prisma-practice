import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const updates = async () => {
    // update single data
    const singleUpdate = await prisma.post.update({
        where: {
            id: 3
        },
        data: {
            title: "Web3 Essentials",
            content: " beginner's guide to decentralized web technologies.",
            authorName: "Elon Turing"
        }
    })

    //update many
    // const updateMany = await prisma.post.updateMany({
    //     where: {
    //         title: "Title 11"
    //     },
    //     data: {
    //         published: true
    //     }
    // })

    // const upsertData = await prisma.post.upsert({
    //     where: {
    //         id: 13
    //     },
    //     update: {
    //         authorName: "Mazharul Islam Sourabh"
    //     },
    //     create: {
    //         title: "This is title 1",
    //         content: "This is content 1",
    //     }
    // })

    console.log(singleUpdate)
}

updates();