import { useEffect } from "react";

export default function Toast({ message, type = "info", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const backgroundColors = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
    warning: "bg-yellow-500 text-black",
  };

  return (
    <div
      className={`fixed bottom-8 right-8 text-white px-6 py-3 rounded-md shadow-lg z-50 animate-fadeInOut ${backgroundColors[type]}`}
    >
      {message}
    </div>
  );
}
