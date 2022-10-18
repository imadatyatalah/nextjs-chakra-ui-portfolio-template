import { Box, Flex, Avatar, Text, Stack } from "@chakra-ui/react";

import { motion } from "framer-motion";

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const MotionBox = motion(Box);
export const MotionAvatar = motion(Avatar);
export const MotionText = motion(Text);
export const MotionStack = motion(Stack);
