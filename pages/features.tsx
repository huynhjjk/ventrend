import React from 'react'
import NextSeo from 'next-seo';
import Main from '../layouts/main';

export default class extends React.Component {
    static async getInitialProps() {
    }

    render() {
        return (
            <Main>
                <NextSeo
                    config={{
                        title: 'Features',
                        description: 'Features Description'
                    }}
                />
                <h1>Features</h1>
            </Main>
        )
    }
}