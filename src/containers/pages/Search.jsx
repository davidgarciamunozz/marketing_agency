import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page, search_blog, search_blog_page } from "redux/actions/blog/blog";
import CategoriesHeader from "components/Blog/CategoriesHeader";
import { useParams } from "react-router-dom";
import BlogCardSearch from "components/Blog/BlogCardSearch";
import BlogList from "components/Blog/search/BlogList";

function Search ({ 
  
  posts,
  count,
  next,
  previous,
  search_blog,
  search_blog_page
}) {
   
  const params = useParams()
    const term = params.term

  useEffect(() => {
    window.scrollTo(0, 0)
    search_blog(term)
    
  } , [])
  return (
    <Layout>
      <Helmet>
        <title>Blog Boomslag</title>
        <meta name="description" content="Boomslag is a creative agency that specializes in branding, web design, and marketing." />
        <meta name="keywords" content="marketing, branding, web design, creative agency" />
        <meta name="author" content="Boomslag" />
        <meta name="publisher" content="Boomslag" /> 
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://boomslag.com" />

        {/* Social Media Tags */}
        <meta property="og:title" content="Boomslag | Marketing Agency" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boomslag.com" />
        <meta property="og:image" content="https://boomslag.com/images/boomslag-logo.png" />
        <meta property="og:description" content="Boomslag is a creative agency that specializes in branding, web design, and marketing." />
        <meta property="og:site_name" content="Boomslag" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@boomslag" />
        <meta name="twitter:title" content="Boomslag | Marketing Agency" />
        <meta name="twitter:description" content="Boomslag is a creative agency that specializes in branding, web design, and marketing." />
        <meta name="twitter:image" content="https://boomslag.com/images/boomslag-logo.png" />
       </Helmet>
      <Navbar />
      <div className="pt-20">
       
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="mx-auto max-w-full">
            <BlogList posts={posts&&posts} get_blog_list_page={search_blog_page} term={term} count={count&&count} />
          </div>
        </div>

      </div>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = state => ({
  posts: state.blog.filtered_posts,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous

})
export default connect(mapStateToProps, {
  search_blog,
  search_blog_page
  }) (Search) 