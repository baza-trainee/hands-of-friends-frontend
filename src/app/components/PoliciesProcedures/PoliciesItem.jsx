import React from "react";

function PoliciesItem({ info }) {
    return (
        <>
            <a
                href={`${info.file_url}#toolbar=0`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-violet hover:border-blue-500 transition duration-400 
                hover:shadow-md min-h-[152px] sm:min-h-[104px] md:min-h-[115px] 2xl:min-h-[131px]"
            >
                <div className="m-4 font-semibold text-base xl:mr-8 2xl:my-6 2xl:mx-9">
                    <p>{info.title}</p>
                </div>
            </a>
        </>
    )
}

export default PoliciesItem;