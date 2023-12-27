import React, { useEffect, useState } from "react";
import Registration from "../../../components/registrationform/Registration";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { startLoadingProcess } from "../../../store/reducers/loader/LoderSaga";
import { showToaster } from "../../../store/reducers/toaster/ToasterSaga";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { regexPatterns } from "../../RegexValidation/RegexPatterns";

function LoginPage() {
  const { t } = useTranslation();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e, fieldName) => {
    const newEmail = e.target.value;
    fieldName(newEmail);

    // setUserName(validateEmail(newEmail));
  };

  return (
    <>
      <h1 className="white-color login-head">{t("Log_In")}</h1>
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        paddingTop={"40px"}
      >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <OutlinedInput
            required
            fullWidth
            id="email"
            name={t("email")}
            autoComplete="email"
            placeholder={t("email")}
            className="normal-text"
            onChange={(e) => handleEmailChange(e, setUserName)}
            value={userName}
            // error={!regexPatterns.email.test(userName) || false}
            // helperText={!isValidEmail ? t("Invalid_email_address") : ""}
            // sx={{ minWidth: styleProps.minWidth }}
            // {...(fieldProps && fieldProps.email ? fieldProps.email : {})}
          />
          {userName && !regexPatterns.email.test(userName) && <FormHelperText>{t("Invalid_email_address")}</FormHelperText>}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} paddingTop={"20px"}>
          <OutlinedInput
            required
            fullWidth
            name={t("password")}
            type="password"
            id="password"
            autoComplete="new-password"
            placeholder={t("password")}
            className="normal-text"
            onChange={(e) => handleEmailChange(e, setPassword)}
            // value={password}
            // error={!isStrongPassword}
            // helperText={getPasswordStrengthMessage()}
            // {...(fieldProps && fieldProps.password ? fieldProps.password : {})}
          />
          {password && !regexPatterns.passCode.test(password) && <FormHelperText>{t("password_must-be_strong")}</FormHelperText>}
        </Grid>
        <Grid item xs={12} className="d-flex">
          <FormControlLabel
            control={
              <Checkbox
                value="allowExtraEmails"
                color="primary"
                className="d-flex"
                // onChange={onCheckboxChange}
                // checked={allowExtraEmails}
              />
            }
            label={
              <Typography
                variant="body2"
                color="text.secondary"
                className="d-flex remember-me"
                // {...(labelProps && labelProps.receiveUpdates)}
              >
                {t("Remember_me")}
              </Typography>
            }
          />
        </Grid>
        <Button
          variant="contained"
          className="login-button"
          sx={{ mb: 1, p: 1.5 }}
          // onClick={handleSubmit}
          // {...(buttonProps?.btntxt && buttonProps.btntxt)}
        >
          {t("Log_in_link")}
        </Button>
      </Grid>
    </>
  );
}

export default LoginPage;
