"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("access_token", token);

      window.location.href = "/";
    }
  }, []);

  return (
    <div className="container">
      <Button
        onClick={() => {
          toast({
            title: "Hello, world!",
            description: "This is a toast message.",
          });
        }}
      >
        Click me
      </Button>
    </div>
  );
}
