import React, { useEffect, useState } from "react";
import { filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl } from "./data";
import { toast } from "react-toastify";

const App = () => {
  // Initialize course state as an empty array
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null); // Added error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data from API...");
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error("Something went wrong with the network request.");
        }
        const output = await res.json();
        console.log("API Response:", output);
        setCourse(output.data || []); // Ensure data is an empty array if undefined
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Something went wrong");
        setError(error.message); // Set error state
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  // Conditional rendering based on loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} />
        </div>
        <div
          className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap
       justify-center items-center min-h-[50vh]"
        >
          <Cards course={course} />
        </div>
      </div>
    </div>
  );
};

export default App;
