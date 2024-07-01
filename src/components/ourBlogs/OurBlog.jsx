// import img1 from "/assets/Rectangle 34.png";
// import img2 from "/assets/Rectangle 34-1.png";
// import img3 from "/assets/Rectangle 34-2.png";

// import OurBlogCart from "./OurBlogCart";
// import OurBlogBtn from "./OurBlogBtn";

// export default function OurBlogs() {
//   return (
//     <>
//       <div className="py-10">
//         <div className="flex items-center justify-center ">
//           <div className="space-x-0 sm:space-x-7 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             <OurBlogCart />
//             <OurBlogCart />
//             <OurBlogCart />
//           </div>
//         </div>
//         <OurBlogBtn />
//       </div>
//     </>
//   );
// }




import React from "react";
import OurBlogCart from "./OurBlogCart";
import OurBlogBtn from "./OurBlogBtn";
import "./OurBlog.css"; // Make sure to import the CSS file

export default function OurBlogs() {
  return (
    <div className="our-blogs-container">
      <div className="our-blogs-wrapper">
        <div className="our-blogs-grid">
          <OurBlogCart />
          <OurBlogCart />
          <OurBlogCart />
        </div>
      </div>
      <div className="our-blog-btn-container">
        <OurBlogBtn />
      </div>
    </div>
  );
}
