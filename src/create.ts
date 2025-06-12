import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

const main = async () => {
    //create single data into db
    // const result = await prisma.post.create({
    //     data: {
    //         title: "This is Title 2",
    //         content: "This is content",
    //         authorName: "Mazharul Islam Sourabh"
    //     }
    // })
    // console.log(result)

    //create many
    const createMany = await prisma.post.createMany({
        data: [
            { title: "First Post", content: "This is the content of the first post.", authorName: "John Doe" },
            { title: "Second Post", content: "This is the content of the second post.", authorName: "Jane Smith" },
            { title: "Learning Prisma", content: "How to use Prisma with PostgreSQL.", authorName: "Alice Johnson" },
            { title: "Web Development", content: "Introduction to modern web development.", authorName: "Bob Brown" },
            { title: "TypeScript Tips", content: "Advanced TypeScript techniques.", authorName: "Charlie Davis" },
            { title: "React Hooks", content: "Understanding React Hooks in depth.", authorName: "Diana Evans" },
            { title: "Node.js Basics", content: "Getting started with Node.js.", authorName: "Ethan Foster" },
            { title: "CSS Grid", content: "Mastering CSS Grid layout.", authorName: "Fiona Green" },
            { title: "Next.js Guide", content: "Building apps with Next.js.", authorName: "George Harris" },
            { title: "GraphQL Intro", content: "Introduction to GraphQL.", authorName: "Hannah King" },
            { title: "Docker for Devs", content: "Using Docker in development.", authorName: "Ian Lee" },
            { title: "Python Tricks", content: "Useful Python tips and tricks.", authorName: "Julia Martin" },
            { title: "JavaScript ES6", content: "New features in JavaScript ES6.", authorName: "Kevin Nelson" },
            { title: "REST API Design", content: "Best practices for REST APIs.", authorName: "Laura Owens" },
            { title: "Database Indexing", content: "How database indexing works.", authorName: "Mike Parker" },
            { title: "State Management", content: "State management in React.", authorName: "Nancy Quinn" },
            { title: "AWS Basics", content: "Getting started with AWS.", authorName: "Oliver Reed" },
            { title: "Git Best Practices", content: "How to use Git effectively.", authorName: "Patricia Scott" },
            { title: "UI/UX Principles", content: "Basic UI/UX design principles.", authorName: "Quincy Taylor" },
            { title: "Mobile Development", content: "Introduction to mobile app dev.", authorName: "Rachel Underwood" },
            { title: "Testing in React", content: "Unit testing in React applications.", authorName: "Samuel Vance" },
            { title: "DevOps Basics", content: "Introduction to DevOps practices.", authorName: "Tina White" },
            { title: "Security Tips", content: "Web application security best practices.", authorName: "Victor Young" },
            { title: "Career Advice", content: "How to grow as a developer.", authorName: "Wendy Zhang" },
            { title: "AI for Devs", content: "AI tools for developers.", authorName: "Xander Adams" },
            { title: "Blockchain Intro", content: "Understanding blockchain basics.", authorName: "Yara Bennett" },
            { title: "Freelancing Tips", content: "How to succeed as a freelancer.", authorName: "Zachary Clark" },
            { title: "Remote Work", content: "Best practices for remote work.", authorName: "Ava Diaz" },
            { title: "Tech Interviews", content: "How to prepare for coding interviews.", authorName: "Benjamin Edwards" },
            { title: "Open Source", content: "Contributing to open-source projects.", authorName: "Chloe Fisher" }

        ]
    })

    console.log(createMany)

}

main();