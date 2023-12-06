import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.60.86:8000/margaret/enduser/all?c=224f8948-8b50-4c5e-b41b-d7e14f7636fa&t=2"
      );
      if (response.status === 200) {
        setData(response.data.body[0]);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data, loading, error }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
