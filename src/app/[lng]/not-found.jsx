"use client";

import React from "react";

import NotFound from "../components/Not-Found";

import { useCurrentLang } from "../hooks/useCurrentLang";

export default function GlobalNotFound() {
  const lng = useCurrentLang();
  return <NotFound lng={lng} />;
}