import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Wrapper for the entire component
const InputContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
}));

// Label component
const Label = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 800,
  color: "#222",
}));

// Input wrapper with icon
const InputWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

// Start icon container
const StartIconContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: "12px",
  top: "55%",
  transform: "translateY(-50%)",
  zIndex: 1,
}));

// End icon container
const EndIconContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "12px",
  top: "55%",
  transform: "translateY(-50%)",
  zIndex: 1,
}));

// The actual input component
const StyledInput = styled(InputBase)(
  ({ theme, hasStartIcon, hasEndIcon, error, success }) => {
    const isError = error;
    const isSuccess = success && !error;

    return {
      width: "100%",
      "& .MuiInputBase-input": {
        borderRadius: 4,
        border: `1px solid ${
          isError
            ? theme.palette.error.main
            : isSuccess
            ? theme.palette.success.main
            : "#E0E3E7"
        }`,
        backgroundColor: isError
          ? alpha(theme.palette.error.main, 0.08)
          : isSuccess
          ? alpha(theme.palette.success.main, 0.08)
          : "#F3F6F9",
        padding: "10px 12px",
        paddingLeft: hasStartIcon ? "40px" : "12px",
        paddingRight: hasEndIcon ? "40px" : "12px",
        fontSize: 14,
        width: "100%",
        "&:focus": {
          boxShadow: `${alpha(
            isError
              ? theme.palette.error.main
              : isSuccess
              ? theme.palette.success.main
              : theme.palette.primary.main,
            0.25
          )} 0 0 0 0.2rem`,
          borderColor: isError
            ? theme.palette.error.main
            : isSuccess
            ? theme.palette.success.main
            : theme.palette.primary.main,
        },
      },
    };
  }
);

// Helper text component
const HelperText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
}));

export default function Input({
  label,
  placeholder = "placeholder text",
  icon,
  endIcon, // Added endIcon prop
  error = false,
  success = false,
  helperText,
  fullWidth = false,
  value,
  onChange,
  ...rest
}) {
  return (
    <InputContainer sx={{ width: fullWidth ? "100%" : "auto" }}>
      {/* Label outside the FormControl */}
      {label && <Label>{label}</Label>}

      <InputWrapper>
        {/* Start icon if provided */}
        {icon && <StartIconContainer>{icon}</StartIconContainer>}

        {/* End icon if provided */}
        {endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}

        {/* The actual input */}
        <StyledInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          hasStartIcon={!!icon}
          hasEndIcon={!!endIcon}
          error={error}
          success={success}
          {...rest}
        />
      </InputWrapper>

      {/* Helper text */}
      {helperText && (
        <HelperText
          color={error ? "error" : success ? "success.main" : "textSecondary"}
        >
          {helperText}
        </HelperText>
      )}
    </InputContainer>
  );
}
