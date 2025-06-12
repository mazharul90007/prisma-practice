import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

const main = async()=>{
const result = await prisma.post.create({
    data: {
        title: "This is Title 2",
        content: "This is content",
        authorName: "Mazharul Islam Sourabh"
    }
})
console.log(result)

}

main();