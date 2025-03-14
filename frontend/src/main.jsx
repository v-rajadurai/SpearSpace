import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './components/context/ShopContext.jsx';


createRoot(document.getElementById('root')).render(
  <ShopProvider>


    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShopProvider>
);
