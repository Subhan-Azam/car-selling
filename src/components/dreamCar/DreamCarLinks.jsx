// import React from "react";
// import Image from "next/image";

// export default function DreamCarLinks() {
//   return (
//     <>
//       <div className="flex justify-between items-center border-t border-b border-gray-300 py-3 mb-6">
//         <div className="flex space-x-4 ">
//           <button className="text-primary text-red-700">Make</button>
//           <button className="text-muted-foreground">Body Type</button>
//           <button className="text-muted-foreground">Location</button>
//         </div>
//         <button className="text-muted-foreground flex items-center">
//           View More
//           <Image
//             src="/icons/Vector.png"
//             className="w-5 ml-2"
//             width={50}
//             height={50}
//             alt="Picture of the author"
//           />
//         </button>
//       </div>
//     </>
//   );
// }

import React from "react";
import "./DreamCar.css"; // Make sure to import the stylesheet
import ViewMoreBtn from "./viewMoreBtn";

export default function DreamCarLinks() {
  return (
    <div className="DreamCarLinks">
      <div className="buttons">
        <button className="button primary">Make</button>
        <button className="button muted">Body Type</button>
        <button className="button muted">Location</button>
      </div>
      <ViewMoreBtn />
    </div>
  );
}
