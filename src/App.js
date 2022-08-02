import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from "react-router-dom";
import Invoice from './components/Dashboard/Invoice';
import MainContent from './components/Dashboard/MainContent';
import CreateInvoice from './components/Dashboard/CreateInvoice';
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<MainContent/>}/>
          <Route path='invoice' element={<Invoice/>}/>
          <Route path='invoice/createInvoice' element={<CreateInvoice/>}/>
        </Route>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
