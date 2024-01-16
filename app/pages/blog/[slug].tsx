import { useAmp } from 'next/amp';
// import Layout from '../../components/Layout';
import blogPosts from '../../data/blogPosts.json';
import { GetStaticProps, GetStaticPaths } from 'next';
import { BlogPost } from '../../types';

export const config = { amp: 'hybrid' };



interface Props {
    post: BlogPost;
}

export default function BlogPost({ post }: Props) {
    const isAmp = useAmp();

    return (
        // <Layout>
        <article>
            <h2 className="text-3xl font-bold">{post.title}</h2>
            <p>{post.content}</p>s
        </article>
        // </Layout>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const slug = context.params?.slug as string;
    const post = blogPosts.find(p => p.slug === slug) as BlogPost;
    return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = blogPosts.map(post => ({ params: { slug: post.slug } }));
    return { paths, fallback: false };
};
