import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="navbar">
          <nav>
            <a href={`/`}>Home</a>
            <a href={`/contact`}>Contact</a>
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
        <div id="footer">
            <a href={`https://github.com/akxcix/template-shadcn-react-vite`}>GitHub</a>
            <a href={`https://twitter.com`}>Twitter</a>
        </div>
      </>
    );
  }
  