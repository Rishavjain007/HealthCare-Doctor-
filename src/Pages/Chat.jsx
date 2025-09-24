// import React, { useContext } from "react";
// import { FaPaperPlane, FaSmile, FaPaperclip } from "react-icons/fa";
// import { TbMessageCheck } from "react-icons/tb";
// import ThemeContext from "../Components/ThemeContext.jsx";

// const ChatUI = () => {
//   const { isDarkMode, colors } = useContext(ThemeContext);

//   const doctors = [
//     {
//       name: "Christopher",
//       msg: "Hello",
//       time: "10 Min",
//       img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
//     },
//     {
//       name: "Dr. Cristino",
//       msg: "Hi, How are you?",
//       time: "20 Min",
//       img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
//     },
//     {
//       name: "Faye",
//       msg: "Heyy",
//       time: "30 Min",
//       img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
//     },
//     {
//       name: "Ronald",
//       msg: "Hey, How are you sir?",
//       time: "2 Hours",
//       img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
//     },
//     {
//       name: "Melissa",
//       msg: "Good Afternoon",
//       time: "3 Hours",
//       img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
//     },
//     {
//       name: "Dr. Elsie",
//       msg: "Good Morning sir, how can I help you?",
//       time: "10 Hours",
//       img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
//     },
//     {
//       name: "Jerry",
//       msg: "Hi there!",
//       time: "16 Hours",
//       img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
//     },
//   ];

//   const cards = [
//     {
//       title: "New Messages",
//       text: "Due to its wide spread use as filler text",
//       link: "Read more",
//     },
//     {
//       title: "Latest Proposals",
//       text: "Due to its wide spread use as filler text",
//       link: "View more",
//     },
//     {
//       title: "Package Expiry",
//       text: "Due to its wide spread use as filler text",
//       link: "Check here",
//     },
//     {
//       title: "Saved Items",
//       text: "Due to its wide spread use as filler text",
//       link: "View items",
//     },
//   ];

//   return (
//     <>
//       <section
//         className="flex flex-col gap-4 p-2 shadow-md"
//         style={{
//           backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
//           color: isDarkMode ? colors.darkText : colors.lightText,
          
//         }}
//       >
//         {/* Chat Section */}
//         <div className="flex iten-center gap-4">
//           {/* Sidebar */}
//           <div className="w-1/4 shadow-md rounded-lg">
//             {/* Profile */}
//             <div className="flex flex-col items-center py-4 rounded-t-lg shadow-md">
//               <img
//                 src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_incoming&w=740&q=80"
//                 alt="profile"
//                 className="w-20 h-20 object-cover rounded-full"
//               />
//               <h2 className="text-xl font-semibold mt-2">Dr. Calvin Carlo</h2>
//               <p className="text-md text-gray-400 font-semibold">Orthopedic</p>
//             </div>

//             {/* Doctor List */}
//             <div className="flex flex-col h-[55vh] py-1 pl-1 overflow-y-scroll gap-1 scrollbar-none">
//               {doctors.map((doc, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 p-3 cursor-pointer"
//                 >
//                   <img
//                     src={doc.img}
//                     alt={doc.name}
//                     className="w-12 h-12 object-cover rounded-full"
//                   />

//                   <div className="flex-1 text-start">
//                     <h3 className="text-lg font-semibold">{doc.name}</h3>
//                     <p className="text-sm text-gray-400 font-semibold">
//                       {doc.msg}
//                     </p>
//                   </div>
//                   <span className="text-sm text-gray-400 font-semibold">
//                     {doc.time}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Message */}
//           <div className="w-3/4 shadow-md rounded-lg">
//             <div className="flex justify-between items-center p-3 shadow-md">
//               <div className="flex items-center gap-3 cursor-pointer">
//                 <img
//                   src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
//                   alt="image"
//                   className="w-12 h-12 object-cover rounded-full"
//                 />

//                 <div className="flex-1 text-start">
//                   <h3 className="text-lg font-semibold">Cristino Murphy</h3>
//                   <p className="text-sm font-medium text-green-400">● Online</p>
//                 </div>
//               </div>

//               <div
//                 className="bg-sky-500 p-3 rounded-full gap-3"
//               >
//                 <TbMessageCheck className="text-xl" />
//               </div>
//             </div>

//             {/* Messages */}
//             <div className="flex-1 p-4 h-[60vh] overflow-y-scroll scrollbar-none">
//               <div>
//                 <p className="bg-blue-600 p-2 rounded-lg inline-block">
//                   Hey Calvin
//                 </p>
//                 <p className="text-xs text-gray-400">59 min ago</p>
//               </div>
//               <div className="text-right">
//                 <p className="bg-gray-300 p-2 rounded-lg inline-block">
//                   Hello Cristino
//                 </p>
//                 <p className="text-xs text-gray-400">45 min ago</p>
//               </div>
//               <div>
//                 <p className="bg-blue-600 p-2 rounded-lg inline-block">
//                   Nice to meet you
//                 </p>
//                 <p className="text-xs text-gray-400">42 min ago</p>
//               </div>
//               <div>
//                 <p className="bg-blue-600 p-2 rounded-lg inline-block">
//                   Hope you are doing fine?
//                 </p>
//                 <p className="text-xs text-gray-400">40 min ago</p>
//               </div>
//               <div className="text-right">
//                 <p className="bg-gray-300 p-2 rounded-lg inline-block">
//                   I’m good thanks for asking
//                 </p>
//                 <p className="text-xs text-gray-400">38 min ago</p>
//               </div>
//             </div>

//             {/* Input Box */}
//             <div className="p-3 shadow-md flex items-center gap-2">   

//               <input
//                 type="text"
//                 placeholder="Enter Message..."
//                 className="flex-1 p-2 rounded-md  shadow-md  focus:outline-none"
//               />
//               <FaPaperclip className="text-gray-400 cursor-pointer" />
//               <FaSmile className="text-gray-400 cursor-pointer" />
//               <button className="bg-blue-600 px-4 py-2 rounded-md flex items-center gap-2">
//                 <FaPaperPlane /> Send
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="px-6 py-4 rounded-lg text-center shadow-md"
//               style={{
//                 backgroundColor: isDarkMode
//                   ? colors.darkCard
//                   : colors.lightCard,
//                 color: isDarkMode ? colors.darkText : colors.lightText,
//               }}
//             >
//               <TbMessageCheck className="text-center mx-auto mb-2" size={24} />
//               <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//               <p className="text-md font-medium text-gray-400">{card.text}</p>
//               <a className="text-md font-medium text-blue-400 cursor-pointer">
//                 {card.link}
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default ChatUI;



import React, { useContext } from "react";
import { FaPaperPlane, FaSmile, FaPaperclip } from "react-icons/fa";
import { TbMessageCheck } from "react-icons/tb";
import ThemeContext from "../Components/ThemeContext.jsx";

const ChatUI = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);

  const doctors = [
    {
      name: "Christopher",
      msg: "Hello",
      time: "10 Min",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Dr. Cristino",
      msg: "Hi, How are you?",
      time: "20 Min",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Faye",
      msg: "Heyy",
      time: "30 Min",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Ronald",
      msg: "Hey, How are you sir?",
      time: "2 Hours",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Melissa",
      msg: "Good Afternoon",
      time: "3 Hours",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Dr. Elsie",
      msg: "Good Morning sir, how can I help you?",
      time: "10 Hours",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
    {
      name: "Jerry",
      msg: "Hi there!",
      time: "16 Hours",
      img: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    },
  ];

  const cards = [
    { title: "New Messages", text: "Due to its wide spread use as filler text", link: "Read more" },
    { title: "Latest Proposals", text: "Due to its wide spread use as filler text", link: "View more" },
    { title: "Package Expiry", text: "Due to its wide spread use as filler text", link: "Check here" },
    { title: "Saved Items", text: "Due to its wide spread use as filler text", link: "View items" },
  ];

  return (
    <section
      className="flex flex-col gap-4 p-2 shadow-md min-h-screen"
      style={{
        backgroundColor: isDarkMode ? colors.darkBg : colors.lightBg,
        color: isDarkMode ? colors.darkText : colors.lightText,
      }}
    >
      {/* Chat Section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 shadow-md rounded-lg">
          {/* Profile */}
          <div className="flex flex-col items-center py-4 rounded-t-lg shadow-md">
            <img
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_incoming&w=740&q=80"
              alt="profile"
              className="w-20 h-20 object-cover rounded-full"
            />
            <h2 className="text-xl font-semibold mt-2">Dr. Calvin Carlo</h2>
            <p className="text-md text-gray-400 font-semibold">Orthopedic</p>
          </div>

          {/* Doctor List */}
          <div className="flex flex-col h-[55vh] py-1 pl-1 overflow-y-scroll gap-1 scrollbar-none">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-300 rounded-lg"
              >
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div className="flex-1 text-start">
                  <h3 className="text-lg font-semibold">{doc.name}</h3>
                  <p className="text-sm text-gray-400 font-semibold">
                    {doc.msg}
                  </p>
                </div>
                <span className="text-sm text-gray-400 font-semibold">
                  {doc.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Message Section */}
        <div className="w-full md:w-3/4 shadow-md rounded-lg flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-3 shadow-md">
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                alt="image"
                className="w-12 h-12 object-cover rounded-full"
              />
              <div className="flex-1 text-start">
                <h3 className="text-lg font-semibold">Cristino Murphy</h3>
                <p className="text-sm font-medium text-green-400">● Online</p>
              </div>
            </div>
            <div className="bg-sky-500 p-3 rounded-full gap-3">
              <TbMessageCheck className="text-xl" />
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 h-[50vh] md:h-[60vh] overflow-y-scroll scrollbar-none">
            <div>
              <p className="bg-blue-600 text-white p-2 rounded-lg inline-block">
                Hey Calvin
              </p>
              <p className="text-xs text-gray-400">59 min ago</p>
            </div>
            <div className="text-right">
              <p className="bg-gray-300 p-2 rounded-lg inline-block">
                Hello Cristino
              </p>
              <p className="text-xs text-gray-400">45 min ago</p>
            </div>
            <div>
              <p className="bg-blue-600 text-white p-2 rounded-lg inline-block">
                Nice to meet you
              </p>
              <p className="text-xs text-gray-400">42 min ago</p>
            </div>
            <div>
              <p className="bg-blue-600 text-white p-2 rounded-lg inline-block">
                Hope you are doing fine?
              </p>
              <p className="text-xs text-gray-400">40 min ago</p>
            </div>
            <div className="text-right">
              <p className="bg-gray-300 p-2 rounded-lg inline-block">
                I’m good thanks for asking
              </p>
              <p className="text-xs text-gray-400">38 min ago</p>
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 shadow-md flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter Message..."
              className="flex-1 p-2 rounded-md shadow-md focus:outline-none"
            />
            <FaPaperclip className="text-gray-400 cursor-pointer" />
            <FaSmile className="text-gray-400 cursor-pointer" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
              <FaPaperPlane /> Send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="px-6 py-4 rounded-lg text-center shadow-md"
            style={{
              backgroundColor: isDarkMode ? colors.darkCard : colors.lightCard,
              color: isDarkMode ? colors.darkText : colors.lightText,
            }}
          >
            <TbMessageCheck className="text-center mx-auto mb-2" size={24} />
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-md font-medium text-gray-400">{card.text}</p>
            <a className="text-md font-medium text-blue-400 cursor-pointer">
              {card.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChatUI;
