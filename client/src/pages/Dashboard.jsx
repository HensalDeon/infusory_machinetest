import { useState } from "react";
import { uploadModel } from "../api/models";
import SidebarContainer from "../components/SidebarContainer";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);

    await uploadModel(formData);
    setName("");
    setFile(null);
  };

  return (
    <div>
      <h1>Upload 3D Model</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Model Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="file"
          accept=".glb"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Dashboard;
