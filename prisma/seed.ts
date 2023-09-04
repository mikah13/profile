import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {},
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      profile: {
        create: {
          bio: "I am Alice",
          avatar:
            "https://images.unsplash.com/photo-1468082547792-d37c6c74003e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
        },
      },
      posts: {
        create: {
          title: "Check out Prisma with Next.js",
          content: Buffer.from("https://www.prisma.io/nextjs"),
          published: true,
        },
      },
    },
  });

  const mikeh = await prisma.user.upsert({
    where: { email: "mikeh@gmail.com" },
    update: {},
    create: {
      email: "mikeh@gmail.com",
      name: "Mike Hoang",
      role: "ADMIN",
      profile: {
        create: {
          bio: "I am Mike Hoang",
          avatar:
            "https://images.unsplash.com/photo-1468082547792-d37c6c74003e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
        },
      },
      posts: {
        create: {
          title: "My First Post",
          content: Buffer.from("https://www.prisma.io/nextjs"),
          published: true,
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
