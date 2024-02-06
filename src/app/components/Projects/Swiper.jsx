"use client";
import React, { useState, useEffect } from "react";

import getFetchedData from "@/app/helpers/helperAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, A11y, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import UniversalSlider from "../ UniversalSlider";
import ProjectItem from "./ProjectItem";

export default function ProjectSlider() {
    const [item, setItem] = useState([]);
 
    useEffect(() => {
      async function fetchData() {
     
  
        const projectPromise = getFetchedData("projects/", { "Accept-Language": "uk" });
        const [projectData] = await Promise.all([projectPromise]);
        
       
        
        setItem(projectData);
        
        
      
      }
      
      fetchData();
      console.log(item)
    }, []);
  
    return (
      <>
        <div className="wrapperDonor relative">
        <UniversalSlider
          endpoint="donor/"
          ItemComponent={ProjectItem}
          swiperSettings={{
            breakpoints: {
              320: { slidesPerView: 1, spaceBetween: 8 },
            //   420: { slidesPerView: 3.5, spaceBetween: 8 },
            //   768: { slidesPerView: 4, spaceBetween: 20 },
            //   1280: { slidesPerView: 5, spaceBetween: 20 },
            },
          }}
        />
      </div>
          {/* { data.map((item) => ( 
           <ProjectItem
           key={item.id}
           item={item}
            href={`/projects/${item.id}`}/>
          ))
          } */}
        
            </>
    );
  }
  

// const ProjectWrapper = () => {
//   return (
//     <>
      
//       <div className="wrapperDonor relative">
//         <UniversalSlider
//           endpoint="donor/"
//           ItemComponent={ProjectItem}
//           swiperSettings={{
//             breakpoints: {
//               320: { slidesPerView: 1, spaceBetween: 8 },
//             //   420: { slidesPerView: 3.5, spaceBetween: 8 },
//             //   768: { slidesPerView: 4, spaceBetween: 20 },
//             //   1280: { slidesPerView: 5, spaceBetween: 20 },
//             },
//           }}
//         />
//       </div>
//     </>
//   );
// };

