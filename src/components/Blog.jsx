

const Blog = ({title, img, para, link}) => {
  return (
    <div className="flex items-center p-10">
        <img src={img} alt="" className="w-[30rem]" />
        <div className="p-5">
            <h1 className="my-3 text-bold font-poppins text-4xl">{title}</h1>
            <p className=" font-poppins text-lg" >{para} </p>
            <a href={link}>
            <button className="btn">Check out</button>
            </a>
            
        </div>
    </div>
  )
}

export default Blog