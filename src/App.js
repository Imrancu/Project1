import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from "react-router-dom";
import Invoice from './components/Dashboard/Invoice';
import MainContent from './components/Dashboard/MainContent';
import CreateInvoice from './components/Dashboard/CreateInvoice';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<MainContent/>}/>
          <Route path='invoice' element={<Invoice/>}/>
          <Route path='invoice/createInvoice' element={<CreateInvoice/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
