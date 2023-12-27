import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import EmptyMovieList from "./emptyMovieList";
import CardComponent from "./cardComponent";
import AddNewMovie from "./addNewMovie";

export default function Dashboard() {
  const { t } = useTranslation();

  const [isAddNewMovie, setIsAddNewMovie] = useState(false);

  const addMovieButtonHandle = () => {
    setIsAddNewMovie(!isAddNewMovie);
  };

  const isCount = true;

  if (isCount && !isAddNewMovie) {
    return <EmptyMovieList addMovieButtonHandle={addMovieButtonHandle} />;
  }
  if (isAddNewMovie) {
    return <AddNewMovie />;
  }
  if (!isCount) {
    return <CardComponent />;
  }
  return "";
}
