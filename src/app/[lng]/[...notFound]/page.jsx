"use client";
import React from "react";
import NotFound from "@/app/components/Not-Found";
import { useCurrentLang } from "@/app/hooks/useCurrentLang";

export default function NotFoundPage() {
  const lng = useCurrentLang();
  return <NotFound lng={lng} />;
}
