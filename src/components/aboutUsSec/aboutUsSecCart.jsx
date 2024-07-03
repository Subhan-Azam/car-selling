// import React from "react";

// export default function AboutUsSecCart() {
//   return (
//     <>
//       <div className="w-full sm:w-1/2 md:w-1/4 p-4 text-center">
//         <div className="bg-card rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-4">
//           <img
//             undefinedhidden="true"
//             alt="car-icon"
//             src="https://openui.fly.dev/openui/64x64.svg?text=🚗"
//           />
//         </div>
//         <h3 className="text-white text-2xl font-bold">500+</h3>
//         <p className="text-muted-foreground">Available Cars</p>
//       </div>
//     </>
//   );
// }

import React from "react";
import "./AboutUsSec.css";

export default function AboutUsSecCart(props) {
  return (
    <>
      <div className="AboutUsSecCart">
        <div className="imgDiv">
          <img
            undefinedhidden="true"
            alt="car-icon"
            src={props.src}
          />
        </div>
        <h3 className="text-white text-2xl font-bold">500+</h3>
        <p className="text-muted-foreground">{props.para}</p>
      </div>
    </>
  );
}
