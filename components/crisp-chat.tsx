"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("97b57a7a-3746-4bd4-9113-d79d8e115712");
  }, []);

  return null;
};
