import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 text-center w-full mb-2">
      <p className="text-center">
        Powered by{" "}
        <Link to="https://swapi.dev/" className="text-decoration-line">
          SWAPI API
        </Link>
      </p>
    </div>
  );
};
export default Footer;
