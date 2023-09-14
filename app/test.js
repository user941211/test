import { PrismaClient } from '@prisma/client';

export default function Home({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  try {
    const users = await prisma.user.findMany();
    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        users: [],
      },
    };
  } finally {
    await prisma.$disconnect();
  }
}