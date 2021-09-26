import './styles/App.css';
import Header from '../components/Header'
import Mattress from '../components/Mattress'
import AppContext from '../context/AppContext';
import useInitialState from '../useInitialState';

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Mattress />
    </AppContext.Provider>
  )
}

export default App;
