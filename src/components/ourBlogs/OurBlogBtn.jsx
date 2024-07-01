// import React from "react";

// export default function OurBlogBtn() {
//   return (
//     <div className="text-center mt-8">
//       <button
//         type="button"
//         class="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
//       >
//         Our Blogs
//       </button>
//     </div>
//   );
// }



import React from "react";
import "./OurBlog.css"; // Make sure to import the CSS file

export default function OurBlogBtn() {
  return (
    <div className="our-blog-btn-container">
      <button type="button" className="our-blog-btn">
        Our Blogs
      </button>
    </div>
  );
}
