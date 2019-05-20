import React from 'react';
import { Link } from '../next-routes.module';
import * as fetchImport from 'isomorphic-unfetch'
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default
import Nav from '../components/nav';
import Footer from '../components/footer';
import Table from '../components/table';

export default class extends React.Component {
    static async getInitialProps() {
      const apiUrl = 'http://localhost:3000/api/a';
      const params = '';
      const res = await fetch(apiUrl + params);
      const data = await res.json();
      return data;
  }

  render() {
      return (
          <div>
              <Nav />
              {/* <Table /> */}
              <ul>
                <li><Link route='/a'><a>a</a></Link></li>
                <li><Link route='/b'><a>b</a></Link></li>
                <li><Link route='/sign-in'><a>Sign-In</a></Link></li>
              </ul>
              <div className="section">
                  {
                      this.props.data.map(function(item: any, i: any) {
                          return <div className="row" key={i}>{item.name}</div>
                      })
                  }
              </div>
              <Footer />
          </div>
      )
  }
}
