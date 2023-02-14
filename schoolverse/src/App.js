import './styles/App.css';
import BackgroundPage from './components/BackgroundPage'
import { router } from './routes';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <BackgroundPage>
          <RouterProvider router={router} />
    </BackgroundPage>
  );
}

export default App;
