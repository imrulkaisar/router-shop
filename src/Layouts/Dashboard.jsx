import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen">
        <div className="container mx-auto py-16 mt-16 text-white">
          <h1 className="text-4xl text-center font-bold">Your dashboard</h1>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
