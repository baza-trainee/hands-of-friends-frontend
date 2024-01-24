"use client";
import { useState, useEffect } from "react";
import Action from "../Action";
// import { dataProjects } from "./data";
import axios from "axios";
import Skeleton from "./Skeleton";

async function getProjects() {
  try {
    const response = await axios.get(
      "https://hands-of-friends-backend.onrender.com/api/content_management/projects/?limit=3"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function ProjectList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  let skeleton = [... new Array(3)].map((_, i) => (<Skeleton key={i} />));

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const projectPromise = getProjects();

      const [projectData] = await Promise.all([projectPromise]);
      setData(projectData.results);
      // console.log(projectData);
    }
    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <>
      <ul className="flex gap-5 not-italic leading-normal">
        {isLoading ? skeleton :
          data.map((item) => (
            <li key={item.id} className="flex flex-col min-w-[22.5rem]">
              <img
                src={item.image}
                alt="Photo of the project"
                width={360}
                height={400}
                className="mb-3 h-[290px] object-cover "
              />
              <h3 className="mb-1 mt-6 text-2xl font-body">{item.title}</h3>
              <span
                className={`font-bold text-lg ${item.is_active ? "text-green" : "text-lightGray"
                  }`}
              >
                {item.is_active ? "Активний" : "Архівний"}
              </span>
              {/* 
        </div> */}
              <p className="mt-6 text-lg font-medium leading-6 text-left text-black font-body">
                {item.description}
              </p>
            </li>
          ))}
      </ul>
      <Action
        type="button"
        className="block px-0 mx-auto mt-8 min-w-[13.63rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
      >
        Завантажити більше
      </Action>
    </>
  );
}