import React from "react";
import { useParams } from "react-router-dom";
import { useGetBrendDataQuery } from "../../redux/service/all-product";
import { PhoneCard } from "../../components/phone-card";
const BrandPage = () => {
  const { name } = useParams();
  const { data } = useGetBrendDataQuery(name);
  return (
    <div className="container py-[50px]">
      <h2 className="mb-6 text-2xl font-semibold text-carbon">{name}</h2>
      <div className="flex flex-wrap gap-[35px]">
        {data?.map((item) => (
          <PhoneCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default BrandPage;
