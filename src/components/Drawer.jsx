import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import Divider from "@mui/material/Divider"

import MenuIcon from "@mui/icons-material/Menu"

export default function SimpleDrawer({ setIsEng }) {
  const [state, setState] = React.useState({
    top: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{
        mt: 2,
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h1 className="drawer__title" onClick={() => setIsEng(false)}>
        Українська
      </h1>
      <Divider />
      <h1 className="drawer__title" onClick={() => setIsEng(true)}>
        Еnglish
      </h1>
    </Box>
  )

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            onClick={toggleDrawer(anchor, true)}
            sx={{ color: "#b0b8c4" }}
          >
            {anchor}
          </MenuIcon>
          <Drawer
            sx={{ bgcolor: "rgba(0, 0, 0, 0.3)" }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
