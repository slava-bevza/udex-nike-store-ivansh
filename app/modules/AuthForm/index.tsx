import { Form } from "@remix-run/react";
import React from "react";
import { cn } from "~/lib/utils";

export type AuthFormProps = {
  children: React.ReactNode;
  className?: string;
};

export const AuthForm: React.FC<AuthFormProps> = ({ children, className }) => {
  return (
    <Form
      method="post"
      className={cn(
        "h-screen max-w-96 mx-auto gap-6 flex flex-col justify-center items-center px-4 sm:px-0",
        className
      )}
    >
      {children}
    </Form>
  );
};
