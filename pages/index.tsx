import React from 'react';
import * as fetchImport from 'isomorphic-unfetch'
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default
import Main from '../layouts/main';
import Table from '../components/table';

export default class extends React.Component {
    static async getInitialProps() {
      const apiUrl = 'http://localhost:3000/api/suggestions';
      const params = '';
      const res = await fetch(apiUrl + params);
      const data = await res.json();
      return data;
  }

  render() {
    return (
        <Main>
            <h1>Search</h1>
            <Table data={this.props.data} />
        </Main>
      )
  }
}
