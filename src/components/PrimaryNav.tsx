import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { auth } from "@/auth";
import { LoginButton } from "./auth/login-button";

type NavDescriptor = {
  url: string;
  name: string;
  pageTitle?: string;
  onClick?: Function;
};

const links: NavDescriptor[] = [
  {
    url: "/",
    name: "Home",
    pageTitle: "Home",
  },
  {
    url: "/shop",
    name: "Shop",
    pageTitle: "Shop",
  },
  {
    url: "/services",
    name: "Services",
    pageTitle: "Services",
  },
];

export default async function PrimaryNav() {
  const [isOpen, setIsOpen] = useState(false); // For the nav menu.
  // const session = await auth();
  // const isAuthed = session.user !== null ? true : false;
  const isAuthed = false;

  return (
    <div
      className={`overscroll-none z-50 ${
        isOpen ? "fixed" : "block"
      } md:block top-0 left-0 w-full `}
    >
      <div
        className={`md:my-4 mx-2 md:mx-8 h-20 bg-white flex justify-between`}
      >
        <div className="desktop flex gap-4">
          <div className="branding flex my-auto lg:mr-20 mr-4">
            <Avatar>
              <AvatarImage
                src={"/logo.jpg"}
                alt="Body & Soul Healing NZ Logo"
                className="rounded-full size-14 mx-2"
              ></AvatarImage>
              <AvatarFallback>B&S</AvatarFallback>
            </Avatar>
            <div className="my-auto">
              <div className="text-base sm:text-xl font-medium my-auto">
                Body & Soul Healing NZ
              </div>
              <div className="hidden sm:block text-xs">
                Energy Healing, Crystals and gifts.
              </div>
            </div>
          </div>

          {links.map((link, index) => (
            <div key={index} className="hidden md:block my-auto text-lg">
              <a className="" href={link.url}>
                {link.name}
              </a>
            </div>
          ))}
        </div>

        <div className="mobile flex">
          <Button
            className="h-full bg-transparent hover:bg-transparent md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className={`${isOpen ? "hidden" : "block"}`} />
            <X className={`${isOpen ? "block" : "hidden"}`} />
          </Button>
        </div>

        <div className="desktop-rightnav hidden md:flex gap-6 sm:mx-6 my-auto">
          <LoginButton>
            <Button className={`${isAuthed ? "hidden" : "block"}`}>
              Login / Signup
            </Button>
          </LoginButton>

          <Button className={`${isAuthed ? "block" : "hidden"}`}>Logout</Button>
        </div>
      </div>

      {/* Mobile nav menu */}
      <div
        id="menu"
        className={`nav-menu ${
          isOpen ? "open fixed" : "hidden"
        } md:hidden right-0 top-20 w-full h-full bg-white z-50 overflow-auto transition-all duration-300 ease-in-out`}
      >
        {links.map((link, index) => (
          <a
            key={index}
            className="block p-4 text-xl font-medium text-gray-700 hover:bg-gray-200"
            href={link.url}
          >
            {link.name}
          </a>
        ))}
        <LoginButton>
          <a
            className={`${
              isAuthed ? "hidden" : "block"
            } block p-4 text-xl font-medium hover:bg-gray-200 text-blue-800`}
          >
            Login / Create an Account
          </a>
        </LoginButton>
        <a
          className={`${
            isAuthed ? "block" : "hidden"
          } block p-4 text-xl font-medium hover:bg-gray-200 text-blue-800`}
        >
          Logout
        </a>
      </div>
    </div>
  );
}
