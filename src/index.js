import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {store} from "./assets/store";

// Получаем блок, куда все складывается (public > index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);