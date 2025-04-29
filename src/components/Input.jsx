import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2.5),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#F3F6F9",
    border: "1px solid",
    borderColor: "#E0E3E7",
    fontSize: 14,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    "&::placeholder": {
      color: "#888",
      opacity: 1,
    },
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function Input({
  id = "bootstrap-input",
  label,
  placeholder = "placeholder text",
  icon,
  error = false,
  success = false,
  warning = false,
  helperText,
  disabled = false,
  fullWidth = false,
  maxLength,
  showCount = false,
  value,
  onChange,
  ...rest
}) {
  const theme = useTheme();
  const validationColor = error
    ? theme.palette.error.main
    : success
    ? theme.palette.success.main
    : warning
    ? theme.palette.warning.main
    : "#222";

  return (
    <Box
      component="form"
      noValidate
      sx={{ width: fullWidth ? "100%" : "auto" }}
    >
      <FormControl
        variant="standard"
        fullWidth={fullWidth}
        disabled={disabled}
        error={error}
      >
        {label && (
          <InputLabel
            shrink
            htmlFor={id}
            sx={{ fontWeight: 800, color: validationColor }}
          >
            {label}
          </InputLabel>
        )}

        <BootstrapInput
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          inputProps={{ maxLength }}
          startAdornment={
            icon ? (
              <InputAdornment position="start">
                <Icon>{icon}</Icon>
              </InputAdornment>
            ) : null
          }
          sx={{
            "& .MuiInputBase-input": {
              borderColor: validationColor,
            },
          }}
          {...rest}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 0.5,
          }}
        >
          <Typography variant="caption" sx={{ color: validationColor }}>
            {helperText}
          </Typography>
          {showCount && maxLength && (
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {`${value?.length || 0}/${maxLength}`}
            </Typography>
          )}
        </Box>
      </FormControl>
    </Box>
  );
}
