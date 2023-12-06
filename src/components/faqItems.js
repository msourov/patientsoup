// import { useContext, useEffect } from "react";
// import { AppContext } from "../context";

// export const faqdata = () => {
//   const { data, loading, error } = useContext(AppContext);
//   const [faqdata, setFaqdata] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const aboutData = await faqdata();
//       setFaqdata(aboutData);
//     };

//     if (!loading) {
//       fetchData();
//     }
//   }, [loading]);

//   if (loading) {
//     return <div style={{ textAlign: "center" }}>Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div style={{ textAlign: "center", fontSize: "1rem" }}>
//         Error loading data
//       </div>
//     );
//   }
//   return data?.about ?? [];
// };
