import Footer from "../components/Footer";
import Header from "../components/Header";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="bg-dark text-white min-h-screen font-kanit">
      <Header />
      <main className="container mx-auto py-10 ">{children}</main>
      <Footer />
    </div>
  );
};
export default RootLayout;
