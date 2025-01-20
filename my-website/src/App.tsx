import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Banner } from './components/Banner';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
