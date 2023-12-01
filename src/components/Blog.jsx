

const Blog = ({title, img, para, link}) => {
  return (
    <div className="lg:flex items-start md:p-10 mb-10">
        <img src={img} alt="" className="lg:w-[30rem] rounded-2xl " />
        <div className="md:px-10">
            <h1 className="mb-3 text-bold font-poppins md:text-4xl text-2xl pt-5">{title}</h1>
            <p className=" font-poppins md:text-md text-base py-5" >{para} </p>
            <a href={link}>
            <button className="btn bg-blue-500 text-white px-10">Check out </button>
            </a>
            
        </div>
    </div>
  )
}

export default Blog