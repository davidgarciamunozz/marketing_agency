import { Link } from "react-router-dom";



function CaseCard ({data, index}) {
    return (
        <Link
        to={`/cases/${data.id}`}
        onMouseEnter={()=>{
            const title = document.getElementById(index);
            title.classList.add('text-orange-button');
        
        }} 
        onMouseLeave={()=>{
            const title = document.getElementById(index);
            title.classList.remove('text-orange-button');
           
        }}    
        className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0 ">
          <img id={data.id} className="h-80 w-full object-cover" src={data.imageUrl} alt="" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-lg font-medium text-gray-800">
              <a href={data.category.href} className="hover:underline">
                {data.category.name}
              </a>
            </p>
            <a href={data.href} className="mt-2 block">
              <p id={index} className="pt-2 pb-4 transition duration-500 ease-in-out text-4xl font-semibold text-gray-900">{data.title}</p>
              <p className="mt-3 text-lg   text-gray-500">{data.description}</p>
            </a>
          </div>
        </div>
      </Link>
    )
}

export default CaseCard;