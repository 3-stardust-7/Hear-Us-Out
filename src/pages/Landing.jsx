// import React from "react";
// //import { useNavigate } from 'react-router-dom';
// // import {envelope} from './src/assets/envelope-paper.svg'
// import { useNavigate } from "react-router-dom";

// const Landing = () => {
//   const navigate = useNavigate(); // Initialize navigate function

//   const handleClick = () => {
//     try {
//       navigate("/login"); // Redirect to login page
//     } catch (error) {
//       console.error("Navigation error:", error);
//     }
//   };
//   return (
//     <>
//       <nav className="navbar bg-white">
//         <div className="container">
//           <a className="navbar-brand" href="###">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5bu33Z6wMz8hTxkcbPhYZQ4eFnuObJfrOA&s"
//               alt="Bootstrap"
//               width="104"
//               height="80"
//             />
//           </a>
//         </div>
//       </nav>

//       <div className="px-4 pt-2 my-5 text-center border-bottom container">
//         <h1 className="display-2 fw-bold text-body-emphasis">HearUsOut</h1>
//         <div className="col-lg-6 mx-auto">
//           <p className="lead mb-4 fs-4">
//             Whether it’s a broken road, power outage, or unresolved complaint,
//             we make reporting problems easy and ensure they reach the right
//             authorities. Track updates in real time, support community issues,
//             and be part of the solution—because every problem deserves action.
//           </p>
//           <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
//             <button
//               onClick={handleClick}
//               type="button"
//               className="btn btn-primary btn-lg px-4 me-sm-3 mb-5 bg-black"
//             >
//               Get Started!
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         className="container d-flex justify-content-center align-items-center"
//         style={{ minHeight: "50vh" }}
//       >
//         <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 justify-content-center">
//           <div className="feature col text-center">
//             <div
//               className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-black fs-2 mb-3"
//               style={{ width: "4rem", height: "4rem", borderRadius: "0.75rem" }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="25"
//                 height="25"
//                 fill="currentColor"
//                 className="bi bi-envelope-paper"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z" />
//               </svg>
//             </div>
//             <h3 className="fs-2 text-body-emphasis">Quick Reporting</h3>
//             <p>
//               Submit your civic issues with ease and stay updated on their
//               resolution status, all in one place
//             </p>
//           </div>

//           <div className="feature col text-center">
//             <div
//               className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-black fs-2 mb-3"
//               style={{ width: "4rem", height: "4rem", borderRadius: "0.75rem" }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="25"
//                 height="25"
//                 fill="currentColor"
//                 className="bi bi-envelope-paper"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z" />
//               </svg>
//             </div>
//             <h3 className="fs-2 text-body-emphasis">Verified Action</h3>
//             <p>
//               Complaints are verified by trusted NGOs, ensuring only legitimate
//               issues are addressed with full transparency
//             </p>
//           </div>

//           <div className="feature col text-center">
//             <div
//               className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-black fs-2 mb-3"
//               style={{ width: "4rem", height: "4rem", borderRadius: "0.75rem" }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="25"
//                 height="25"
//                 fill="currentColor"
//                 className="bi bi-envelope-paper"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z" />
//               </svg>
//             </div>
//             <h3 className="fs-2 text-body-emphasis">Instant Updates</h3>
//             <p>
//               Track the progress of your complaint in real-time, with timely
//               notifications on government actions and resolutions
//             </p>
//           </div>
//         </div>
//       </div>

//       <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
//         <div className="col-md-4 d-flex align-items-center">
//           <a
//             href="/"
//             className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
//           >
//             <svg className="bi" width="30" height="24">
//               <use xlinkHref="#bootstrap" />
//             </svg>
//           </a>
//           <p className="mb-3 mb-md-0 text-body-secondary">
//             {" "}
//             &copy; {new Date().getFullYear()} HearUsOut. All rights reserved.
//           </p>
//         </div>

//         <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
//           <li className="ms-3">
//             <a className="text-body-secondary" href="#">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 fill="currentColor"
//                 className="bi bi-twitter"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
//               </svg>
//             </a>
//           </li>
//           <li className="ms-3">
//             <a className="text-body-secondary" href="#">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 fill="currentColor"
//                 className="bi bi-instagram"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
//               </svg>
//             </a>
//           </li>
//           <li className="ms-3">
//             <a className="text-body-secondary" href="#">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="26"
//                 height="26"
//                 fill="currentColor"
//                 className="bi bi-facebook"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
//               </svg>
//             </a>
//           </li>
//         </ul>
//       </footer>
//     </>
//   );
// };

// export default Landing;

import React from "react";
//import { useNavigate } from 'react-router-dom';
// import {envelope} from './src/assets/envelope-paper.svg'
import { useNavigate } from "react-router-dom";
import purple from "../assets/bw.png";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = () => {
    try {
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-fixed bg-center "
        style={{
          backgroundImage: `url(${purple})`,
          backgroundColor: "rgba(255, 255, 255, 0.85)", // Transparent white overlay
          backgroundBlendMode: "overlay", // Combine the image and color
        }}
      >
        {" "}
        <div>
          <div className="container">
            <a className="navbar-brand" href="###">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5bu33Z6wMz8hTxkcbPhYZQ4eFnuObJfrOA&s"
                alt="Microphone"
                width="104"
                height="80"
              />
            </a>
          </div>
        </div>
        <motion.div className="px-4 font-bold pt-2 my-5 text-center border-bottom container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}>
          <h1 className="display-2 fw-bold text-body-emphasis">HearUsOut</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 font-bold fs-4">
              Whether it’s a broken road, power outage, or unresolved complaint,
              we make reporting problems easy and ensure they reach the right
              authorities. Track updates in real time, support community issues,
              and be part of the solution—because every problem deserves action.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary btn-lg px-4 me-sm-3 mb-5 bg-black"
              >
                Get Started!
              </button>
            </div>
          </div>
        </motion.div>
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 justify-content-center">
            <div className="feature col text-center">
              <div
                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-black fs-2 mb-3"
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "0.75rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-envelope-paper"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                </svg>
              </div>
              <h3 className="fs-3 text-body-emphasis">Quick Reporting</h3>
              <p className="fs-5">
                Submit your civic issues with ease and stay updated on their
                resolution status, all in one place
              </p>
            </div>

            <div className="feature col text-center">
              <div
                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-black fs-2 mb-3"
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "0.75rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-envelope-paper"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                </svg>
              </div>
              <h3 className="fs-3 text-body-emphasis">Verified Action</h3>
              <p className="fs-5">
                Complaints are verified by trusted NGOs, ensuring only
                legitimate issues are addressed with full transparency
              </p>
            </div>

            <div className="feature col text-center">
              <div
                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-black fs-2 mb-3"
                style={{
                  width: "4rem",
                  height: "4rem",
                  borderRadius: "0.75rem",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-envelope-paper"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267zm13 .566v5.734l-4.778-2.867zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083zM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                </svg>
              </div>
              <h3 className="fs-3 text-body-emphasis">Instant Updates</h3>
              <p className="fs-5">
                Track the progress of your complaint in real-time, with timely
                notifications on government actions and resolutions
              </p>
            </div>
          </div>
        </div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
            <p className="mb-3 mb-md-0 text-body-secondary">
              {" "}
              &copy; {new Date().getFullYear()} HearUsOut. All rights reserved.
            </p>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Landing;
