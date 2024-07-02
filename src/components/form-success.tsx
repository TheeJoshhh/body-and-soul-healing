import { FaCheckCircle } from "react-icons/fa";

interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  else {
    return (
      <div className="bg-success/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-success">
        <FaCheckCircle className="size-4" />
        <p>{message}</p>
      </div>
    );
  }
};
