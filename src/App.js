import React from "react"

import { Modal } from "./components/Modal"
import BasicAccordion from "./components/Accordion"
import { Top } from "./components/Top"

import MenuIcon from "@mui/icons-material/Menu"
import { Social } from "./components/Social"
import SimpleDrawer from "./components/Drawer"

const App = () => {
  const [isEng, setIsEng] = React.useState(false)

  return (
    <div className="App">
      <div className="inner">
        <div className="menu">
          <SimpleDrawer setIsEng={setIsEng} />
        </div>
        <Top isEng={isEng} />
        <div className="serv_divider"></div>
        <div className="content">
          <BasicAccordion isEng={isEng} />
        </div>
        <div className="invite">
          <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <h2>{!isEng ? "Онлайн супровід" : "Online support"}</h2>
          <h3>
            {!isEng
              ? "Заповнити анкету для співпраці"
              : "Fill out the questionnaire for cooperation"}
          </h3>
        </div>
        <div className="serv_divider"></div>
        <Social />
      </div>
    </div>
  )
}

export default App
