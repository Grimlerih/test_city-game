import './App.css';
import { Welcome } from './components/Welcome/Welcome';

function App() {
  return (
    <>
      <div className='w-full h-full min-h-screen bg-gray-100 flex items-center'>
        <Welcome />
      </div>
    </>
  );
}

export default App;
