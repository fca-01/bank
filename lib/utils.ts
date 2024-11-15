import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const parseStringify = (data: any) => JSON.parse(JSON.stringify(data))

export const authFormSchema = (type: string) => z.object({
  email: z.string().email({
    message: "E-mail inválido"
  }),

  password: z.string().min(8, {
    message: "Senha deve ter no mínimo 8 caracteres"
  }),

  firstName: type === 'sign-in' ? z.string().optional() : z.string().min(2, {
    message: "Nome deve ter no mínimo 2 caracteres"
  }),

  lastName: type === 'sign-in' ? z.string().optional() : z.string().min(2, {
    message: "Sobrenome deve ter no mínimo 2 caracteres"
  }),

  address: type === 'sign-in' ? z.string().optional() : z.string().min(2, {
    message: "Sobrenome deve ter no mínimo 2 caracteres"
  }),
  
  city: type === 'sign-in' ? z.string().optional() : z.string().min(2, {
    message: "Sobrenome deve ter no mínimo 2 caracteres"
  }),

  state: type === 'sign-in' ? z.string().optional() : z.string().min(2, {
    message: "Sobrenome deve ter no mínimo 2 caracteres"
  }).max(2, {
    message: "Sobrenome deve ter no máximo 2 caracteres"
  }),

  postalCode: type === 'sign-in' ? z.string().optional() : z.string().min(2, {
    message: "Sobrenome deve ter no mínimo 2 caracteres"
  }),

  dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(2, {
    message: "Sobrenome deve ter no mínimo 2 caracteres"
  }),

  cpf: type === 'sign-in' ? z.string().optional() : z.string().min(2, {
    message: "Sobrenome deve ter no mínimo 2 caracteres"
  }),
  
})