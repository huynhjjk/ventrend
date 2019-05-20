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
                        title: 'B',
                        description: 'B Description'
                    }}
                />
                <h1>B</h1>
            </div>
        )
    }
}