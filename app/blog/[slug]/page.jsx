// app/blog/[slug]/page.jsx (o .tsx)
export async function generateStaticParams() {
  const posts = [
    { slug: 'que-es-nextjs' },
    { slug: 'aprendiendo-react' },
  ];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const PostPage = async ({ params }) => {
  const { slug } = await params;

  return (
    <article>
      <h1>Post: {slug}</h1>
      <p>Contenido del artículo cargado dinámicamente.</p>
    </article>
  );
};

export default PostPage;  