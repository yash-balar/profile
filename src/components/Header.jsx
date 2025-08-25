import Github from "../assets/github-logo.png"

const Header = () => {

    const handleScroll = (id) => {
        const idName = String(id);
        const value = document.getElementById(idName).offsetTop;
        window.scrollTo(0, value - 100);
    };
  return (
    <header
  className="mx-auto w-full p-3 bg-black rounded-xl border border-blue-500/30 border-b ease-in-out flex-none sticky top-0 transition-[opacity] z-40"
  data-aw-sticky-header="true"
  id="header"
>
  <div className="absolute inset-0" />
  <div className="container relative md:px-6 text-default flex justify-between md:items-center px-3 py-3 w-full">
    <div className="flex justify-between">
      <a href="/" className="flex items-center">
        <span className="rtl:ml-0 ml-2 rtl:mr-2 dark:text-white font-bold md:text-xl self-center text-2xl tracking-wider text-white whitespace-nowrap">
          👨🏻‍💻 Yash Balar
        </span>
      </a>
    
    </div>
    <nav
      aria-label="Main navigation"
      className="items-center md:w-auto w-full hidden md:flex md:justify-self-center md:mx-5 md:overflow-x-auto md:overflow-y-visible overflow-x-hidden overflow-y-auto text-default"
    >
      <ul className="flex uppercase flex-col text-white font-medium md:flex-row md:justify-center md:self-center md:text-[0.9375rem] md:w-auto text-xl tracking-[0.01rem] w-full">
        <li className="">
          <div
            onClick={() => handleScroll("home")}
            className="flex items-center cursor-pointer !text-white dark:hover:text-white hover:text-link px-4 py-3"
          >
            Home
          </div>
        </li>
        <li className="">
          <div
            onClick={() => handleScroll("skills")}
            className="flex items-center cursor-pointer !text-white dark:hover:text-white hover:text-link px-4 py-3"
          >
            Skills
          </div>
        </li>
        <li className="">
          <div
            onClick={() => handleScroll("projects")}
            className="flex items-center cursor-pointer !text-white dark:hover:text-white hover:text-link px-4 py-3"
          >
            Projects
          </div>
        </li>
      
      </ul>
    </nav>
    <div>
    <img src={Github} alt="LinkedIn Logo" className="size-10" style={{filter:"invert(99%) sepia(0%) saturate(7500%) hue-rotate(96deg) brightness(106%) contrast(101%)"}}/>
   </div>
  </div>
</header>

  )
}

export default Header