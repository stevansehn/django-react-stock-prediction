import { useEffect } from "react";
import type { ReactElement } from "react";

import axios from "axios";

import axiosInstance from "../../axiosInstance";

const Dashboard = (): ReactElement => {
  useEffect(() => {
    const fetchProtectedData = async (): Promise<void> => {
      try {
        const response = await axiosInstance.get("/protected-view/");
        console.log("Request successful!", response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          console.error("Axios error:", err.response?.data || err.message);
        } else {
          console.error("Unexpected error:", err);
        }
      } finally {
      }
    };
    fetchProtectedData();
  }, []);

  return <div className="text-light container">Dashboard</div>;
};

export default Dashboard;
