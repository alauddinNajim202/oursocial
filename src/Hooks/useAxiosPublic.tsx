import axios from "axios";

export const axiosPublic = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://jaredmitchell.thewarriors.team/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
