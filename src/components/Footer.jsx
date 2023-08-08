import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import logo from "../images/logo-bookmark-light.svg";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          backgroundColor: "hsl(229, 31%, 21%)",
        }}
        className="py-10 px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 flex-col text-center md:flex-row md:justify-between">
          <div className="md:flex md:items-center md:gap-6 lg:gap-10">
            <img src={logo} alt="" />
            <ul className="mt-6 md:mt-0 md:flex md:gap-6 lg:gap-10">
              <li className="mb-4 md:my-0">
                <button className="text-white uppercase text-sm tracking-wide hover:text-red-400">
                  Features
                </button>
              </li>
              <li className="mb-4 md:my-0">
                <button className="text-white uppercase text-sm tracking-wide hover:text-red-400">
                  Pricing
                </button>
              </li>
              <li>
                <button className="text-white uppercase text-sm tracking-wide hover:text-red-400">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <ul className="flex items-center gap-4 lg:gap-10">
            <li>
              <button>
                <img src={facebook} alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src={twitter} alt="" />
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
