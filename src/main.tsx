import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';

import '@fortawesome/fontawesome-free/css/all.css';

import { App } from './App.tsx';
import './index.css';

Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
