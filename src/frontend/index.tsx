import ReactDOM from 'react-dom/client';
import App from './app';
import '../styles/styles.scss'
import '../styles/mangaCard.scss'
import '../styles/auth.scss'
import '../styles/home.scss'
import '../styles/mangaDetail.scss'

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
