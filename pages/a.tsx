import React from 'react'
import 'isomorphic-unfetch'

export default class extends React.Component {
    static async getInitialProps() {
        const apiUrl = 'http://localhost:3000/a/api';
        const params = '';
        const res = await fetch(apiUrl + params);
        const data = await res.json();
        return data;
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="section">
                    {
                        this.props.data.map(function(item: any, i: any) {
                            return <div className="row" key={i}>{item.name}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}