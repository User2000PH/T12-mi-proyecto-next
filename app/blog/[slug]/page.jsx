// app/blog/[slug]/page.jsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.ejemplo.com/posts').then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const PostPage = async ({ params }) => {
  const { slug } = await params;
  const post = await fetch(`https://api.ejemplo.com/posts/${slug}`).then((res) => res.json());

  return (
    <article>
      <h1>{post.titulo}</h1>
      <p>{post.contenido}</p>
    </article>
  );
};
export default PostPage;  