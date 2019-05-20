import Box from '@material-ui/core/Box';
import Nav from '../components/nav'
import Footer from '../components/footer'

export default ({ children }) => (
  <div>
    <Nav/>
    <Box m={3}>
        { children }
    </Box>
    <Footer/>
  </div>
)