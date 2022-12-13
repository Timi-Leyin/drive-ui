import { Box } from "@chakra-ui/react";
import constants from "@config/constants";
import { Moon, Sun } from "iconsax-react";
import { useState } from "react";

const ThemeToggle = () => {
    const [mode, setMode] = useState(constants.mode)
  return (
    <Box>
      {mode == "dark"?<Moon />:<Sun />}
    </Box>
  );
};
export default ThemeToggle;
