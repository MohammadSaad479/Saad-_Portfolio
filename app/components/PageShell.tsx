import Navbar from "./Navbar";
import Footer from "./Footer";

const PageShell = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-paper">
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-8">
      <Navbar />
      <main className="flex flex-col gap-12 pb-12 sm:gap-16">{children}</main>
      <Footer />
    </div>
  </div>
);

export default PageShell;
