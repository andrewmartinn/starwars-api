import Footer from "../components/Footer";
import Header from "../components/Header";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="bg-dark text-white min-h-screen font-kanit relative">
      <Header />
      <main className="container px-6 mx-auto py-10 ">{children}</main>
      <Footer />
    </div>
  );
};
export default RootLayout;
