"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { Toaster } from "react-hot-toast"
import Login from "./login"

// Define the schema
const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
})

const CreateAccount = () => {

  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)


    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        toast.error('Failed to create user. Please try again.');
      }

      const data = await response.json()
      console.log('User created successfully:', data);

     toast.success('Account Created Succusfully');

      setTimeout(() => {
        router.push('/login');
      }, 2000);

    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  return (
    <>
    <div className="flex">
      <div className="page-width w-full">
        <div className="flex w-full justify-between">
           <div className="w-1/2 p-9">
              <h2 className="font-bold text-2xl uppercase">login</h2>
              <p className="text-lg">Welcome back!</p>
              <Login />
           </div>
           <div className="w-1/2 p-9">
           <h2 className="font-bold text-2xl uppercase">Create Account</h2>
           <p className="text-lg text-balance leading-6 mb-5">Create an account to access your profile info, order history, subscriptions, and more.</p>
           <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-lg font-bold">Username</FormLabel>
                <FormControl>
                  <Input className="h-14" placeholder="Nxkeeyyy" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-lg font-bold">Email</FormLabel>
                <FormControl>
                  <Input className="h-14" placeholder="Enter Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="uppercase text-lg font-bold">Password</FormLabel>
                <FormControl>
                  <Input className="h-14" placeholder="Enter Your Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="uppercase w-full bg-black text-white" type="submit">Submit</Button>
        </form>
      </Form>
           </div>
        </div>
      </div>
    </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  )
}

export default CreateAccount
