import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-1 bg-gray-850 border-gray-800">
          <div className="row">
            <div className="col-lg-4 mb-30">
              <Link href="/" className="wow animate__animated animate__fadeInUp">
                <img src="/assets/imgs/logo.png" alt="Altapete Solutions" style={{ maxHeight: '42px', width: 'auto' }} />
              </Link>
              <p className="mb-20 mt-20 text-sm color-gray-500 wow animate__animated animate__fadeInUp">
                Altapete Solutions (APS) empowers executives with strategic insights, driving efficient decisions and lasting results beyond financial success.
              </p>
              <div className="d-inline-block location text-start mb-2">Office# 09, 4th Floor, King Khalid Street Cross 15, Al Khobar, KSA</div>
              <div className="d-inline-block location text-start mb-2">159-D Nawab Town, Lahore, PK</div>
              <div className="d-inline-block location text-start">Building #44, Ibn Katheer Street, King Abdulaziz District, Riyadh, KSA</div>
            </div>

            <div className="col-lg-4 mb-30">
              <div className="row">
                <div className="col-6">
                  <p className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">Solutions</p>
                  <ul className="menu-footer">
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/enterprise-solutions">Enterprise Solutions</Link></li>
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/technology-management">Technology Management</Link></li>
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/custom-app-development">Custom Application Development</Link></li>
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/shopify-integration">Shopify Integration</Link></li>
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/zatca-integration">Zatca Integration</Link></li>
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/odoo-to-odoo-data-integration">Odoo to Odoo</Link></li>
                  </ul>
                </div>
                <div className="col-6">
                  <p className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">Products</p>
                  <ul className="menu-footer">
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/rental-solutions">Rental Solutions</Link></li>
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/shipping-solutions">Shipping Solutions</Link></li>
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/hotel-management-solutions">Hotel Management</Link></li>
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/hospital-management-solutions">Hospital Management</Link></li>
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/school-management-solutions">School Management</Link></li>
                    <li className="wow animate__animated animate__fadeInUp"><Link className="color-gray-500" href="/construction-management-solutions">Construction Management</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-30">
              <p className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">Newsletter</p>
              <p className="text-base color-gray-500 wow animate__animated animate__fadeInUp">
                Sign up to be first to receive the latest stories inspiring us, case studies, and industry news.
              </p>
              <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
                  <div className="form-group mb-2">
                    <input className="input-name border-gray-500" type="text" placeholder="Your name" required />
                  </div>
                  <div className="form-group mb-2">
                    <input className="input-email border-gray-500" type="email" placeholder="Email address" required />
                  </div>
                  <div className="form-group mt-20">
                    <button className="btn btn-linear hover-up" type="submit">
                      Subscribe <i className="fi-rr-arrow-small-right"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-bottom border-gray-800">
            <div className="row">
              <div className="col-lg-5 text-center text-lg-start">
                <p className="text-base color-white wow animate__animated animate__fadeIn">
                  Copyright © 2025 <a className="copyright" target="_blank" rel="noreferrer" href="https://altapetesolutions.com/">Altapete Solutions</a>, All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-7 text-center text-lg-end">
                <div className="box-socials">
                  <div className="d-inline-block mr-30 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                    <a className="icon-socials icon-linked color-gray-500" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/altapete-solutions/">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
