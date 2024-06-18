import "./index.css";

export default function App() {
  function handleClick() {
    console.log("Button was clicked and menu btn created and toggled!");
    const btn = document.querySelector("#menu-btn");

    const nav = document.querySelector("#menu");
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
      nav.classList.toggle("flex");
    });
  }

  return (
    <div className="App">
      {/* Navbar */}

      <nav className="cursor-pointer caret-black relative container mx-auto p-6">
        {/*Flex container */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex justify-center pt-2 ">
            <img src={require("./img/logo.svg").default} alt="manage" />
          </div>
          {/*Menu Items */}
          <div className="focus:cursor-auto hidden md:flex space-x-6">
            <a href="../css/main.css" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="../css/main.css" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="../css/main.css" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="../css/main.css" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="../css/main.css" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          {/*Button */}
          <a
            href="../css/main.css"
            className="hidden md:block p-3 px-3 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
          {/* Hamburger Icon*/}
          <button
            onClick={handleClick}
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex-col items-center self-end hidden text-brightRed py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#">Pricing</a>

            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
      {/* Hero section*/}
      <section className="" id="hero">
        <div className="container flex flex-col md:flex-row items-center pd-6 mx-auto mt-10 space-y-0 md:space-y-0">
          {/* Left Item* */}
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="flex-justify-center md:justify-start">
              {/*Button */}
              <a
                href="../css/main.css"
                className="p-3 px-3 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Image */}

          <div className="md:w1/2">
            <img
              src={require("./img/illustration-intro.svg").default}
              alt="Illustration-Img"
            />
          </div>
        </div>
      </section>
      {/*Features section */}
      <section className="features">
        {/* container */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/*What's Different */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md tet-4xl font-bold tex-center md:text-left">
              {" "}
              What's different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          {/*Numbered List */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* List Item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex-items-center space-x-2">
                  <div className="sm:block px-4 py-2 w-11 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p className="text-darkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way down
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>
            {/* List Item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex-items-center space-x-2">
                  <div className="block px-4 py-2 w-11 text-white rounded-full md:py-1 bg-brightRed ">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built-in reports
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p className="text-darkGrayishBlue">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>
            {/* List Item 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex-items-center space-x-2">
                  <div className="block px-4 py-2 w-11 text-white rounded-full md:py-1 bg-brightRed xs:block">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p className="text-darkGrayishBlue">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section id="testimonials">
        {/* Container in Heading and Testm blocks */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center">
            What's Different About Manage?
          </h2>
          {/* Testimoniials container*/}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* Testimonial 1*/}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img
                src={require("./img/avatar-anisha.png")}
                alt="avatar-anisha"
                className="w-16 -mt-14"
              />
              <h5 className="text-lg font-bold">Anisha Lee</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>

            {/* Testimonial 2*/}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
              <img
                src={require("./img/avatar-shanai.png")}
                alt="avatar-shanai"
                className="w-16 -mt-14"
              />
              <h5 className="text-lg font-bold">Anisha Lee</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>

            {/* Testimonial 3*/}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
              <img
                src={require("./img/avatar-richard.png")}
                alt="avatar-richard"
                className="w-16 -mt-14"
              />
              <h5 className="text-lg font-bold">Anisha Lee</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </div>
          {/* Button */}
          <div className="my-16">
            <a
              href="../css/main.css"
              className="p-3 px-3 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/*  CTA SECTION*/}
      <section className="bg-brightRed">
        {/* Flex Container */}
        <div className="flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          {/* Heading */}
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
          </h2>
          {/* Button */}
          <div>
            <a
              href="../css/main.css"
              className="p-3 px-3 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-veryDarkBlue">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* Logo and social Links Container*/}
          <div className="flex flex-row-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copywright &copy; 2022 All Rights Reserved
            </div>
            {/* Logo */}
            <div>
              <img
                src={require("./img/logo-white.svg").default}
                className="h-8"
                alt="Logo-white"
              />
            </div>

            {/* Social Links Container*/}
            <div className="flex justify-center space-x-4">
              {/* Link 1 */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./img/icon-facebook.svg").default}
                  alt="facebook-lnk"
                  className="h-8"
                />
              </a>
              {/* Link 2 */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./img/icon-youtube.svg").default}
                  alt="facebook-lnk"
                  className="h-8"
                />
              </a>
              {/* Link 3 */}
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./img/icon-twitter.svg").default}
                  alt="facebook-lnk"
                  className="h-8"
                />
              </a>
              {/* Link 4 */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./img/icon-instagram.svg").default}
                  alt="facebook-lnk"
                  className="h-8"
                />
              </a>
              {/* Link 5 */}
              <a
                href="https://www.pinterest.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("./img/icon-pinterest.svg").default}
                  alt="facebook-lnk"
                  className="h-8"
                />
              </a>
            </div>
          </div>
          {/* List Container*/}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" className="hover:text-brightRed">
                Products
              </a>
              <a href="#" className="hover:text-brightRed">
                About
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>
          {/* Input Container */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Updated in your inbox"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copywright &copy; 2022 All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      {/* Footer ends*/}
    </div>
  );
}
