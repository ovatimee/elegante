import { useState } from "react";
import {
  ArrowDownIcon,
  Bars3Icon,
  BeakerIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import classnames from "classnames";

export default function HeaderTop() {
  const [active, setaActive] = useState(0);

  return (
    <div className="container hidden lg:block">
      <div className="flex items-center justify-between text-xs font-light leading-10">
        <div className="left">
          <ul className="flex items-center pt-1 gap-8">
            {["Blog", "Featured Products", "Wishlist"].map((e, i) => (
              <li key={`id-${i}`}>
                <a href="#">{e}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <ul className="flex items-center pt-1 gap-8">
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Order Tracking</a>
            </li>
            <li className="relative">
              <a href="" className="flex items-center">
                USD
                <span className="icon-small">
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </a>
              <ul className="absolute -right-4 leading-8 bg-white border border-border-color z-10 hidden  hover:block">
                {["USD", "EURO", "GBP", "IDR"].map((e, i) => (
                  <li
                    className={`${
                      i == active ? "bg-border-color" : "bg-white"
                    }`}
                    onClick={() => setaActive(i)}
                    key={`id-${i}`}
                  >
                    <a href="#" className="py-1 px-4">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="relative">
              <a href="" className="flex items-center">
                Englsih
                <span className="icon-small">
                  <ChevronDownIcon className="w-4 h-4" />
                </span>
              </a>
              <ul className="absolute -right-4 leading-8 bg-white border border-border-color z-10 hidden hover:block">
                {["ENGLISH", "GERMAN", "SPANISH", "BAHASA"].map((e, i) => (
                  <li
                    className={`${
                      i == active ? "bg-border-color" : "bg-white"
                    }`}
                    onClick={() => setaActive(i)}
                    key={`id-${i}`}
                  >
                    <a href="#" className="py-1 px-4">
                      {e}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
