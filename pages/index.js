import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import Layout from '@/components/Layout';
import pagesData from '@/data/pagesData.json';

export default function HomePage() {
  const homeData = pagesData['/'];
  const homeRestHtml = pagesData['/home_rest'];

  return (
    <Layout
      title={homeData?.title || "ERP, SAP & Custom Software Solutions | Altapete"}
      description={homeData?.description || "Altapete provides ERP, SAP, Oracle, custom application development, accounting, and industry-specific software solutions for growing businesses."}
    >
      <div className="cover-home1">
        <div className="container">
          <div className="row">
            <div className="col-xl-1"></div>
            <div className="col-xl-10 col-lg-12">
              <div className="banner apx-hero">
                <div className="row apx-row">
                  <div className="col-lg-6 apx-copy">
                    <h1 className="color-gray-50 apx-title wow animate__animated animate__fadeInUp">
                      <span className="apx-title-sizer" aria-hidden="true">
                        <span>Delivering</span>
                        <span>Business Management Consultancy</span>
                        <span>solutions</span>
                      </span>
                      <span className="apx-title-live">
                        <span>Delivering </span>
                        <Typewriter
                          options={{
                            wrapperClassName: "typewrite color-linear",
                            strings: [
                              "Business Management Consultancy",
                              "Custom App Development",
                              "Management Consultancy",
                              "VAT Consultancy",
                              "Bookkeeping",
                              "ERP NEXT",
                              "Business",
                              "Odoo"
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                        <span> solutions</span>
                      </span>
                    </h1>
                    <div className="row">
                      <div className="col-lg-9">
                        <p className="text-base color-gray-600 apx-lead wow animate__animated animate__fadeInUp">
                          <strong>Altapete </strong>delivers expert ERP, SAP, Oracle, and bookkeeping solutions to streamline operations, reduce costs, and drive business growth.
                        </p>
                      </div>
                    </div>
                    <div className="box-subscriber apx-cta wow animate__animated animate__fadeInUp">
                      <div className="inner-subscriber bg-gray-800">
                        <Link href="/contact-us" className="btn btn-linear btn-arrow-right">
                          GET STARTED <i className="fi-rr-arrow-small-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 text-center apx-visual">
                    <div className="banner-img position-relative wow animate__animated animate__fadeIn">
                      <img src="/assets/imgs/page/homepage1/banner.png" alt="Altapete Solutions" />
                      <div className="pattern-1"><img src="/assets/imgs/template/pattern-1.svg" alt="Pattern" /></div>
                      <div className="pattern-2"><img src="/assets/imgs/template/pattern-2.svg" alt="Pattern" /></div>
                      <div className="pattern-3"><img src="/assets/imgs/template/pattern-3.svg" alt="Pattern" /></div>
                      <div className="pattern-4"><img src="/assets/imgs/template/pattern-4.svg" alt="Pattern" /></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Remaining sections */}
              <div dangerouslySetInnerHTML={{ __html: homeRestHtml }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
