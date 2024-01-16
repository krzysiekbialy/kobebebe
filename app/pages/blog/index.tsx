// import Link from 'next/link';
// import Layout from '../../Layout';
// import blogPosts from '../../data/blogPosts.json';

// export default function Blog() {
//     return (
//         <Layout>
//             {blogPosts.map(post => (
//                 <article key={post.slug}>
//                     <h2 className="text-3xl font-bold">
//                         <Link href={`/blog/${post.slug}`}>
//                             <a>{post.title}</a>
//                         </Link>
//                     </h2>
//                     <p>{post.content.substring(0, 200)}...</p>
//                 </article>
//             ))}
//         </Layout>
//     );
// }