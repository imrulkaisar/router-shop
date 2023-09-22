import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const PageTemplate = () => {
  return (
    <>
      <Header />
      <main className="bg-slate-100 dark:bg-black min-h-screen px-5 md:px-0">
        <div className="container mx-auto py-8 md:py-16 mt-16 text-slate-400">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PageTemplate;
