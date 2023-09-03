"use client";

import { userStore } from "@/store/userStore";
import { Session } from "next-auth";
import { useRef } from "react";

interface Props {
  session: Session;
}

export const UserStoreInitializer = ({ session }: Props) => {
  const initialized = useRef(false);
  if (!initialized.current) {
    userStore.setState({
      email: session.user.email,
      id: session.user.id,
      picture: session.user.image,
    });
    initialized.current = true;
  }

  return null;
};
