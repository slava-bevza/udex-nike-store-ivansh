import { ActionFunctionArgs } from "@remix-run/node";
import { json, Link, redirect } from "@remix-run/react";
import { getValidatedFormData, useRemixForm } from "remix-hook-form";
import nike from "~/assets/images/nike.png";
import { pb } from "~/lib/pb";
import { FormData, resolver } from "~/lib/schemas/sign-up";
import { AuthForm, Errors } from "~/modules";
import { Button, Heading, Input } from "~/shared/ui";

export default function SignUp() {
  const {
    register,
    formState: { errors },
  } = useRemixForm<FormData>({
    resolver,
    mode: "all",
  });

  return (
    <AuthForm className="gap-4">
      <img src={nike} alt="Nike" />
      <Heading className="uppercase">Become a nike member</Heading>
      <p className="text-center text-[#8D8D8D]">
        Create your Nike Member profile and get first access to the very best of
        Nike products, inspiration and community.
      </p>
      <Errors errors={errors} />
      <div className="flex flex-col w-full gap-3">
        <Input type="text" placeholder="Username" {...register("username")} />
        <Input
          type="email"
          placeholder="Email Address"
          {...register("email")}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          {...register("passwordConfirm")}
        />

        <Button className="h-14 text-xl font-light uppercase" type="submit">
          Join Us
        </Button>
        <div className="flex justify-center gap-1">
          <p className="text-[#8D8D8D]">Already a member?</p>
          <Link
            className="text-[#111111] font-medium underline capitalize"
            to="/sign-in"
          >
            Sign in.
          </Link>
        </div>
      </div>
    </AuthForm>
  );
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const { errors, data: user } = await getValidatedFormData<FormData>(
    request,
    resolver
  );
  if (errors) {
    // The keys "errors" and "defaultValues" are picked up automatically by useRemixForm
    return json({ errors });
  }

  try {
    await pb.collection("users").create({ ...user });
    await pb.collection("users").authWithPassword(user.email, user.password);
  } catch (error) {
    console.log(JSON.stringify(error));
  }

  return redirect("/?success=true");
};
