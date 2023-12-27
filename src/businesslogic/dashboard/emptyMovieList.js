import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export default function EmptyMovieList({ addMovieButtonHandle }) {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="white-color login-head">{t("empty_movie_list")}</h1>
      <Button
        variant="contained"
        className="login-button"
        sx={{ mb: 1, p: 1.5 }}
        onClick={addMovieButtonHandle}
        // {...(buttonProps?.btntxt && buttonProps.btntxt)}
      >
        {t("add_new_movie")}
      </Button>
    </>
  );
}
