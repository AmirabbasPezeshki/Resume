import { BrowserRouter as Router , Switch , Route } from 'react-router-dom/cjs/react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import AddDialogue from './components/AddDiaLogue';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
const App = () => {
    return (<>
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path='/about'>
                    <About/>
                </Route>
                <Route exact path='/adddialogue'>
                    <AddDialogue/>
                </Route>
                <Route exact path='/blogs/:id'>
                    <BlogDetails/>
                </Route>
                <Route path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    </>);
}
 
export default App;