import React from "react";
import { useTranslation } from "react-i18next";
import ImageUploader from "./imageUploader";
import { Grid, OutlinedInput } from "@mui/material";

export default function AddNewMovie() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="white-color create-new-movie">
        {t("create_a_new_movie")}
      </h1>
      <div>
        <ImageUploader />
        <div>
          <Grid
            container
            flexDirection={"column"}
            alignItems={"center"}
            // paddingTop={"40px"}
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <OutlinedInput
                required
                fullWidth
                id="title"
                name={t("title")}
                autoComplete="title"
                placeholder={t("title")}
                className="normal-text"
                // onChange={(e) => handleEmailChange(e, setUserName)}
                // value={userName}
                // error={!regexPatterns.email.test(userName) || false}
                // helperText={!isValidEmail ? t("Invalid_email_address") : ""}
                // sx={{ minWidth: styleProps.minWidth }}
                // {...(fieldProps && fieldProps.email ? fieldProps.email : {})}
              />
              {/* {userName && !regexPatterns.email.test(userName) && (
                <FormHelperText>{t("Invalid_email_address")}</FormHelperText>
              )} */}
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} paddingTop={"20px"}>
              <OutlinedInput
                required
                fullWidth
                // name={t("publishing_year")}
                type="text"
                id="publishing_year"
                autoComplete="publishing_year"
                placeholder={t("publishing_year")}
                className="normal-text"
                // onChange={(e) => handleEmailChange(e, setPassword)}
                // value={password}
                // error={!isStrongPassword}
                // helperText={getPasswordStrengthMessage()}
                // {...(fieldProps && fieldProps.password ? fieldProps.password : {})}
              />
              {/* {password && !regexPatterns.passCode.test(password) && (
                <FormHelperText>{t("password_must-be_strong")}</FormHelperText>
              )} */}
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
