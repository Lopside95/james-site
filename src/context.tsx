import React, { useContext, useState } from "react";

type CurrentPage = {
  currentPage: "home" | "writing";
  setCurrentPage: React.Dispatch<React.SetStateAction<"home" | "writing">>;
};

const initialPage: CurrentPage = {
  currentPage: "home",
  setCurrentPage: () => "",
};

const SiteProvider = () => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(initialPage);
  const [home, setHome] = useState();
  const [writing, setWriting] = useState();

  const siteData = {};
};
