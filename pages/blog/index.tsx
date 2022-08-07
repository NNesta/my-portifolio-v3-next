import Head from 'next/head';

type Props = {}

function Blogs({ }: Props) {
    return (
        <div>
            <Head>
                <title>Blog Page</title>
                <meta name='description' content='Blog page for Ngabonziza nestor Portifolio' />
            </Head>
            <h1 className="text-3xl text-teal-400">
                Blog Page
            </h1>
        </div>
    );
}
export const getStaticProps = async () => {


    return {
        props:{
            data:null
        }
    }
}

export default Blogs;