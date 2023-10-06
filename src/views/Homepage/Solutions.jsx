import React from 'react';
import '../../components/Nav/nav1.css'
import '../../components/Nav/nav2.css'
import LogoImage from '../../assets/img/farmerimages.png';
import OpenAccount from '../../assets/img/group-13680.svg';
import GetLoan from '../../assets/img/group-13583.svg';
import Investments from '../../assets/img/group-13492.svg';
import Cards from '../../assets/img/group-13143.svg';
import sol1 from '../../assets/img/supportfarmer1.png';

import sol2 from '../../assets/img/supportfarmer2.jpeg';
import sol3 from '../../assets/img/supportfarmer3.jpeg';
import sol7 from '../../assets/img/supportfarmer4.jpeg';
import sol8 from '../../assets/img/supportfarmer5.jpeg';
import sol9 from '../../assets/img/supportfarmer6.jpeg';
import './solutions.css';

export default function Solutions() {
  return (
    <>
     <header>
      {/* <!-- top-section --> */}
      <div className='top-section'>
        <div className='wrapper'>
          <a href='index.html' className='logo'>
            <img src={LogoImage} width='170' alt='SBM Bank' />
          </a>
          {/* <!-- secondary-nav --> */}
          <ul className='secondary-nav' >
          <li className=''>
              <a href='about-us.html'>Agrifund</a>
            </li>
           
           < li className='invisible'>
              <a href='about-us.html'>Agrifund</a>
            </li>
            <li style={{width:160}}>
              <a href='about-us.html'>About Us</a>
            </li>
            <li style={{width:220, marginLeft:-30}}>
              <a href='investor-relations.html'>Investor Relations</a>
            </li>
            <li style={{marginLeft:-30}}>
              <a href='careers.html'>Careers</a>
            </li>
            <li>
              <a href='support.html'>Support</a>
            </li>
            <li>
              <a href='newsroom.html'>Newsroom</a>
            </li>
            <li>
              <a href='#' className='btn btn-rounded ' style={{width:60,paddingRight:60,borderRadius:50}}>
              Profile
              </a>
            </li>
          </ul>
          {/* <!-- secondary-nav end --> */}
          <a href='#' className='btn-menu icon-menu'></a>
        </div>
      </div>
      {/* <!-- top-section end -->
       <!-- bottom-section --> */}
      <div className='bottom-section'>
        <div className='wrapper'>
          {/* <!-- main_nav --> */}
          <ul id='main_nav'>
            <li>
              <a href='for-you.html'>For You</a>
              <ul className='main_nav-dropdown hidden'>
                <div className='main_nav-wrap-category'>
                  <div className='main_nav-category'>
                    <div className='main_nav-category-title'>
                      <a href='javascript:void(0)'>
                        <img src={OpenAccount} alt='' />
                        <h4>Open an Account</h4>
                      </a>
                    </div>
                    <div className='main_nav-category-links'>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>Elite Current Account</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            Aspire Plus Current Account
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            Aspire Current Account
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='main_nav-category'>
                    <div className='main_nav-category-title'>
                      <a href='javascript:void(0)'>
                        <img src={GetLoan} alt='' />
                        <h4>Get a Loan</h4>
                      </a>
                    </div>
                    <div className='main_nav-category-links'>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>Pay Day Advance</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Auto Loan</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>SBM Overdraft</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='main_nav-category'>
                    <div className='main_nav-category-title'>
                      <a href='javascript:void(0)'>
                        <img src={Investments} alt='' />
                        <h4>Investments</h4>
                      </a>
                    </div>
                    <div className='main_nav-category-links'>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>
                            Term and Call Deposits
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Guarantee & Bonds</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>Letters of Credit</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='main_nav-category'>
                    <div className='main_nav-category-title'>
                      <a href='javascript:void(0)'>
                        <img src={Cards} alt='' />
                        <h4>Cards</h4>
                      </a>
                    </div>
                    <div className='main_nav-category-links'>
                      <ul>
                        <li>
                          <a href='javascript:void(0)'>SBM Debit Card</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>VISA Prepaid Card</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            AA Associate Prepaid Card
                          </a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>VISA Gold Credit Card</a>
                        </li>
                        <li>
                          <a href='javascript:void(0)'>
                            AA Premium Prepaid Card
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
            <li>
              <a href='#'>For Business</a>
            </li>
            <li>
              <a href='#'>For Corporates and Institutions</a>
            </li>
            <li>
              <a href='for-diaspora.html'>For Diaspora</a>
            </li>
            <li>
              <a href='ways-of-banking.html'>Ways to Bank</a>
            </li>
            <li>
              <a href='treasury.html'>Treasury</a>
            </li>
          </ul>
          {/* <!-- main_nav end -->
             <!-- header-search --> */}
          <form className='header-search'>
            <input type='search' placeholder='Search' />
            <button type='submit' className='icon-search'></button>
          </form>
          {/* <!-- header-search end --> */}
        </div>
      </div>
      {/* <!-- bottom-section end --> */}
    </header>

    <div id='mobile_nav_wrapper'>
    <div className='mobile-nav-content'>
      <div className='header'>
        <a href='#' className='mobile-menu-close icon-close'></a>
        <a href='index.html' className='logo'>
          <img src='images/logo.png' width='170' height='46' alt='SBM Bank' />
        </a>
      </div>
      <ul className='mobile-nav'>
        <li className='search'>
          {/* <!-- header-search --> */}
          <form className='header-search'>
            <input type='search' placeholder='Search' />
            <button type='submit' className='icon-search'></button>
          </form>
          {/* <!-- header-search end --> */}
        </li>
        <li>
          <a href='for-you.html'>For You</a>
        </li>
        <li>
          <a href='#'>For Business</a>
        </li>
        <li>
          <a href='#'>For Corporates and Institutions</a>
        </li>
        <li>
          <a href='#'>For Diaspora</a>
        </li>
        <li>
          <a href='ways-of-banking.html'>Ways to Bank</a>
        </li>
        <li className='secondary-menu'>
          <a href='#' target='_blank'>
            About Us
          </a>
          <span className='sep'>|</span>
          <a href='#' target='_blank'>
            Investor Relations
          </a>
          <span className='sep'>|</span>
          <a href='#' target='_blank'>
            Careers
          </a>
          <a href='#' target='_blank'>
            Support
          </a>
          <span className='sep'>|</span>
          <a href='#' target='_blank'>
            Newsletter
          </a>
          <a href='#' className='btn-ib'>
            Internet Banking
          </a>
        </li>
      </ul>
    </div>
  </div>


    <section className='content-wrapper has-animation'>
      <div className='wrapper'>
        <div className='solutions first-fold'>
          <div className='col left'>
            <div className='block'>
              <h2 className='section-title'>
                Solutions
                <br />
                <span className='light'>for you</span>
              </h2>
              <p>
                Banking with us ensures safety and security while you transact,
                manage, or grow your money.
              </p>
              <a href='#' className='link-btn'>
                All products for you
              </a>
            </div>
          </div>
          <div className='col right products-slider owl-carousel'>
            <div className='block'>
              <div className='product'>
                <img src={sol1} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                    Get a current account that suits you
                  </h3>
                  <p>
                    A current account that lets you access your funds at all
                    times
                  </p>
                  <a href='#' className='primary-btn'>
                    Open an account
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol2} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>Enjoy convenience when you need it</h3>
                  <p>
                    A credit card that provides you the security that you need
                  </p>
                  <a href='#' className='primary-btn'>
                    Get a card
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol3} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                    Unlock endless possibilities for you
                  </h3>
                  <p>
                    Designed to provide you liquidity in those times of need
                  </p>
                  <a href='#' className='primary-btn'>
                    Get a loan
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={sol9} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>Save your money with us </h3>
                  <p>
                    A savings account that helps you lets you achieve your goals
                    quicker
                  </p>
                  <a href='#' className='primary-btn'>
                    Open an account
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={''} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>Mortgage Options for everyone</h3>
                  <p>Whatever your needs, we have a mortgage for you</p>
                  <a href='#' className='primary-btn'>
                    Get a loan
                  </a>
                </div>
              </div>
            </div>
            <div className='block'>
              <div className='product'>
                <img src={''} width='290' height='143' alt='Product Pic' />
                <div className='desc'>
                  <h3 className='title'>
                    Investment Advisors are a call away{' '}
                  </h3>
                  <p>A solution that lets you make the most of your money</p>
                  <a href='#' className='primary-btn'>
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

