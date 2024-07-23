
import { Link } from "react-router-dom"
import moment from "moment"

function BlogCardSearch ({data,index}) {
    
    return (
        <li >
              <Link to={`/blog/${data.slug}`} className="block">
                <div className="flex items-center my-8">
                  <div className="lg:flex min-w-0 lg:flex-1 items-center">
                   
                    <div className="min-w-0 flex-1 p-8 py-6 mt-4 mb-8 lg:mb-0 lg:mt-0 ">
                     {/* contenido del post  */}
                     <p id={`title`+data.id} className="text-2xl pb-2 font-bold text-gray-900 hover:text-orange-600 transition duration-300 ease-in-out">{data.title.length > 131 ? data.title.slice(0,130):data.title }</p>

                     <div className=""> 
                        <span className="hover:text-orange-600 transition duration-300 ease-in-out font-medium text-gray-500 text-sm "> <Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> &middot;
                        <span className="  font-medium text-gray-500 text-sm mx-2">{moment(data.published).format('LL')}</span> &middot;
                        <span className="  font-medium text-gray-500 text-sm mx-2">{`${data.time_read} min read`}</span>
                        <p className="text-base mt-4 text-gray-600 leading-6 ">{data.description}</p>
                     </div>

                    </div>
                  </div>
                 
                </div>
              </Link>
            </li>
    )
}

export default BlogCardSearch