"use client";
import Loading from "@/app/(public)/loading";
import axios from "axios";
import { useEffect, useState } from "react";
const AsideComponent = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/product")
      .then((data) => {
        setData(data.data.products);
      })
      .catch((err) => console.log("error"));
  }, []);
  return (
    <div className="min-w[10rem] bg-gray-200 rounded-3xl flex flex-col text-left gap-4 p-2">
      {data == false ? (
        <Loading />
      ) : (
        <div>
          {data.map((item, index) => (
            <p key={index}>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AsideComponent;
