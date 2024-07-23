import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon } from "@heroicons/react/20/solid"
import BlogCardHorizontal from "../BlogCardHorizontal"
import SmallSetPaginationSearch from "components/pagination/SmallSetPaginationSearch"
import BlogCardSearch from "../BlogCardSearch"


function BlogList ({posts, get_blog_list_page, count, term}) {
    return (
        <div className="overflow-hidden px-8 bg-white">
        <ul role="list" className="divide-y space-y-8 gap-8  divide-gray-100">
        {posts && posts.length > 0 ? (
            posts.map((post, index) => (
                <BlogCardSearch key={index} data={post} index={index} />
            ))
            ) : (
            <p>No posts available</p>
            )}
        </ul>
        <SmallSetPaginationSearch list_page={get_blog_list_page} term={term} list={posts} count={count} />
      </div>
        
    )
}

export default BlogList