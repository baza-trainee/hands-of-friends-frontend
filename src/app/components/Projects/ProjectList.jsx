import Button from "../Button";
import { dataProjects } from "./data";

export default function ProjectList() {
    return (
        <>
        <ul className="flex gap-5 not-italic leading-normal">
        {dataProjects.map((item) => (
       
       <li
         key={item.id}
         className="flex flex-col min-w-[22.5rem]"
       >
        
        {/* <div className="flex justify-between text-lg font-body"> */}
        <h3 className="mb-1 text-2xl font-body">{item.name}</h3>
        <span className={`font-bold text-lg ${
            item.type === 'Активний'
            ? 'text-green'
            : 'text-lightGray'
        }`}
        >
        {item.type}
        </span>
{/* 
        </div> */}
         <p className="mt-6 text-lg font-medium leading-6 text-left text-black font-body">
           {item.description}
         </p>
       
       </li>   
         ))}
        </ul>
        <Button
           type="button"
        className="block px-0 mx-auto mt-8 min-w-[13.63rem] font-normal bg-deepBlue border border-transparent hover:text-deepBlue hover:border hover:border-deepBlue"
        >Завантажити більше</Button>
        </>
    )}