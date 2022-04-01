import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'
import App from './Components/screens/App/App'

//import { Amplify } from "aws-amplify";
//import awsExports from "./aws-exports";

//Amplify.configure(awsExports);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

