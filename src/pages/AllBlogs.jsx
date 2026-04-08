import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import blogBg from "../assets/blog-bg.png";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <section className="relative h-52 w-full sm:h-64 md:h-80 lg:h-[420px]">
        <img src={blogBg} alt="Blog Hero" className="h-full w-full object-cover" />
        <div className="absolute inset-0 " />

        <div className="absolute inset-0 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 md:px-8">
         
        </div>
      </section>

      <section className="bg-[#FCFBF7] px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto w-full max-w-7xl">
          {loading ? (
            <p className="text-center text-sm text-gray-600 sm:text-base">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-center text-sm text-gray-600 sm:text-base">No blogs available right now.</p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48 md:h-52"
                  />

                  <div className="flex flex-1 flex-col justify-between bg-white p-4 transition-all duration-300 group-hover:bg-[#25c84c] sm:p-5">
                    <h3 className="mb-4 text-base leading-relaxed text-gray-800 transition-colors duration-300 group-hover:text-white sm:text-lg">
                      {blog.title}
                    </h3>

                    <Link
                      to={`/blog/${blog._id}`}
                      className="mt-auto text-sm font-medium text-black transition-colors duration-300 group-hover:text-white"
                    >
                      Read More 
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AllBlogs;
