import Nav from '../components/nav'
import Footer from '../components/footer'
export default ({ children }) => (
  <div>
    <Nav/>
    { children }
    <Footer/>
  </div>
)