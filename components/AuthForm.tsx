'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { set, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustonInput from "./CustonInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "@/lib/actions/user.actions";




export default function AuthForm( { type } : { type: string }){
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formSchama = authFormSchema(type);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchama>>({
    resolver: zodResolver(formSchama),
    defaultValues: {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchama>) {
    setIsLoading(true)
    try {
      if(type === 'sign-up') {
        const newUser = await signUp(values)
        setUser(newUser)
        console.log("newUser", newUser)
      }
      if(type === 'sign-in') {
        const response = await signIn({
          email: values.email,
          password: values.password,
        })
        if(response) router.push('/')
        
      }
      setIsLoading(true)
    }
    catch (error) {
      console.log(error)
      setIsLoading(false)
    }
    finally {
      setIsLoading(false)
    }
  }
  return (
    <div>
      <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
        <Link href={'/'} className="cursor-pointer items-center gap-2 flex">
          <Image src={'/icons/logo.svg'} width={34} height={34} alt="'/icons/logo.svg" />
 {        <h1 className="text-26 font-bold text-black-1">Bank</h1>}
        </Link>

          <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-26 font-semibold text-gray-900">
              {user ? 'Link Account': type === 'sign-up' ? 'Cadastro': 'Login'}
              <p className="text-16 font-normal text-gray-600">
                {user ? 'Crie sua conta para começar!': 'Faça login para continuar'}
              </p>
            </h1>
          </div>
        </header>
        {user ? ( <div className="flex flex-col gap-4">

        </div>): (
          <>
             <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {type === 'sign-up' && (
                  <>
                    <div className="flex gap-4">
                      <CustonInput form={form.control} label="Nome" name="firstName" placeholder="Qual o seu nome?"></CustonInput>
                      <CustonInput form={form.control} label="Sobrenome" name="lastName" placeholder="Qual o seu sobrenome?"></CustonInput>
                    </div>
                    <CustonInput form={form.control} label="CEP" name="postalCode" placeholder="Digite seu CEP"></CustonInput>
                    <div className="flex gap-4">
                      <CustonInput form={form.control} label="Estado" name="state" placeholder="Qual o seu estado? ex: São Paulo"></CustonInput>
                      <CustonInput form={form.control} label="Cidade" name="city" placeholder="Qual seu cidade?"></CustonInput>
                    </div>
                    <CustonInput form={form.control} label="Endereço" name="address" placeholder="Digite seu endereço"></CustonInput>
                    <div className="flex gap-4">
                      <CustonInput form={form.control} label="Data de Nascimento" name="dateOfBirth" placeholder="DD/MM/AAAA"></CustonInput>
                      <CustonInput form={form.control} label="CPF" name="cpf" placeholder="Digite seu CPF"></CustonInput>
                    </div>
                  </>
                )}
                <CustonInput form={form.control} label="Email" name="email" placeholder="Digite seu e-mail"></CustonInput>
                <CustonInput form={form.control} label="Senha" name="password" placeholder="Digite sua senha"></CustonInput>
                <div className="flex flex-col gap-4">
                  <Button type="submit" className="form-btn" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="animate-spin"></Loader2>
                        <span>Carregando...</span>
                      </>
                    ): 
                      type === 'sign-up' ? 'Cadastrar': 'Entrar'
                  }
                  </Button>
                </div>
              </form>
            </Form>
            <footer className="flex justify-center gap-1">
              <p className="text-14 font-normal text-gray-600">{type === 'sign-in' ? 'Não tem uma conta?': 'Já tem uma conta?'}</p>
              <Link href={type === 'sign-up' ? '/sign-in' : '/sign-up'} className="form-link hover:underline">
                {type === 'sign-in' ? 'Cadastre-se' : 'Login'}
              </Link>
            </footer>
          </>
        )}
      </section>
    </div>
  )
}