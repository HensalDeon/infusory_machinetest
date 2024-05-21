import { useEffect, useState } from "react";
import { getModels } from "../api/models";
import ModelViewer from "../components/ModelViewer";

const Home = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      const data = await getModels();
      setModels(data);
      console.log(data);
    };
    try {
      fetchModels();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className="bg-primary padding">
      <h1 className="head-text">3D Models</h1>
      {models?.map((model) => (
        <div
          key={model._id}
          className="flex flex-col justify-center items-center m-auto glassmorphism lg:h-screen h-[50vh] rounded-2xl md:py-8 my-6 lg:w-3/4"
        >
          <h2 className="md:text-3xl font-black text-black">{model.name.toUpperCase()}</h2>
          <ModelViewer url={`http://localhost:5050/${model.fileUrl}`} />
        </div>
      ))}
    </section>
  );
};

export default Home;
