import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-[400px] h-[250px] rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <p className="text-lg leading-relaxed">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;