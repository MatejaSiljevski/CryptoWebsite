import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import store from './app/Store'
import {Provider} from 'react-redux'



ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
       <App />
      </Provider>
    </React.StrictMode>, 
document.getElementById('root'))