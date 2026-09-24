import { fetchHelloWorld } from './lib/data';

export default async function Home() {
  const data = await fetchHelloWorld();

  return (
    <main>
      <h1>{data.message}</h1>
    </main>
  );
}