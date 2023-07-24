import PropertyCard from "./property-card";

const PropertiesGridContainer = ({allProperties}) => {
  if (!allProperties || allProperties.length === 0) {
    // If allProperties is null or empty, you can handle it gracefully here
    return <div>No properties available</div>;
  }
  
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[12px] px-2.5">
        {allProperties.map((property)=>(
          <PropertyCard 
            key={property.id}
            name={property.name}
            imgUrl={property.image}
            price={property.price}/>

        ))}
      </div>
    </div> 
  );
};

export default PropertiesGridContainer;
