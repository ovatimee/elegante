import Image from "next/image";
import { Bars3Icon, ChevronRightIcon, HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function HeaderNav() {
  return (
    <div className="py-2 mb-6 border-b  border-b-border-color lg:p-0 lg:m-0 lg:border-b-0">
      <div className="container">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl flex p-1 mr-2 lg:hidden">
            <span>
              <Bars3Icon className="w-4 h-4" />
            </span>
          </a>
          <div className="left flex items-center">
            <div className="logo">
              <a
                href="/"
                className="text-2xl relative font-extrabold flex pl-3 mr-8 lg:mr-8"
              >
                <span className="circle"></span>cunningz
              </a>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-2 leading-[100px]  second-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/homepage/shop">Shop</a>
                </li>
                <li className="has-child">
                  <a href="/category/women">
                    Womens
                    <span className="icon-small">
                      <ChevronRightIcon className="w-4 h-4" />
                    </span>
                  </a>
                  <div className="absolute w-full h-auto top-auto left-0 right-0 p-10 leading-8 bg-light-bg-color shadow-blue-100 z-50  [&_h4]:text-[0.8rem] [&_h4]:uppercase [&_ul]:text-[13px] mega">
                    <div className="container">
                      <div className="lg:flex wrapper">
                        <div className="flex flex-col flex-1 min-w-[180px] pr-10 mb-6 z-10">
                          <div className="row">
                            <h4>Women's Clothing</h4>
                            <ul>
                              <li>
                                <a href="">Dresses</a>
                              </li>
                              <li>
                                <a href="">Tops & Tees</a>
                              </li>
                              <li>
                                <a href="">Jackets & Coats</a>
                              </li>
                              <li>
                                <a href="">Pants & Capris</a>
                              </li>
                              <li>
                                <a href="">Swaeters</a>
                              </li>
                              <li>
                                <a href="">Costumes</a>
                              </li>
                              <li>
                                <a href="">Hoodies & Sweatshirts</a>
                              </li>
                              <li>
                                <a href="">Jackets & Coats</a>
                              </li>
                              <li>
                                <a href="">Pajamas & Robes</a>
                              </li>
                              <li>
                                <a href="">Shorts</a>
                              </li>
                              <li>
                                <a href="">Swimmers</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex flex-col flex-1 min-w-[180px] pr-10 mb-6 z-10">
                          <div className="row">
                            <h4>Accessories</h4>
                            <ul>
                              <li>
                                <a href="">Jewelry</a>
                              </li>
                              <li>
                                <a href="">Bags & Purses</a>
                              </li>
                              <li>
                                <a href="">Necklaces</a>
                              </li>
                              <li>
                                <a href="">Rings</a>
                              </li>
                              <li>
                                <a href="">Earings</a>
                              </li>
                              <li>
                                <a href="">Bracelets</a>
                              </li>
                              <li>
                                <a href="">Body Jewelry</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex flex-col flex-1 min-w-[180px] pr-10 mb-6 z-10">
                          <div className="row">
                            <h4>Beauty</h4>
                            <ul>
                              <li>
                                <a href="">Bath Accessories</a>
                              </li>
                              <li>
                                <a href="">Makeup & Cosmetics</a>
                              </li>
                              <li>
                                <a href="">Skin Care</a>
                              </li>
                              <li>
                                <a href="">Hair Care</a>
                              </li>
                              <li>
                                <a href="">Essential Oils</a>
                              </li>
                              <li>
                                <a href="">Fragrances</a>
                              </li>
                              <li>
                                <a href="">Soaps & Bath Bombs</a>
                              </li>
                              <li>
                                <a href="">Face Masks & Coverings</a>
                              </li>
                              <li>
                                <a href="">Spa Kits & Gifts</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex flex-col flex-1 min-w-[180px] pr-10 mb-6 z-10">
                          <div className="row">
                            <h4>Top Brands</h4>
                            <ul className="flex flex-wrap max-w-[180px] [&_li]:min-w-[80px] women-brands">
                              <li>
                                <a href="">Nike</a>
                              </li>
                              <li>
                                <a href="">Luis Vuiton</a>
                              </li>
                              <li>
                                <a href="">Hermes</a>
                              </li>
                              <li>
                                <a href="">Gucci</a>
                              </li>
                              <li>
                                <a href="">Zalando</a>
                              </li>
                              <li>
                                <a href="">Tiffany & Co.</a>
                              </li>
                              <li>
                                <a href="">Zara</a>
                              </li>
                              <li>
                                <a href="">H&M</a>
                              </li>
                              <li>
                                <a href="">Cartier</a>
                              </li>
                              <li>
                                <a href="">Channel</a>
                              </li>
                              <li>
                                <a href="">Hurley</a>
                              </li>
                            </ul>
                            <a href="#" className="mt-4 view-all">
                              View all brands
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col flex-1 min-w-[180px] pr-10 mb-6 z-10 lg:flex-2 lg:items-center relative lg:p-0 products">
                          <div className="w-full  row">
                            <div className="h-[400px] media">
                              <div className="thumbnail object-cover">
                                <a href="#">
                                  <Image src="http://eimages.valtim.com/acme-images/product/m/h/mh02-black_main.jpg" width={500} height={500} />
                                  <img src="/images/dev-jane-02.jpg" alt="" />
                                </a>
                              </div>
                            </div>
                            <div className="text-content">
                              <h4>Most Wanted</h4>
                              <a href="" className="primary-button">
                                Order Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/category/men">Men</a>
                </li>
                <li>
                  <a href="/category/sporting">
                    Sports
                    <div className="top-[50%] -mt-6 w-8 rounded-sm -right-8 bg-primary-color fly-item">
                      <span>New!</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="ml-auto relative">
            <ul className="flex items-center second-links">
              <li className="hidden lg:block">
                <a href="#">
                  <div className="icon-large relative">
                    <HeartIcon className="w-6 h-6" /> 
                  </div>
                  <div className="fly-item top-0 right-4 w-4 bg-secondary-dark-color rounded-full text-center" >
                    <span className="item-number">0</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/api/cart" className="iscart flex">
                  <div className="icon-large relative">
                   <ShoppingCartIcon className="w-6 h-6" /> 
                    <div className="fly-item top-0 right-4 w-4 bg-secondary-dark-color rounded-full ">
                      <span className="item-number">0</span>
                    </div>
                  </div>
                  <div className="icon-text">
                    <div className="mini-text">Total</div>
                    <div className="cart-total">$0.00</div>
                  </div>
                </a>
                {/* <!--   mini-cart.ejs  --> */}
                {/* <%-include('mini-cart') %> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
