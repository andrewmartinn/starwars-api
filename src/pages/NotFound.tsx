import RootLayout from "../layout/RootLayout";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <RootLayout>
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <p className="text-6xl mb-[4rem]">Page not Found 404 !</p>
          <Link to="/" className="bg-zinc-700 p-3 rounded-md">
            Back to Home
          </Link>
        </div>
      </div>
    </RootLayout>
  );
};
export default NotFound;
