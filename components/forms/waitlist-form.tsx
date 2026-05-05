"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type WaitlistFormValues = {
  name: string;
  email: string;
};

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const t = useTranslations("waitlistForm");

  const waitlistSchema = z.object({
    name: z.string().min(2, t("validation.name")),
    email: z.string().email(t("validation.email")),
  });

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { name: "", email: "" },
  });

  async function onSubmit(data: WaitlistFormValues) {
    setStatus("loading");
    void data;
    await new Promise((resolve) => setTimeout(resolve, 250));
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <p className="rounded-xl border border-primary/20 bg-secondary p-4 text-center text-sm font-medium text-secondary-foreground">
        {t("success")}
      </p>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("nameLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("namePlaceholder")} {...field} />
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
              <FormLabel>{t("emailLabel")}</FormLabel>
              <FormControl>
                <Input type="email" placeholder={t("emailPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={status === "loading"}>
          {status === "loading" ? t("submitting") : t("submit")}
        </Button>
      </form>
    </Form>
  );
}
