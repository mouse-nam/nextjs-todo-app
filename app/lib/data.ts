import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!);

export async function fetchHelloWorld() {
  const data = await sql`
    SELECT 'Hello world from PostgreSQL!' AS message;
  `;

  return data[0];
}