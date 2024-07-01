// import React from "react";
// import OurBlogBtn from "./OurBlogBtn";
// import ViewMoreBtn from "../dreamCar/viewMoreBtn";

// export default function OurBlogCart() {
//   return (
//     <div className="container max-w-[350px] rounded-lg shadow-md overflow-hidden">
//       <img
//         className="w-full h-48 object-cover"
//         src="https://placehold.co/600x400"
//         alt="Yellow sports car"
//       />
//       <div className="relative p-4">
//         <div className="flex justify-between items-center mb-2">
//           <span className="text-gray-500">Lorem Ipsum</span>
//           <div className="absolute -top-12 right-6 text-white rounded">
//             <span className="block text-center bg-red-800 px-2">09</span>
//             <span className="block text-center bg-red-800 px-2">Feb</span>

//             <span className="block text-center px-2 bg-black">2024</span>
//           </div>
//         </div>
//         <p className="text-muted-foreground mb-4">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry.
//         </p>
//         <ViewMoreBtn />
//       </div>
//     </div>
//   );
// }





import React from "react";
import ViewMoreBtn from "../dreamCar/viewMoreBtn";
import "./OurBlog.css"; // Make sure to import the CSS file

export default function OurBlogCart() {
  return (
    <div className="our-blog-cart-container">
      <img
        className="our-blog-cart-image"
        src="https://placehold.co/600x400"
        alt="Yellow sports car"
      />
      <div className="our-blog-cart-content">
        <div className="our-blog-cart-date">
          <span>09</span>
          <span>Feb</span>
          <span>2024</span>
        </div>
        <p className="our-blog-cart-title">Lorem Ipsum</p>
        <p className="our-blog-cart-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <ViewMoreBtn />
      </div>
    </div>
  );
}
