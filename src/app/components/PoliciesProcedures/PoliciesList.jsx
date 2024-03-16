import PoliciesItem from "./policiesItem";

const PoliciesList = ({ currentItems }) => {
    return (
        <div className="grid grid-auto-rows-max-content grid-cols-1 gap-y-8 
            md:grid-cols-2 md:gap-x-5 md:gap-y-6 
            xl:grid-cols-3 xl:gap-y-10 
            2xl:gap-x-6 2xl:gap-y-12">
            {currentItems
                ? currentItems.map((item) => (
                    <PoliciesItem key={item.id} info={item} className="bg-gray-200" />
                ))
                : null
            }
        </div>
    );
}
export default PoliciesList;