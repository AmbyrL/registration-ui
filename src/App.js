import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Admin from './Admin';
import Registration from './Registration';
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Registration} />
                    <Route path="/admin" component={Admin} />
                </div>
            </Router>
        );
    }
}
export default App