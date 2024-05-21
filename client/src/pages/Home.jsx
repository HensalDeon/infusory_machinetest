import { getModels } from "../api/models";
import { useQuery } from "react-query";
import ModelViewer from "../components/ModelViewer";
import toast from "react-hot-toast";
const Home = () => {
    const { data: models = [], error, isLoading } = useQuery("models", getModels);
    if (isLoading) return <h1 className="sub-head-text animate-pulse">Loading...</h1>;
    if (error) toast.error(`${error.message}}`);
    return (
        <section className="bg-primary padding">
            <h1 className="head-text">3D Models</h1>
            {models.length === 0 ? (
                <div className="text-center font-semibold text-3xl animate-pulse mt-32">
                    Nothing to show here. Please go to dashboard and add some models...!
                </div>
            ) : (
                models.map((model) => (
                    <div
                        key={model._id}
                        className="flex flex-col justify-center items-center m-auto glassmorphism lg:h-screen h-[50vh] rounded-2xl md:py-8 my-6 lg:w-3/4"
                    >
                        <h2 className="md:text-3xl font-black text-black">{model.name.toUpperCase()}</h2>
                        <ModelViewer url={`http://localhost:5050/${model.fileUrl}`} />
                    </div>
                ))
            )}
        </section>
    );
};

export default Home;
