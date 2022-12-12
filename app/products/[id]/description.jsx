import React from "react";

export default function description() {
  return (
    <>
      <div class="description collapse">
        <ul>
          <li class="has-child expand">
            <a href="#" class="icon-small">
              Information
            </a>
            <ul class="content">
              <li>
                <span>Brands</span>
                <span></span>Nike
              </li>
              <li>
                <span>Activity</span>
                <span></span>Running
              </li>
              <li>
                <span>Material</span>
                <span>Fleece</span>
              </li>
              <li>
                <span>Gender</span>
                <span>Men</span>
              </li>
            </ul>
          </li>
          <li class="has-child">
            <a href="#0" class="icon-small">
              Content
            </a>
            <div class="content">{/* <%- product.description %>  */}</div>
          </li>
          <li class="has-child">
            <a href="#0" class="icon-small">
              Custom
            </a>
            <div class="content">
              <table>
                <thead>
                  <tr>
                    <th>
                      Size<span class="mini-text">(cm)</span>
                    </th>
                    <th>
                      Bust<span class="mini-text">(cm)</span>
                    </th>
                    <th>
                      Waist<span class="mini-text">(cm)</span>
                    </th>
                    <th>
                      Hip<span class="mini-text">(cm)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>XS</td>
                    <td>82,5</td>
                    <td>62</td>
                    <td>87,5</td>
                  </tr>
                  <tr>
                    <td>S</td>
                    <td>85</td>
                    <td>63,5</td>
                    <td>89</td>
                  </tr>
                  <tr>
                    <td>M</td>
                    <td>87,5</td>
                    <td>67,5</td>
                    <td>93</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>90</td>
                    <td>72,5</td>
                    <td>98</td>
                  </tr>
                  <tr>
                    <td>XL</td>
                    <td>93</td>
                    <td>77,5</td>
                    <td>103</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li class="has-child">
            <a href="" class="icon-small">
              Reviews<span class="mini-text">2.2k</span>
            </a>
            <div class="content">
              <div class="reviews">
                <h4>Customers Review</h4>
                <div class="review-block">
                  <div class="review-block-head">
                    <div class="flexitem">
                      <span class="rate-sum">4.9</span>
                      <span>2,251 Reviews</span>
                    </div>
                    <a href="#review-form" class="secondary-button">
                      Write Review
                    </a>
                  </div>
                  <div class="review-block-body">
                    <ul>
                      <li class="item">
                        <div class="review-form">
                          <p class="person">Review by Sarah</p>
                          <p class="mini-text">On 7/7/22</p>
                        </div>
                        <div class="review-rating rating">
                          <div class="stars"></div>
                        </div>
                        <div class="review-title">
                          <p>Awesome Product!</p>
                        </div>
                        <div class="review-text">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deleniti ex pariatur ad repellat, distinctio
                            repellendus omnis? Tempore officiis repudiandae
                            nesciunt.
                          </p>
                        </div>
                      </li>
                      <li class="item">
                        <div class="review-form">
                          <p class="person">Review by Sarah</p>
                          <p class="mini-text">On 7/7/22</p>
                        </div>
                        <div class="review-rating rating">
                          <div class="stars"></div>
                        </div>
                        <div class="review-title">
                          <p>Awesome Product!</p>
                        </div>
                        <div class="review-text">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deleniti ex pariatur ad repellat, distinctio
                            repellendus omnis? Tempore officiis repudiandae
                            nesciunt.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div class="second-links">
                      <a href="" class="view-all">
                        View all reviews{" "}
                        <span>
                          {/* <svg */}
                          {/*   stroke="currentColor" */}
                          {/*   fill="currentColor" */}
                          {/*   stroke-width="0" */}
                          {/*   viewBox="0 0 24 24" */}
                          {/*   height="1em" */}
                          {/*   width="1em" */}
                          {/*   xmlns="http://www.w3.org/2000/svg" */}
                          {/* > */}
                          {/*   <path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z"></path> */}
                          {/* </svg> */}
                        </span>
                      </a>
                    </div>
                  </div>
                  <div id="review-form" class="review-form">
                    <h4>Write a review</h4>
                    <div class="rating">
                      <p>Are you satisfied enough?</p>
                      <div class="rate-this">
                        <input type="radio" name="rating" id="star5" />
                        <label for="star5">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 20 20"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </label>
                        <input type="radio" name="rating" id="star4" />
                        <label for="star4">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 20 20"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </label>
                        <input type="radio" name="rating" id="star3" />
                        <label for="star3">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 20 20"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </label>
                        <input type="radio" name="rating" id="star2" />
                        <label for="star2">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 20 20"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </label>
                        <input type="radio" name="rating" id="star1" />
                        <label for="star1">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 20 20"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                    <form action="">
                      <p>
                        <label for="">Name</label>
                        <input type="text" />
                      </p>
                      <p>
                        <label for="">Summary</label>
                        <input type="text" />
                      </p>
                      <p>
                        <label for="">Review</label>
                        <textarea cols="30" rows="10"></textarea>
                      </p>
                      <p>
                        <a href="#" class="primary-button">
                          Submit Review
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
