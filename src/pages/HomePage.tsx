import { FolderKanban, Cpu, Timer } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      <header className="pb-6">Dashboard</header>
      <div className="flex flex-col items-start gap-10 sm:flex-row sm:items-center">
        <div className="flex flex-col px-5 py-3 border rounded-lg border-border2 sm:min-w-[250px] shadow-sm w-full">
          <div className="flex items-center justify-between mb-3">
            <p>Projet of me</p>
            <FolderKanban />
          </div>
          <span className="text-[40px]">9</span>
        </div>
        <div className="flex flex-col px-5 py-3 border rounded-lg border-border2 min-w-[250px] shadow-sm w-full">
          <div className="flex items-center justify-between mb-3">
            <p>Skills of me</p>
            <Cpu />
          </div>
          <span className="text-[40px]">9</span>
        </div>
        <div className="flex flex-col px-5 py-3 border rounded-lg border-border2 min-w-[250px] shadow-sm w-full">
          <div className="flex items-center justify-between mb-3">
            <p>Timeline of me</p>
            <Timer />
          </div>
          <span className="text-[40px]">9</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
