import Head from 'next/head';

import Navigation from "./Navigation";

const Container = (props) => (
    <div>
        <Head>
            <title>Next.js Project</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cyborg/bootstrap.min.css"/>
        </Head>
        <Navigation/>
        <div className="container p-4">
            {props.children}
        </div>

    </div>
)

export default Container;