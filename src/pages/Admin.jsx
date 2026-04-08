

import { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    image: null,
  });

  const [preview, setPreview] = useState(null); // 🔥 NEW

  // 🔥 Handle file + preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });

    if (file) {
      setPreview(URL.createObjectURL(file)); // preview URL
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("content", form.content);
    data.append("image", form.image);

    try {
      await axios.post("http://localhost:5000/api/blogs", data);
      alert("Blog added!");

      // reset
      setForm({ title: "", content: "", image: null });
      setPreview(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Add Blog</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          className="border p-2"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        {/* Content */}
        <textarea
          placeholder="Content"
          className="border p-2"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />

        {/* File Input */}
        <input type="file" onChange={handleImageChange} />

        {/* 🔥 IMAGE PREVIEW */}
        {preview && (
          <div className="mt-2">
            <p className="text-sm mb-2">Preview:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-70 h-48 object-cover rounded-lg border"
            />
          </div>
        )}

        {/* Button */}
        <button className="bg-green-500 text-white py-2 rounded">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Admin;