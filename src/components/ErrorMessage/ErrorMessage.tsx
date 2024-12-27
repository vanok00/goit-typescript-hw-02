import { useEffect } from "react";
import toast from "react-hot-toast";

const ErrorMessage: React.FC = () => {
  useEffect(() => {
    toast.error("Something went wrong!");
  }, []);

  return null;
};
export default ErrorMessage;
