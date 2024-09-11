import React, { useEffect, useState } from "react";
import { filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl } from "./data";
import { toast } from "react-toastify";


const App = () => {

  const [course, setCourse] = useState(null);
  
  useEffect(()=>{
     const fetchData = async ()=>{
       try {
        console.log("api entry");
         const res = await fetch(apiUrl);
         if (!res.ok) {
           throw new Error("Something went wrong");
         }
        const output = await res.json();
        setCourse(output.data);
        console.log(output);
      }
       catch (error) {
         console.error(error);
        toast.error("Something went wrong");
      }
     }
     fetchData();
  }, []);

  return (
    <div>
      <Navbar/>
      <Filter filterData={filterData}></Filter>
      <Cards course={course}/>
    </div>
  );
};

export default App;
