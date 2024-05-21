import { useState } from "react";
import { uploadModel } from "../api/models";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);

    try {
      await uploadModel(formData);
    } catch (error) {
      console.log(error);
    }
    setName("");
    setFile(null);
  };

  return (
    <section className="h-screen padding">
      <h1 className="sub-head-text">Upload 3D Model</h1>

      <form
        onSubmit={handleSubmit}
        className="glassmorphism rounded-2xl flex flex-col gap-4 max-w-4xl m-auto p-5 mt-20 overflow-hidden"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="modelname">Name of the model</label>
          <input
            type="text"
            placeholder="Model Name"
            name="modelname"
            className="rounded-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="file"
            accept=".glb"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-secondary px-6 text-white py-2 w-fit"
        >
          Upload
        </button>
      </form>
    </section>
  );
};

export default Dashboard;
