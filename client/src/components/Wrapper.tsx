import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
  children?: ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({
  variant = "regular",
  children,
}) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};
