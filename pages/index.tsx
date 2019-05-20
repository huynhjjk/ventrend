import React from 'react';
import { Link } from './../routes';

export default () => (
  <ul>
    <li><Link route='/a'><a>a</a></Link></li>
    <li><Link route='/b'><a>b</a></Link></li>
    <li><Link route='/sign-in'><a>Sign-In</a></Link></li>
  </ul>
)
