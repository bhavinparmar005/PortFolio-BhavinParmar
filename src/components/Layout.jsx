import LeftSidebar from "../Pages/LeftSidebar"
import Right_sidebar from "../Pages/Right_sidebar"

import "./Layout.css"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <div className="mian">
        <Navbar />
      </div>

      <div className="container">

        <div className="left_sidebar">
          <LeftSidebar />
        </div>
        <div className="content">

          {children}
        </div>
        <div className="right_sidebar">
          <Right_sidebar />

        </div>
      </div>
    </>
  )
}

export default Layout
