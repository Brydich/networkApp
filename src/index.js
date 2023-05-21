import ReactDOM from 'react-dom/client';
import App from './app/App';
import {Provider} from "react-redux";
import {store} from "./assets/store";
import {BrowserRouter} from "react-router-dom";

// Получаем блок, куда все складывается (public > index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);