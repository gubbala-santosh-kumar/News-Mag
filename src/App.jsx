import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsBoard from "./Components/NewsBoard"

const App = () => {

  const [category,setCategory] = useState("general");

  return (
    <div>
        <Navbar setCategory={setCategory}/>
        <center><NewsBoard category={category}/></center>
    </div>
  )
}

export default App