
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Contacts from './components/Contacts/Contacts'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider} from 'react-redux'
import store from  './redux/store.js'
import AddContact from './components/AddContact/AddContact'
import EditContact from './components/EditContact/EditContact'

function App() {
  return (
   <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar></Navbar>
            <div className='container contact'>
              <div className='py-3'>
                <Switch>
                  <Route exact path='/' component={Contacts} />
                  <Route exact path='/contacts/add' component={AddContact} />
                  <Route exact path='/contacts/edit/:id' component={EditContact} />

                </Switch>
              </div>
            </div>
          </div>

      </Router>
   </Provider>


   
  );
}

export default App;
