import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import posts from '@/data/blogs.json';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function BlogPost({ post, relatedPosts }) {
  if (!post) {
    return (
      <Layout title="Post Not Found | Altapete">
        <div className="container text-center py-5">
          <h1 className="color-white">Article Not Found</h1>
          <Link href="/blog" className="btn btn-linear mt-4">Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${post.title} | Altapete`}
      description={post.excerpt}
    >
      <div className="cover-home1" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 20px' }}>
          
          {/* Breadcrumb */}
          <div className="mb-25">
            <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13.5px' }}>Home</Link>
            <span style={{ color: 'var(--text-muted)', margin: '0 8px', fontSize: '13.5px' }}>/</span>
            <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '13.5px' }}>Blog</Link>
            <span style={{ color: 'var(--text-muted)', margin: '0 8px', fontSize: '13.5px' }}>/</span>
            <span style={{ color: 'var(--brand-accent)', fontSize: '13.5px', fontWeight: 600 }}>{post.title}</span>
          </div>

          {/* Title & Excerpt */}
          <div className="mb-40">
            <h1 className="font-heading mb-20 blog-index-title" style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', lineHeight: '1.25' }}>
              {post.title}
            </h1>
            <p className="blog-post-excerpt mb-30" style={{ maxWidth: '850px', fontSize: '17px', lineHeight: '1.75' }}>
              {post.excerpt}
            </p>

            {/* Hero Image */}
            <div className="position-relative mb-45" style={{ borderRadius: '20px', overflow: 'hidden', maxHeight: '500px', boxShadow: 'var(--card-shadow)' }}>
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Main Content & Sidebar Grid */}
          <div className="row g-5">
            <div className="col-lg-8">
              <div
                className="blog-content"
                style={{ fontSize: '16.5px', lineHeight: '1.85' }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="blog-sidebar p-30">
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>Related Articles</h4>
                <div className="list-related-posts">
                  {relatedPosts.map((rPost, idx) => (
                    <div className="mb-20 pb-15 border-bottom" style={{ borderColor: 'var(--border-color)' }} key={idx}>
                      <Link 
                        href={`/blog/${rPost.slug}`} 
                        className="blog-post-link" 
                        style={{ fontWeight: 600, display: 'block', marginBottom: '6px', fontSize: '14px', lineHeight: '1.5' }}
                      >
                        {rPost.title}
                      </Link>
                      <Link href={`/blog/${rPost.slug}`} style={{ color: 'var(--brand-accent)', fontSize: '12px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        Read guide <ArrowRight size={12} />
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="blog-sidebar-cta mt-35 p-25 text-center">
                  <h5 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '10px' }}>Need ERP or Advisory Help?</h5>
                  <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.6', marginBottom: '20px' }}>Speak with our certified consultants today.</p>
                  <Link href="/contact-us" className="btn btn-linear btn-sm" style={{ padding: '10px 22px', fontSize: '13px' }}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-60 mb-30 text-center">
            <Link href="/blog" className="btn btn-linear hover-up" style={{ padding: '12px 28px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={16} /> Back to All Articles
            </Link>
          </div>

        </div>
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
