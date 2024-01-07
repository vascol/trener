import React from "react"

import { Modal } from "./components/Modal"
import BasicAccordion from "./components/Accordion"
import { Top } from "./components/Top"

import MenuIcon from "@mui/icons-material/Menu"
import { Social } from "./components/Social"

const App = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="App">
      <div className="inner">
        <div className="menu">
          <MenuIcon onClick={() => setOpen(true)} sx={{ color: "#b0b8c4" }} />
        </div>
        <Top />
        <div className="serv_divider"></div>
        <div className="content">
          <BasicAccordion />
        </div>
        <div className="invite">
          <img src="https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <h2>Онлайн супровід</h2>
          <h3>Заповнити анкету для співпраці</h3>
        </div>
        <div className="serv_divider"></div>
        <Social />
        {/* {open && (
          <Modal isOpen={open} setOpen={setOpen}>
            <h1>hello</h1>
          </Modal>
        )} */}
      </div>
    </div>
  )
}

export default App
