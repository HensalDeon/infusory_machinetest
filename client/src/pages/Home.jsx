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
        fetchModels();
    }, []);

    return (
        <div>
            <h1>3D Models</h1>
            {models.map((model) => (
                <div key={model._id} className="flex flex-col h-[50vh]">
                    <h2>{model.name}</h2>
                    <ModelViewer url={`http://localhost:5050/${model.fileUrl}`} />
                </div>
            ))}
        </div>
    );
};

export default Home;
