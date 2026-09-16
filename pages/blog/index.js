import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import posts from '@/data/blogs.json';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

export default function BlogIndex() {
  return (
    <Layout
      title="Latest Insights, ERP & Tech Guides | Altapete Solutions"
      description="Explore expert articles, technical checklists, and ERP integration guides from the Altapete Solutions team."
    >
      <div className="cover-home1" style={{ paddingTop: '50px', paddingBottom: '90px' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Header Banner */}
          <div className="text-center mb-55">
            <div className="brand-badge mb-20 d-inline-flex align-items-center gap-2">
              <BookOpen size={14} color="#2c73d9" />
              <span>KNOWLEDGE & STRATEGY HUB</span>
            </div>
            <h1 className="font-heading mb-20 blog-index-title" style={{ fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', fontWeight: 800, lineHeight: 1.2 }}>
              Our Latest <span className="color-linear">Articles & Insights</span>
            </h1>
            <p className="blog-index-subtitle mx-auto" style={{ maxWidth: '680px', fontSize: '16px', lineHeight: 1.7 }}>
              In-depth guides, ERP integration best practices, Odoo checklists, and enterprise digital transformation blueprints.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="row g-4">
            {posts.map((post, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div
                  className="blog-card-item h-100 d-flex flex-column"
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* Card Image */}
                  <div className="position-relative" style={{ height: '220px', overflow: 'hidden' }}>
                    <Link href={`/blog/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s ease'
                        }}
                        className="blog-card-img"
                      />
                    </Link>
                    <span 
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        background: 'rgba(15, 23, 42, 0.8)',
                        backdropFilter: 'blur(8px)',
                        color: '#00d4ff',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        border: '1px solid rgba(0, 212, 255, 0.3)'
                      }}
                    >
                      ERP & TECH
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <h3 className="blog-post-title mb-3" style={{ fontSize: '18px', fontWeight: 700, lineHeight: 1.45 }}>
                        <Link href={`/blog/${post.slug}`} className="blog-post-link">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="blog-post-excerpt mb-4" style={{ fontSize: '14px', lineHeight: 1.65 }}>
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-3 border-top d-flex align-items-center justify-content-between blog-post-footer" style={{ borderColor: 'var(--border-color)' }}>
                      <span className="blog-post-readtime d-inline-flex align-items-center gap-1" style={{ fontSize: '12.5px' }}>
                        <Clock size={13} color="#2c73d9" /> 5 min read
                      </span>
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="d-inline-flex align-items-center gap-1 font-sm blog-read-more"
                        style={{ fontWeight: 600, color: 'var(--brand-accent)', textDecoration: 'none' }}
                      >
                        Read Article <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </Layout>
  );
}
