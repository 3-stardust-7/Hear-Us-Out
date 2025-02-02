import React from "react";
import Sidebar from "../components/sidebar";
import Cards from "../components/cards";
import Profile from "../components/profile";

// import purple from "../assets/purple.png";
// const User = () => {
//   return (
//     <div
//       className="min-h-screen overflow-x-hidden bg-cover bg-fixed bg-center"
//       style={{
//         backgroundImage: `url(${purple})`,
//         backgroundColor: "rgba(255, 255, 255, 0.5)",
//         backgroundBlendMode: "overlay",
//       }}
//     >
//       <Sidebar />
//       <div className="fixed top-4 right-4 z-50 bg-white p-4 rounded-lg shadow-lg">
//         <Profile />
//       </div>

//       <div className="w-1/2 mx-auto">
//         <Cards />
//       </div>
//     </div>
//   );
// };

// export default User;

// import { useState, useEffect } from "react";
// import supabase from "../supa-client"; // Assuming supabaseClient is set up

// const NGO = () => {
//   const [complaints, setComplaints] = useState([]);

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       const { data, error } = await supabase
//         .from("complaints")
//         .select("*")
//         .eq("verified", false); // Fetch unverified complaints

//       if (error) {
//         console.log(error);
//       } else {
//         setComplaints(data);
//       }
//     };
//     fetchComplaints();
//   }, []);

//   const handleVerify = async (SLno) => {
//     const { data, error } = await supabase
//       .from("complaints")
//       .update({ verified: true })
//       .eq("SLno", SLno);

//     if (error) {
//       console.log(error);
//     } else {
//       setComplaints(
//         complaints.map((complaint) =>
//           complaint.SLno === SLno ? { ...complaint, verified: true } : complaint
//         )
//       );
//     }
//   };

//   return (
//     <div>
//       {complaints.map((complaint) => (
//         <div key={complaint.SLno} className="card">
//           <h2>{complaint.name}</h2>
//           <p>{complaint.description}</p>
//           <button onClick={() => handleVerify(complaint.SLno)}>Verify</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NGO;
