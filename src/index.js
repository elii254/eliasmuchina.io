import { render } from "@testing-library/react";
import ReactDOM  from 'react-dom';

import App from './App'
import './index.css'

ReactDOM.render(<App/>, document.querySelector("#root"))