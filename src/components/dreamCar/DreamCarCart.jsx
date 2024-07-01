// import React from "react";
// import Image from "next/image";

// export default function DreamCarCart() {
//   const cart = [
//     {
//       heading: "Hello",
//       image: "/assets/Mask group-4.png",
//     },
//     {
//       heading: "Hello",

//       image: "/assets/Mask group-5.png",
//     },
//     {
//       heading: "Hello",

//       image: "/assets/Mask group-6.png",
//     },
//     {
//       heading: "Hello",

//       image: "/assets/Clip path group.png",
//     },
//     {
//       heading: "Hello",

//       image: "/assets/Mask group-7.png",
//     },
//     {
//       heading: "Hello",

//       image: "/assets/Mask group-8.png",
//     },
//     {
//       heading: "Hello",

//       image: "/assets/Group.png",
//     },
//     {
//       heading: "Hello",

//       image: "/assets/Vector.png",
//     },
//     {
//       heading: "Hello",

//       image: "/assets/Mask group-3.png",
//     },
//     {
//       heading: "Hello",

//       image: "/assets/Mask group-2.png",
//     },
//     {
//       heading: "Hello",

//       image: "/assets/Mask group-1.png",
//     },
//     {
//       heading: "Hello",

//       image: "/assets/Mask group.png",
//     },
//   ];
//   return (
//     <>
//       {cart.map((item, index) => {
//         return (
//           <div
//             key={index}
//             className="flex items-center justify-center flex-col border border-gray-500 rounded-lg h-44 p-4 text-center"
//           >
//             <Image
//               // src={item.image}
//               src={item.image}
//               alt="Audi logo"
//               className="mx-auto w-14 mb-2"
//               width={100}
//               height={100}
//             />
//             <p>Available Cars</p>
//             <p className="text-muted-foreground">(4)</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }





import React from "react";
import Image from "next/image";
import './DreamCar.css'; // Make sure to import the stylesheet

export default function DreamCarCart() {
  const cart = [
    {
      heading: "Hello",
      image: "/assets/Mask group-4.png",
    },
    {
      heading: "Hello",
      image: "/assets/Mask group-5.png",
    },
    {
      heading: "Hello",
      image: "/assets/Mask group-6.png",
    },
    {
      heading: "Hello",
      image: "/assets/Clip path group.png",
    },
    {
      heading: "Hello",
      image: "/assets/Mask group-7.png",
    },
    {
      heading: "Hello",
      image: "/assets/Mask group-8.png",
    },
    {
      heading: "Hello",
      image: "/assets/Group.png",
    },
    {
      heading: "Hello",
      image: "/assets/Vector.png",
    },
    {
      heading: "Hello",
      image: "/assets/Mask group-3.png",
    },
    {
      heading: "Hello",
      image: "/assets/Mask group-2.png",
    },
    {
      heading: "Hello",
      image: "/assets/Mask group-1.png",
    },
    {
      heading: "Hello",
      image: "/assets/Mask group.png",
    },
  ];
  return (
    <>
      {cart.map((item, index) => {
        return (
          <div
            key={index}
            className="cart-item"
          >
            <Image
              src={item.image}
              alt="Audi logo"
              className="cart-image"
              width={100}
              height={100}
            />
            <p>Available Cars</p>
            <p className="text-muted">(4)</p>
          </div>
        );
      })}
    </>
  );
}
