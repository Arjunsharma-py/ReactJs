import { useQuery } from "@tanstack/react-query";
import React from "react";
import astros from "../astros";
import ProfileCard from "./ProfileCard";

const AllAstroChat = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["astros"],
    queryFn: () => {
      // return apiClient.get('/astros').then((res) => res.json())
      return astros;
    },
  });
  console.log(data);

  return (
    <>
      {data?.map((astro) => (
        <div className="display-card">
          <ProfileCard user={astro} />
        </div>
      ))}
    </>
  );
};

export default AllAstroChat;
