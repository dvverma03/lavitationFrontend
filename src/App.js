import './App.css';
import Invoice from './Invoice';

import { Provider } from 'react-redux';
import appStore from './utils/appstore';

function App() {
  return (
    <Provider store={appStore}><Invoice/></Provider>
      
  );
}

export default App;
