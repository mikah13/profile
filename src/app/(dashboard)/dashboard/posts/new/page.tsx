
"use client"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import React from 'react'
import { useForm } from "react-hook-form"
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
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { createNewPost } from "./actions"
import { useToast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
type Props = {}

const formSchema = z.object({
    title: z.string().min(2, { message: "Post title is required" }).max(1000),
    content: z.string().min(1, {
        message: "Post content is required"
    }),
    thumbnail: z.string(),
    draft: z.boolean()
})



const NewPost = (props: Props) => {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
            thumbnail: "",
            draft: true,
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        let newPost = await createNewPost(values)
        if (newPost) {
            toast({
                description: "A new post has been created successfully",
            })
            form.reset();
        }
        else {

        }


    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Title *</FormLabel>
                            <FormControl>
                                <Input placeholder="Post title" {...field} />
                            </FormControl>
                            <FormMessage className="dark:text-red-400" />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Content *</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Content goes here..."
                                    className="min-h-[200px]"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage className="dark:text-red-400" />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="draft"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">

                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />

                            </FormControl>

                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    Save to draft
                                </FormLabel>

                            </div>
                        </FormItem>
                    )}
                />



                <Button type="submit">Submit</Button>

            </form>
            {/* <RichTextExample /> */}
        </Form>
    )
}

export default NewPost