import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

function CategoriesHeader ({categories}){
    const location = useLocation();
    const navigate = useNavigate();

    // Search

    const [term, setTerm] = useState('');
    const handleChange = (e) => {
        setTerm(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => navigate(`/s/${term}`), 0.2);
        setTerm('');
    }
    
    return (
        <div className="w-full bg-gray-100 py-4 px-20">
            <div className="grid grid-cols-12">
              <div className="col-span-10">
                
                <div className="space-x-8 px-4">
                   <div className="relative">
                       <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                        <ul role="list" className="mx-4 inline-flex space-x-6 sm:mx-6">
                                  <Link to='/blog'
                                    className={`${location.pathname === '/blog' ? "text-orange-500 bg-white":"text-gray-900 hover:text-orange-500 border border-gray-100 hover:border-gray-200"} py-2 px-6 rounded-md text-base font-medium`}>
                                      All
                                  </Link>
                                  {
                                    categories&&categories.map((category, index)=>(
                                        <Link key={index} to={`/category/${category.slug}`} 
                                        className={`${location.pathname === `/category/${category.slug}` ? "text-orange-500 bg-white":"text-gray-900 border border-gray-100 hover:border-gray-200"} py-2 px-6 rounded-md text-base font-medium`}>
                                            {category.name}
                                        </Link>
                                    ))
                                  }
                        </ul>

                       </div>
                   </div>
                </div>

              </div>
              <form onSubmit={(e) => onSubmit(e)} className="relative col-span-2 mr-10">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center h-9 pl-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                </div>
                <input
                    id="search"
                    name="search"
                    value={term}
                    onChange={(e)=>handleChange(e)}
                    type="search"
                    className={`
                        py-1.5 pl-10 pr-3
                        block w-full rounded-md
                        border border-gray-200
                        focus:border-gray-200 focus:ring-gray-200

                    `}
                />
             </form>
            </div>
        </div>
    )
}

export default CategoriesHeader;