import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import posts from '@/data/blogs.json';

export default function BlogIndex() {
  return (
    <Layout
      title="Latest Insights, ERP & Tech Guides | Altapete Solutions"
      description="Explore expert articles, technical checklists, and ERP integration guides from the Altapete Solutions team."
    >
      <div className="cover-home1">
        <div className="container">
          <div className="row">
            <div className="col-xl-1"></div>
            <div className="col-xl-10 col-lg-12">
              <div className="text-center mt-50 mb-50">
                <span className="badge-cyan text-uppercase" style={{ color: '#00b8d4', letterSpacing: '2px', fontWeight: 600 }}>
                  Knowledge Hub
                </span>
                <h1 className="color-white font-heading mt-15 mb-20" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
                  Our Latest <span className="color-linear">Articles & Insights</span>
                </h1>
                <p className="color-gray-500 text-lg" style={{ maxWidth: '650px', margin: '0 auto' }}>
                  In-depth guides, ERP integration best practices, Odoo checklists, and digital transformation strategies.
                </p>
              </div>

              <div className="row mt-40">
                {posts.map((post, idx) => (
                  <div className="col-lg-4 col-md-6 mb-40" key={idx}>
                    <div
                      className="card-blog-grid bg-gray-850 border-gray-800 hover-up"
                      style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                      }}
                    >
                      <div className="card-image position-relative" style={{ height: '220px', overflow: 'hidden' }}>
                        <Link href={`/blog/${post.slug}`}>
                          <img
                            src={post.image}
                            alt={post.imageAlt || post.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </Link>
                      </div>
                      <div className="card-info p-30 d-flex flex-column flex-grow-1">
                        <span className="color-gray-500 text-sm mb-10">ERP & Architecture</span>
                        <h4 className="color-white mb-15" style={{ fontSize: '1.25rem', lineHeight: '1.4' }}>
                          <Link href={`/blog/${post.slug}`} className="color-white hover-linear">
                            {post.title}
                          </Link>
                        </h4>
                        <p className="color-gray-500 text-sm mb-20 flex-grow-1" style={{ lineHeight: '1.6' }}>
                          {post.excerpt}
                        </p>
                        <div className="card-bottom pt-15 border-top border-gray-800 d-flex justify-content-between align-items-center">
                          <Link href={`/blog/${post.slug}`} className="btn btn-linear btn-sm" style={{ padding: '8px 18px', fontSize: '13px' }}>
                            Read Article <i className="fi-rr-arrow-small-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
