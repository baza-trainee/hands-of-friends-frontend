"use client";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import Container from "@/app/components/Container";

import { useState, useEffect } from "react";
import axios from "axios";

async function getData() {
  try {
    const response = await axios.get(
      `https://hands-of-friends-backend.onrender.com/api/content_management/tenders/${id}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default function Page({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const tenderPromise = getData();

      const [tenderData] = await Promise.all([tenderPromise]);
      setData(tenderData);
    }
    fetchData();
  }, []);
  console.log("data", data);

  return (
    <>
      <Container>
        <BreadCrumbs href="/tenders" className="my-12 " text="Тендери" />

        <div className="max-w-[835px] text-lg">
          <p>{params.id}</p>
          <p>{data.title}</p>
        </div>
      </Container>
    </>
  );
}
