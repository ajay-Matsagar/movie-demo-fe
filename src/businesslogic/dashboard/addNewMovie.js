import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ImageUploader from "./imageUploader";
import { Button, FormHelperText, Grid, OutlinedInput } from "@mui/material";
import { useDispatch } from "react-redux";
import { addMovie, editMovie } from "../../store/moviesData/moviesSaga";
import { regexPatterns } from "../RegexValidation/RegexPatterns";

export default function AddNewMovie({
  addMovieButtonHandle,
  editObject = {},
  screenWidth,
  isEdit = false,
}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);

  const [obj, setObje] = useState({
    ...(editObject || { name: "", year: "", image: "" }),
  });

  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    if (!obj?.name || !obj?.year) {
      setIsError(true);
    } else {
      if (isEdit) {
        dispatch(
          editMovie({
            body: {
              title: obj?.name,
              poster: obj?.image,
              publishingYear: obj?.year,
            },
            id: obj?.id,
            addMovieButtonHandle: addMovieButtonHandle,
          })
        );
      } else {
        // const formData = new FormData();
        // formData.append("image", file);
        dispatch(
          addMovie({
            body: {
              title: obj?.name,
              poster: file,
              publishingYear: obj?.year,
            },
            addMovieButtonHandle: addMovieButtonHandle,
          })
        );
      }
    }
  };

  const onChangeHandler = (e, subField) => {
    setIsError(false);
    setObje({ ...obj, [subField]: e.target.value });
  };

  return (
    <>
      <h1 className="white-color create-new-movie">
        {t("create_a_new_movie")}
      </h1>
      <div className="d-flex div-padding below-width-div">
        <ImageUploader file={file} setFile={setFile} />
        <div className="width-100 padding-left-120 padding-none-mobile-device">
          <Grid container flexDirection={"column"} alignItems={"flex-start"}>
            <Grid
              className="grid-width"
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <OutlinedInput
                required
                fullWidth
                id="title"
                name={t("title")}
                autoComplete="title"
                placeholder={t("title")}
                className="normal-text title-text-input"
                onChange={(e) => onChangeHandler(e, "name")}
                value={obj?.name}
              />
              {((obj?.name && !regexPatterns.text.test(obj?.name)) ||
                (isError && !obj?.name)) && (
                <FormHelperText className="error-message">
                  {t("text_input")}
                </FormHelperText>
              )}
            </Grid>
            <Grid
              className="paddin-top-24px grid-width"
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              paddingTop={"20px"}
            >
              <OutlinedInput
                required
                fullWidth
                name={t("publishing_year")}
                id="publishing_year"
                autoComplete="publishing_year"
                placeholder={t("publishing_year")}
                className="normal-text publishing-year-input"
                onChange={(e) => onChangeHandler(e, "year")}
                value={obj?.year}
              />
              {((obj?.year && !regexPatterns.number.test(obj?.year)) ||
                (isError && !obj?.year)) && (
                <FormHelperText className="error-message">
                  {t("year_number")}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
          {screenWidth > 1023 ? (
            <Grid container spacing={1} className="buttons-container-grid">
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Button
                  variant="contained"
                  className="cancel-button"
                  sx={{ mb: 1, p: 1.5 }}
                  onClick={() => addMovieButtonHandle(false)}
                >
                  {t("cancel")}
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <Button
                  variant="contained"
                  className="submit-button"
                  sx={{ mb: 1, p: 1.5 }}
                  onClick={handleSubmit}
                >
                  {t("submit")}
                </Button>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
        </div>
      </div>
      {screenWidth < 1023 ? (
        <Grid container spacing={1} className="buttons-container-grid">
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button
              variant="contained"
              className="cancel-button"
              sx={{ mb: 1, p: 1.5 }}
              onClick={addMovieButtonHandle}
            >
              {t("cancel")}
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Button
              variant="contained"
              className="submit-button"
              sx={{ mb: 1, p: 1.5 }}
              onClick={handleSubmit}
            >
              {t("submit")}
            </Button>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </>
  );
}
