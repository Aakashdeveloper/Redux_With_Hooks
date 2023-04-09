import  React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './component/routing';
import { store } from "./redux/store";
import { Provider } from "react-redux";
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
root.render( <Provider store={store}>
                    <Routing/>
            </Provider>)
