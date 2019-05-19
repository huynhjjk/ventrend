import React from 'react'
import 'isomorphic-unfetch'

export default class extends React.Component {
    static async getInitialProps() {
        const apiUrl = 'http://localhost:3000/a';
        const params = '';
        const res = await fetch(apiUrl + params);
        const data = await res.json();
        return  { data }
    }

    render() {
        return (
            <div>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
}