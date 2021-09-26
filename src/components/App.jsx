import Header from './Header'
import MattressView from './MattressView'
import AppContext from '../context/AppContext';
import useInitialState from '../useInitialState';

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <MattressView />
    </AppContext.Provider>
  )
}

export default App;
