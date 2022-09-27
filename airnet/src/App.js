import logo from './logo.svg';
import './App.css';



function App() {

  return (
      <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/PopularPlan">
          <PopularPlan/>
        </Route>
        <Route exact path="/Addon">
          <Addon/>
        </Route>
        <Route exact path="/History">
          <History/>
        </Route>
        <Route exact path="/Registration">
          <SignUp />
        </Route>
        <Route exact path="/Login">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
