// app/page.jsx
import Link from 'next/link';
import Saludo from '../components/Saludo';

export default function Home() {
  return (
    <main>
      <h1>Bienvenido a mi primer proyecto con Next.js</h1>
      <Saludo nombre="Estudiante" />
      <nav>
        <Link href="/contacto">Ir a Contacto</Link>
      </nav>
    </main>
  );
}