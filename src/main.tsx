import ReactDOM from 'react-dom/client';

import '@fortawesome/fontawesome-free/css/all.css';

import App from './App.tsx';
import './index.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
