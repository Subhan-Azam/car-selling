// import React from "react";
// import DreamCarHeading from "./DreamCarHeading";
// import DreamCarLinks from "./DreamCarLinks";
// import DreamCarCart from "./DreamCarCart";

// export default function DreamCar() {
//   return (
//     <>
//       <div className="container mx-auto p-4">
//         <DreamCarHeading />
//         <DreamCarLinks />
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//           <DreamCarCart />
//         </div>
//       </div>
//     </>
//   );
// }

import React from "react";
import "./DreamCar.css";
import DreamCarHeading from "./DreamCarHeading";
import DreamCarLinks from "./DreamCarLinks";
import DreamCarCart from "./DreamCarCart";

export default function DreamCar() {
  return (
    <>
      <div className="DreamCar">
        <DreamCarHeading />
        <DreamCarLinks />
        <div className="grid grid-cols-2 sm-grid-cols-3 md-grid-cols-4 lg-grid-cols-6">
          <DreamCarCart />
        </div>
      </div>
    </>
  );
}
