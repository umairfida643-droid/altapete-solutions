import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import posts from '@/data/blogs.json';

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
      <div className="cover-home1">
        <div className="container">
          <div className="row">
            <div className="col-xl-1"></div>
            <div className="col-xl-10 col-lg-12">
              {/* Breadcrumb */}
              <div className="pt-40 mb-20">
                <Link href="/" className="color-gray-500">Home</Link>
                <span className="color-gray-600 mx-2">/</span>
                <Link href="/blog" className="color-gray-500">Blog</Link>
                <span className="color-gray-600 mx-2">/</span>
                <span className="color-gray-300">{post.title}</span>
              </div>

              {/* Title & Excerpt */}
              <div className="mb-40">
                <h1 className="color-white font-heading mb-25" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: '1.25' }}>
                  {post.title}
                </h1>
                <p className="color-gray-400 text-lg mb-30" style={{ maxWidth: '800px', lineHeight: '1.7' }}>
                  {post.excerpt}
                </p>

                {/* Hero Image */}
                <div className="position-relative mb-40" style={{ borderRadius: '16px', overflow: 'hidden', maxHeight: '480px' }}>
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Main Content */}
              <div className="row">
                <div className="col-lg-8">
                  <div
                    className="blog-content color-gray-300"
                    style={{ fontSize: '17px', lineHeight: '1.8' }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>

                {/* Sidebar */}
                <div className="col-lg-4 mt-5 mt-lg-0">
                  <div className="sidebar bg-gray-850 p-30 border-gray-800" style={{ borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <h4 className="color-white mb-20">Related Articles</h4>
                    <div className="list-related-posts">
                      {relatedPosts.map((rPost, idx) => (
                        <div className="mb-20 pb-15 border-bottom border-gray-800" key={idx}>
                          <Link href={`/blog/${rPost.slug}`} className="color-white hover-linear font-sm" style={{ fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                            {rPost.title}
                          </Link>
                          <span className="color-gray-500 text-xs">Read guide →</span>
                        </div>
                      ))}
                    </div>

                    <div className="box-cta-sidebar mt-40 p-25 bg-gray-900 text-center" style={{ borderRadius: '12px' }}>
                      <h5 className="color-white mb-10">Need ERP or Advisory Help?</h5>
                      <p className="color-gray-500 text-sm mb-20">Speak with our certified consultants today.</p>
                      <Link href="/contact-us" className="btn btn-linear btn-sm">
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-60 mb-60 text-center">
                <Link href="/blog" className="btn btn-linear hover-up">
                  ← Back to All Articles
                </Link>
              </div>
            </div>
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
