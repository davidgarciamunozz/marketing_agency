
function ServiceCard ({data, index}){
    return (
        <a href={data.href}>
        <div
        onMouseEnter={()=>{
            const title = document.getElementById(index);
            title.classList.remove('text-gray-900');
            title.classList.add('text-orange-button');
        
        }} 
        onMouseLeave={()=>{
            const title = document.getElementById(index);
            title.classList.add('text-gray-900');
            title.classList.remove('text-orange-button');
           
        }}   
        className="w-full relative p-10 h-120 lg:h-120 bg-white hover:-translate-y-2 transition duration-300 ease-in-out">
            <div className="w-full">
                 <img src={data.img} alt="img" className=" w-16 h-16" />
                 <h2 className="text-2xl w-52 font-semibold text-gray-900 pt-6">{data.title}</h2>
                 <p className="text-gray-500 pt-4 pb-6">{data.description}</p>
                 <div className=" absolute bottom-0 left-0 pl-10 pb-14">
                 <h2 id={index} className=" items-end text-xl w-52 font-semibold text-gray-900 pt-6 transition duration-300 ease-in-out">LEARN MORE</h2>
                 </div>
            </div>
        </div>
        </a>
    )
}

export default ServiceCard;