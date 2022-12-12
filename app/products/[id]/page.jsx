import React from 'react'

export default function Product({ params }) {
  const id = params.id
  return (
        <div class="single-product">
          <div class="container">
            <div class="wrapper">
              <div class="breadcrumb">
                <ul class="flexitem">
                 {/*  <% product.categories.split(">").map((crum, i) => { %> */}
                 {/*    <li><a href="#"> <%= crum %> </a></li> */}
                 {/* <% }) %>  */}
                </ul>
              </div>
              <div class="column">
                <div class="products one">
                  <div class="flexwrap">
                    <div class="row">
                      <div class="item is_sticky">
                        <div class="price"><span class="discount">35%<br />OFF</span></div>
                        <div class="big-image">
                          // <div class="big-image-wrapper swiper-wrapper">
                          //   <% product.images.map((image, i) => { %>
                          //     <div class="image-show swiper-slide">
                          //       <a href=<%= image %>  data-fslightbox>
                          //         <img src=<%= image %>  alt="">
                          //       </a>
                          //     </div>
                          //   <%  }) %> 
                          // </div>
                        </div>
                        <div thumbSlider="" class="small-image">
                          <ul class="small-image-wrapper flexitem">
                            {/* <% product.images.map((image, i) => { %> */}
                            {/*   <li class="thumbnail-show swiper-slide"> */}
                            {/*     <img src=<%= image %> alt=""> */}
                            {/*   </li> */}
                            {/*   <%  }) %>  */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="item">
                        // <h1><%= product.name %></h1>
                        <div class="content">
                          <div class="rating">
                            <div class="stars"></div>
                            <a href="" class="mini-text">2,251 reviews</a>
                            <a href="" class="add-review mini-text">Add your review</a>
                          </div>
                          <div class="stock-sku">
                            <span class="available">In stock</span>
                            <span class="sku mini-text">SKU-881</span>
                          </div>
                          <div class="price">
                            <span class="current">$80.90</span>
                            <span class="normal">$199.90</span>
                          </div>
                          <form action="/api/cart/> " method="POST">
// <%- product._id % 
                          <div class="colors">
                            <p>Color</p>
                            <div class="variant">
                                // <% product.color.split("|").map(color => { %>
                                //   <p>
                                //     <input type="radio" style="color:<%= color %>;" name="color" value=<%- color %> />
                                //     <label  class="circle" style="background-color:<%= color.toLowerCase() %>;"</label>
                                //   </p>

                                // <% }) %> 
                            </div>
                          </div>
                          <div class="sizes">
                            <p>Size</p>
                            <div class="variant">
                                // <% product.size.split("|").map(size => { %>
                                //   <p>
                                //     <input type="radio" name="size" id=<%= size %> value=<%- size %>  >
                                //     <label for=<%= size %>  class="circle"><span><%= size %> </span></label>
                                //   </p>  
                                // <% }) %> 
                            </div>
                          </div>
                          <div class="actions">
                            <div class="qty-control flexitem">
                              <button type="button" class="minus circle" id="minus">-</button>
                              <input type="text" value="1" class="" id="quantity" name="quantity">
                              <button type="button" class="plus circle" id="plus">+</button>
                            </div>
                            <div class="button-cart">
                              <button class="primary-button" type="submit">Add to cart</button>
                            </div>
                          </form>
                            <div class="wish-share">
                              <ul class="flexitem second-links">
                                <li><a href="#">
                                  <span class="material-symbols-outlined">
                                    favorite
                                    </span>
                                    <span>Wishlist</span>
                                  </a>
                                </li>
                                <li><a href="#">
                                    <span class="">
                                      <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"
                                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z">
                                        </path>
                                      </svg>
                                    </span>
                                    <span>Wishlist</span>
                                  </a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}   
