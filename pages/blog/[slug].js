import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import posts from '@/data/blogs.json';
import { useTheme } from '@/context/ThemeContext';

function ReadingTime({ content }) {
  const words = content ? content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.round(words / 200));
  return <span>{minutes} min read</span>;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return dateStr;
  }
}

export default function BlogPost({ post, relatedPosts }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!post) {
    return (
      <Layout title="Post Not Found | Altapete">
        <div className="container text-center py-5">
          <h1 style={{ color: 'var(--text-primary)' }}>Article Not Found</h1>
          <Link href="/blog" className="btn btn-linear mt-4">Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${post.title} | Altapete`} description={post.excerpt}>
      <div className={isDark ? 'dark-theme' : 'light-theme'}>
        {/* ── HERO ── */}
        <div className="blog-hero">
          <div className="container blog-hero-inner">
            {/* Breadcrumb */}
            <nav className="blog-breadcrumb">
              <Link href="/" className="bc-link">Home</Link>
              <span className="bc-sep">/</span>
              <Link href="/blog" className="bc-link">Blog</Link>
              <span className="bc-sep">/</span>
              <span className="bc-current">{post.title}</span>
            </nav>

            {/* Category tag */}
            {post.category && (
              <div className="blog-cat-tag">{post.category}</div>
            )}

            {/* Title */}
            <h1 className="blog-hero-title">{post.title}</h1>

            {/* Excerpt */}
            <p className="blog-hero-excerpt">{post.excerpt}</p>

            {/* Meta row */}
            <div className="blog-meta-row">
              <div className="blog-meta-author">
                <div className="blog-meta-avatar">A</div>
                <div>
                  <div className="blog-meta-name">{post.author || 'Altapete Team'}</div>
                  <div className="blog-meta-role">ERP Consultant</div>
                </div>
              </div>
              <div className="blog-meta-stats">
                {post.date && (
                  <span className="blog-meta-stat">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {formatDate(post.date)}
                  </span>
                )}
                <span className="blog-meta-stat">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <ReadingTime content={post.content} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── HERO IMAGE ── */}
        {post.image && (
          <div className="blog-hero-img-wrap">
            <div className="container">
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="blog-hero-img"
              />
            </div>
          </div>
        )}

        {/* ── MAIN CONTENT ── */}
        <div className="blog-body">
          <div className="container">
            <div className="blog-body-grid">

              {/* Article */}
              <article className="blog-article">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="blog-tags-section">
                    <span className="blog-tags-label">Tags:</span>
                    <div className="blog-tags">
                      {post.tags.map((tag, i) => (
                        <span key={i} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author bio card */}
                <div className="blog-author-card">
                  <div className="blog-author-avatar-lg">A</div>
                  <div>
                    <div className="blog-author-name">{post.author || 'Altapete Team'}</div>
                    <div className="blog-author-bio">
                      Expert ERP consultants helping businesses streamline operations with
                      Oracle, SAP, Odoo, and Microsoft Dynamics solutions.
                    </div>
                  </div>
                </div>

                {/* Nav buttons */}
                <div className="blog-post-nav">
                  <Link href="/blog" className="blog-back-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                    Back to All Articles
                  </Link>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="blog-sidebar-col">

                {/* CTA box */}
                <div className="blog-sidebar-card blog-sidebar-cta">
                  <div className="sidebar-cta-icon">💼</div>
                  <h4 className="sidebar-cta-title">Need ERP Consulting?</h4>
                  <p className="sidebar-cta-text">
                    Speak with our certified consultants. Free 30-min discovery call.
                  </p>
                  <Link href="/contact-us" className="btn btn-linear btn-sm sidebar-cta-btn">
                    Book Free Consultation
                  </Link>
                </div>

                {/* Related articles */}
                {relatedPosts.length > 0 && (
                  <div className="blog-sidebar-card">
                    <h4 className="sidebar-section-title">Related Articles</h4>
                    <div className="sidebar-related-list">
                      {relatedPosts.map((rPost, idx) => (
                        <Link href={`/blog/${rPost.slug}`} key={idx} className="sidebar-related-item">
                          <div className="sidebar-related-dot" />
                          <div>
                            <div className="sidebar-related-title">{rPost.title}</div>
                            {rPost.date && (
                              <div className="sidebar-related-date">{formatDate(rPost.date)}</div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services quick links */}
                <div className="blog-sidebar-card">
                  <h4 className="sidebar-section-title">Our Services</h4>
                  <div className="sidebar-services">
                    {[
                      { label: 'Oracle ERP', href: '/oracle-erp' },
                      { label: 'SAP Solutions', href: '/sap-erp' },
                      { label: 'Odoo ERP', href: '/odoo-erp' },
                      { label: 'Microsoft Dynamics', href: '/microsoft-erp' },
                      { label: 'Custom Development', href: '/custom-app-development' },
                    ].map((s, i) => (
                      <Link href={s.href} key={i} className="sidebar-service-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>

              </aside>
            </div>
          </div>
        </div>

        <style jsx>{`
          /* ── HERO ── */
          .blog-hero {
            padding: 60px 0 48px;
          }
          .dark-theme .blog-hero { background: linear-gradient(135deg, #080d18 0%, #0f172a 100%); }
          .light-theme .blog-hero { background: linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 100%); }

          .blog-hero-inner { max-width: 820px; }

          .blog-breadcrumb { display: flex; align-items: center; gap: 6px; margin-bottom: 20px; flex-wrap: wrap; }
          .bc-link { font-size: 13px; text-decoration: none; transition: color 0.2s; }
          .dark-theme .bc-link { color: #64748b; }
          .light-theme .bc-link { color: #64748b; }
          .dark-theme .bc-link:hover { color: #818cf8; }
          .light-theme .bc-link:hover { color: #4f46e5; }
          .bc-sep { color: #475569; font-size: 13px; }
          .bc-current { font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 260px; }
          .dark-theme .bc-current { color: #818cf8; }
          .light-theme .bc-current { color: #4f46e5; }

          .blog-cat-tag {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 100px;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            margin-bottom: 18px;
          }
          .dark-theme .blog-cat-tag { background: rgba(99,102,241,.15); color: #818cf8; border: 1px solid rgba(99,102,241,.3); }
          .light-theme .blog-cat-tag { background: rgba(99,102,241,.08); color: #4f46e5; border: 1px solid rgba(99,102,241,.2); }

          .blog-hero-title {
            font-size: clamp(1.7rem, 3.5vw, 2.8rem);
            font-weight: 800;
            line-height: 1.25;
            margin-bottom: 18px;
          }
          .dark-theme .blog-hero-title { color: #f1f5f9; }
          .light-theme .blog-hero-title { color: #0f172a; }

          .blog-hero-excerpt {
            font-size: 17px;
            line-height: 1.75;
            margin-bottom: 28px;
            max-width: 680px;
          }
          .dark-theme .blog-hero-excerpt { color: #94a3b8; }
          .light-theme .blog-hero-excerpt { color: #475569; }

          .blog-meta-row {
            display: flex;
            align-items: center;
            gap: 24px;
            flex-wrap: wrap;
          }
          .blog-meta-author { display: flex; align-items: center; gap: 10px; }
          .blog-meta-avatar {
            width: 40px; height: 40px;
            border-radius: 50%;
            font-weight: 700;
            font-size: 15px;
            display: flex; align-items: center; justify-content: center;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            flex-shrink: 0;
          }
          .blog-meta-name { font-size: 14px; font-weight: 700; }
          .dark-theme .blog-meta-name { color: #e2e8f0; }
          .light-theme .blog-meta-name { color: #1e293b; }
          .blog-meta-role { font-size: 12px; }
          .dark-theme .blog-meta-role { color: #64748b; }
          .light-theme .blog-meta-role { color: #94a3b8; }
          .blog-meta-stats { display: flex; gap: 16px; flex-wrap: wrap; }
          .blog-meta-stat {
            display: flex; align-items: center; gap: 5px;
            font-size: 13px;
          }
          .dark-theme .blog-meta-stat { color: #64748b; }
          .light-theme .blog-meta-stat { color: #64748b; }

          /* ── HERO IMAGE ── */
          .blog-hero-img-wrap { padding: 0 0 0; margin-bottom: 0; }
          .blog-hero-img {
            width: 100%;
            max-height: 480px;
            object-fit: cover;
            border-radius: 20px;
            display: block;
            margin: 0 auto;
          }
          .dark-theme .blog-hero-img { box-shadow: 0 8px 40px rgba(0,0,0,.5); }
          .light-theme .blog-hero-img { box-shadow: 0 8px 40px rgba(0,0,0,.1); }

          /* ── BODY ── */
          .blog-body { padding: 60px 0 80px; }
          .dark-theme .blog-body { background: #0a0f1e; }
          .light-theme .blog-body { background: #f8fafc; }

          .blog-body-grid {
            display: grid;
            grid-template-columns: 1fr 340px;
            gap: 40px;
            align-items: start;
          }
          @media (max-width: 1024px) {
            .blog-body-grid { grid-template-columns: 1fr; }
          }

          /* ── ARTICLE ── */
          .blog-article {
            min-width: 0;
          }

          :global(.blog-content h1),
          :global(.blog-content h2),
          :global(.blog-content h3),
          :global(.blog-content h4) {
            font-weight: 800;
            margin-top: 2em;
            margin-bottom: 0.75em;
            line-height: 1.3;
          }
          :global(.blog-content h1) { font-size: 2rem; }
          :global(.blog-content h2) { font-size: 1.5rem; padding-bottom: 0.4em; border-bottom: 1px solid; }
          :global(.blog-content h3) { font-size: 1.25rem; }
          :global(.blog-content h4) { font-size: 1.05rem; }

          .dark-theme :global(.blog-content h1),
          .dark-theme :global(.blog-content h2),
          .dark-theme :global(.blog-content h3),
          .dark-theme :global(.blog-content h4) { color: #f1f5f9; }
          .dark-theme :global(.blog-content h2) { border-color: rgba(255,255,255,.06); }

          .light-theme :global(.blog-content h1),
          .light-theme :global(.blog-content h2),
          .light-theme :global(.blog-content h3),
          .light-theme :global(.blog-content h4) { color: #0f172a; }
          .light-theme :global(.blog-content h2) { border-color: rgba(0,0,0,.06); }

          :global(.blog-content p) { margin-bottom: 1.25em; font-size: 16.5px; line-height: 1.85; }
          .dark-theme :global(.blog-content p) { color: #94a3b8; }
          .light-theme :global(.blog-content p) { color: #334155; }

          :global(.blog-content ul),
          :global(.blog-content ol) { padding-left: 1.5em; margin-bottom: 1.25em; }
          :global(.blog-content li) { margin-bottom: 0.5em; font-size: 16px; line-height: 1.75; }
          .dark-theme :global(.blog-content li) { color: #94a3b8; }
          .light-theme :global(.blog-content li) { color: #334155; }

          :global(.blog-content a) { text-decoration: underline; }
          .dark-theme :global(.blog-content a) { color: #818cf8; }
          .light-theme :global(.blog-content a) { color: #4f46e5; }

          :global(.blog-content code) {
            padding: 2px 6px;
            border-radius: 5px;
            font-size: 85%;
            font-family: 'Fira Code', monospace;
          }
          .dark-theme :global(.blog-content code) { background: rgba(255,255,255,.07); color: #e2e8f0; }
          .light-theme :global(.blog-content code) { background: rgba(0,0,0,.06); color: #1e293b; }

          :global(.blog-content blockquote) {
            border-left: 4px solid;
            padding: 12px 20px;
            margin: 24px 0;
            border-radius: 0 10px 10px 0;
            font-style: italic;
            font-size: 17px;
          }
          .dark-theme :global(.blog-content blockquote) { border-color: #6366f1; background: rgba(99,102,241,.08); color: #94a3b8; }
          .light-theme :global(.blog-content blockquote) { border-color: #6366f1; background: rgba(99,102,241,.05); color: #475569; }

          :global(.blog-content strong) { font-weight: 700; }
          .dark-theme :global(.blog-content strong) { color: #e2e8f0; }
          .light-theme :global(.blog-content strong) { color: #1e293b; }

          /* Tags section */
          .blog-tags-section { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-top: 40px; padding-top: 28px; border-top: 1px solid; }
          .dark-theme .blog-tags-section { border-color: rgba(255,255,255,.06); }
          .light-theme .blog-tags-section { border-color: rgba(0,0,0,.06); }
          .blog-tags-label { font-size: 13px; font-weight: 700; }
          .dark-theme .blog-tags-label { color: #64748b; }
          .light-theme .blog-tags-label { color: #94a3b8; }
          .blog-tags { display: flex; gap: 8px; flex-wrap: wrap; }
          .blog-tag {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 100px;
            font-size: 12px;
            font-weight: 600;
          }
          .dark-theme .blog-tag { background: rgba(255,255,255,.07); color: #94a3b8; border: 1px solid rgba(255,255,255,.1); }
          .light-theme .blog-tag { background: rgba(0,0,0,.05); color: #475569; border: 1px solid rgba(0,0,0,.08); }

          /* Author card */
          .blog-author-card {
            display: flex;
            align-items: center;
            gap: 18px;
            padding: 24px;
            border-radius: 16px;
            margin-top: 36px;
          }
          .dark-theme .blog-author-card { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07); }
          .light-theme .blog-author-card { background: #fff; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 2px 10px rgba(0,0,0,.05); }

          .blog-author-avatar-lg {
            width: 56px; height: 56px;
            border-radius: 50%;
            font-weight: 800;
            font-size: 20px;
            display: flex; align-items: center; justify-content: center;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            flex-shrink: 0;
          }
          .blog-author-name { font-size: 16px; font-weight: 700; margin-bottom: 6px; }
          .dark-theme .blog-author-name { color: #e2e8f0; }
          .light-theme .blog-author-name { color: #1e293b; }
          .blog-author-bio { font-size: 13.5px; line-height: 1.65; }
          .dark-theme .blog-author-bio { color: #64748b; }
          .light-theme .blog-author-bio { color: #64748b; }

          /* Nav */
          .blog-post-nav { margin-top: 36px; }
          .blog-back-btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 22px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s;
          }
          .dark-theme .blog-back-btn { background: rgba(255,255,255,.05); color: #94a3b8; border: 1px solid rgba(255,255,255,.08); }
          .dark-theme .blog-back-btn:hover { background: rgba(255,255,255,.09); color: #e2e8f0; }
          .light-theme .blog-back-btn { background: #f1f5f9; color: #475569; border: 1px solid rgba(0,0,0,.08); }
          .light-theme .blog-back-btn:hover { background: #e2e8f0; color: #1e293b; }

          /* ── SIDEBAR ── */
          .blog-sidebar-col {
            position: sticky;
            top: 90px;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .blog-sidebar-card {
            padding: 24px;
            border-radius: 16px;
          }
          .dark-theme .blog-sidebar-card { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07); }
          .light-theme .blog-sidebar-card { background: #fff; border: 1px solid rgba(0,0,0,.07); box-shadow: 0 2px 12px rgba(0,0,0,.05); }

          /* CTA card */
          .blog-sidebar-cta { text-align: center; }
          .dark-theme .blog-sidebar-cta { background: rgba(99,102,241,.07); border-color: rgba(99,102,241,.2); }
          .light-theme .blog-sidebar-cta { background: linear-gradient(135deg, #f0f4ff, #e8f0fe); border-color: rgba(99,102,241,.15); }

          .sidebar-cta-icon { font-size: 32px; margin-bottom: 12px; }
          .sidebar-cta-title { font-size: 16px; font-weight: 800; margin-bottom: 10px; }
          .dark-theme .sidebar-cta-title { color: #e2e8f0; }
          .light-theme .sidebar-cta-title { color: #0f172a; }
          .sidebar-cta-text { font-size: 13.5px; line-height: 1.65; margin-bottom: 18px; }
          .dark-theme .sidebar-cta-text { color: #64748b; }
          .light-theme .sidebar-cta-text { color: #475569; }
          .sidebar-cta-btn { width: 100%; justify-content: center; }

          .sidebar-section-title { font-size: 14px; font-weight: 800; margin-bottom: 16px; letter-spacing: 0.3px; }
          .dark-theme .sidebar-section-title { color: #e2e8f0; }
          .light-theme .sidebar-section-title { color: #1e293b; }

          /* Related */
          .sidebar-related-list { display: flex; flex-direction: column; gap: 12px; }
          .sidebar-related-item {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            text-decoration: none;
            padding: 10px;
            border-radius: 10px;
            transition: all 0.2s;
          }
          .dark-theme .sidebar-related-item:hover { background: rgba(255,255,255,.05); }
          .light-theme .sidebar-related-item:hover { background: #f1f5f9; }
          .sidebar-related-dot {
            width: 6px; height: 6px;
            border-radius: 50%;
            margin-top: 5px;
            flex-shrink: 0;
            background: #6366f1;
          }
          .sidebar-related-title { font-size: 13px; font-weight: 600; line-height: 1.5; margin-bottom: 3px; }
          .dark-theme .sidebar-related-title { color: #cbd5e1; }
          .light-theme .sidebar-related-title { color: #334155; }
          .sidebar-related-date { font-size: 11px; }
          .dark-theme .sidebar-related-date { color: #475569; }
          .light-theme .sidebar-related-date { color: #94a3b8; }

          /* Services */
          .sidebar-services { display: flex; flex-direction: column; gap: 4px; }
          .sidebar-service-link {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 10px;
            border-radius: 8px;
            text-decoration: none;
            font-size: 13.5px;
            font-weight: 500;
            transition: all 0.2s;
          }
          .dark-theme .sidebar-service-link { color: #94a3b8; }
          .dark-theme .sidebar-service-link:hover { color: #818cf8; background: rgba(99,102,241,.07); }
          .light-theme .sidebar-service-link { color: #475569; }
          .light-theme .sidebar-service-link:hover { color: #4f46e5; background: rgba(99,102,241,.05); }
        `}</style>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug) || null;
  const relatedPosts = posts.filter((p) => p.slug !== params.slug).slice(0, 4);
  return {
    props: {
      post,
      relatedPosts
    }
  };
}
