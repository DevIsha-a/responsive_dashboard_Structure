
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Layout from "components/user/layout"
import Stats from "pages/user/stats"


function App() { 

  return (
     <Router>
      <Routes>
        <Route path="/" element={<Layout CurrentComponent={<Stats/>}/>}/>
      </Routes>
     </Router>
  )
}

export default App
