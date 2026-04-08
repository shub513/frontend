import { Link } from "react-router-dom";


import { useEffect, useState } from "react";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-[#FCFBF7] px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-8 text-2xl font-extrabold font-boska sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl">
          Blogs
        </h2>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog._id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-lg active:shadow-lg"
            >
           



                <img
  src={blog.image}
  alt={blog.title}
  className="h-40 w-full object-cover sm:h-48 md:h-56"
/>

{/* Content */}
<div
  className="flex min-h-[90px] flex-1 flex-col justify-between bg-white p-4 transition-all duration-500 group-hover:bg-[#25c84c] group-active:bg-[#25c84c] sm:p-5"
>
  <h3
    className="text-sm leading-relaxed text-[#8D8F92] transition-colors duration-500 group-hover:text-black group-active:text-black sm:text-base"
  >
    {blog.title}
  </h3>


                <div className="mt-2 flex justify-end">
                  <Link
                    to={`/blog/${blog._id}`}
                    className={`flex items-center gap-2 text-xs font-medium transition-colors duration-500 sm:text-sm
    ${index === 0 ? "text-black" : "text-gray-700 group-hover:text-black group-active:text-black"}`}
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          

          <Link to="/blogs">
  <button className="rounded-full bg-[#EBE4C6] px-5 py-2 text-xs font-medium text-black transition hover:bg-green-500 active:bg-green-500 sm:px-6 sm:py-3 sm:text-sm md:px-8 md:text-base">
    View all
  </button>
</Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
