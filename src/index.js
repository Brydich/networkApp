import ReactDOM from 'react-dom/client';
import App from './App';

// Получаем блок, куда все складывается (public > index.html)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим
root.render(
    <App />
);