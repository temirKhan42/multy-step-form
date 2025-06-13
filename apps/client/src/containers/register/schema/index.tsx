'use client';

import { z } from "zod";
import { TObjectKeyString } from "../../../core/types";
import { TPerson } from '../../../core/types/register';

const schemaPersonInfo = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email"),
  phone: z
    .string({ required_error: "Phone is required" })
    .regex(/^\d{11}$/, "Invalid phone number"),
});

const passwordRequirements = z
  .string()
  .min(8, "Minimum 8 characters")
  .regex(/[A-Z]/, "Minimum 1 capital letter")
  .regex(/[a-z]/, "Minimum 1 lowercase letter")
  .regex(/[0-9]/, "Minimum 1 digit")
  .regex(/[^A-Za-z0-9]/, "Minimum 1 special character");

const schemaPassword = z
  .object({
    password: passwordRequirements,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export const validatePersonInfo = async (
  data: TPerson, 
  setErrors: (val: TObjectKeyString) => void,
  onSuccess: () => void,
  type: 'password'|'general' = 'general'
) => {
  const result = type === 'general' ? 
    schemaPersonInfo.safeParse(data) :
    schemaPassword.safeParse(data);

  if (result.success) {
    setErrors({});
    onSuccess();
  } else {
    const formattedErrors: TObjectKeyString = {};
    for (const issue of result.error.issues) {
      if (issue.path[0]) {
        formattedErrors[issue.path[0] as string] = issue.message;
      }
    }
    setErrors(formattedErrors);
  }
};
