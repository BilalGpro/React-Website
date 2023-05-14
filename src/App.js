import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/Blogs/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        {/* <p>{title}</p> */}
        {/* <p>{[1,2,3,4,6]}</p>
        <p>{50}</p>
        <p>{Math.random() * 10}</p> */}
        {/* <a href={link}>Google Site</a> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
