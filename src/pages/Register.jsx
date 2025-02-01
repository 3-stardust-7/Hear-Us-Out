import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [issue, setIssue] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true); // Simulate uploading process

    const formData = new FormData();
    formData.append("name", name);
    formData.append("issue", issue);
    formData.append("description", description);
    if (image) formData.append("image", image);

    console.log("Form Submitted:", { name, issue, description, image });

    // Simulate upload delay
    setTimeout(() => {
      setUploading(false);
      alert("Complaint Submitted Successfully!");
    }, 2000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg space-y-4 mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Register a Complaint
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          id="name"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          id="issue"
          placeholder="Issue Name"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          id="description"
          placeholder="Describe your issue"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          required
        ></textarea>

        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="button"
          onClick={triggerFileInput}
          className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          {image ? image.name : "Upload Image"}
        </button>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Submit Complaint"}
        </button>
      </form>
    </div>
  );
};

export default Register;
