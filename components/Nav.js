import Link from 'next/link'

const Nav = () => {
  if(process.browser) {
    const mobileBtn = document.getElementById("mobile-cta"),
        nav = document.querySelector("nav"),
        mobileBtnExit = document.getElementById("mobile-exit");

        mobileBtn.addEventListener("click", () => {
            nav.classList.add("menu-btn");
        });

        mobileBtnExit.addEventListener("click", () => {
            nav.classList.remove("menu-btn");
        });
  }

  return (
    <>
      <div className="navbar">
      <div className="container">
          <a className="logo" href="#">S<span>M</span>S</a>

          <img src="../images/menu.svg" alt="Open Navigation" id="mobile-cta" className="mobile-menu" />

          <nav>
              <img src="../images/exit.svg" alt="Close Navigation" id="mobile-exit" className="mobile-menu-exit" />

              <ul className="nav-right">
                  <li className="current"><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
              </ul>
              <ul className="nav-left">
                  <li><a href="#">Contact</a></li>
                  <li className="sign-in-cta"><a href="#">Sign In</a></li>
              </ul>
          </nav>
      </div>
  </div>
</>
  )
}

export default Nav
