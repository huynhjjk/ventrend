import React from 'react'
import NextSeo from 'next-seo';

export default class extends React.Component {
    static async getInitialProps() {
    }

    render() {
        return (
            <div>
                <NextSeo
                    config={{
                        title: 'A',
                        description: 'A Description'
                    }}
                />
                <h1>A</h1>
            </div>
        )
    }
}