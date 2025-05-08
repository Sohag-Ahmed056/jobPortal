import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
      <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold">MatchMyJob</h2>
        <p className="text-sm text-gray-400 mt-1">
          Connecting Talent with Opportunity – AI-powered Job Matching Platform
        </p>
      </div>

      <div className="text-center mt-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} MatchMyJob. All rights reserved.
      </div>
    </footer>
      </div>
    </div>
  );
};

export default AppLayout;
