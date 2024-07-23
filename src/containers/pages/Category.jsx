import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Footer from "../../components/navigation/Footer";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { get_categories } from "redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list_category, get_blog_list_category_page } from "redux/actions/blog/blog";
import CategoriesHeader from "components/Blog/CategoriesHeader";
import { useParams } from "react-router-dom";
import BlogList from "components/Blog/BlogList";

function Category ({ 
  get_categories,
  categories,
  get_blog_list_category,
  get_blog_list_category_page,
  posts,
  count,
  next,
  previous
}) {
   
  const params = useParams()
  const slug = params.slug

  useEffect(() => {
    window.scrollTo(0, 0)
    get_categories()
    get_blog_list_category(slug)
    
  } , [])
  return (
    <Layout>
      <Helmet>
        <title>Category: {slug} Boomslag</title>
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
        <CategoriesHeader categories={categories&&categories}/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
          <div className="mx-auto max-w-6xl">
            <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_category_page} count={count&&count} />
          </div>
        </div>

      </div>
      <Footer />
    </Layout>
  );
}
const mapStateToProps = state => ({
  categories: state.categories.categories,
  posts: state.blog.blog_list_category,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous

})
export default connect(mapStateToProps, {
   get_categories,
   get_blog_list_category,
   get_blog_list_category_page
  }) (Category) 