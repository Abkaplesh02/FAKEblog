import './App.css'
import { Route, BrowserRouter as  Router, Routes } from "react-router-dom";
import Header from './Components/Header/Header'
import MainFooter from './Components/MainFooter/MainFooter'
import LandingPage from './Components/MainLandingPage/LandingPage'
import Membership from './Components/HeaderPages/MemberShip/Membership';
import Write from './Components/HeaderPages/WritePage/Write';
import { Provider } from 'react-redux'
import store from './redux/store'
import Story from './Components/HeaderPages/OurStory/Story';

function App() {
 

  return (
    
    <div >
      <Provider store={store}>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/Membership" element={<Membership/>}/>
          <Route path="/createBlog" element={<Write/>}/>
          <Route path="/blogs" element={<Story/>}/>
        </Routes>
        <MainFooter/>
      </Router>
      
      </Provider>
      
    </div>

  )
}

export default App
