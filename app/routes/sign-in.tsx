import { ActionFunctionArgs } from "@remix-run/node";
import { json, Link, redirect } from "@remix-run/react";
import { getValidatedFormData, useRemixForm } from "remix-hook-form";
import nike from "~/assets/images/nike.png";
import { Button, CheckBox, Heading, Input } from "~/shared/ui";
import { pb } from "~/lib/pb";
import { FormData, resolver } from "~/lib/schemas/sign-in";
import { AuthForm, Errors } from "~/modules";

export default function SignIn() {
  const {
    register,
    formState: { errors },
  } = useRemixForm<FormData>({
    resolver,
    mode: "all",
  });
  return (
    <AuthForm>
      <img src={nike} alt="Nike" />
      <Heading className="uppercase">Your account for everything nike</Heading>
      <Errors errors={errors} />
      <div className="flex flex-col w-full gap-4">
        <Input type="email" placeholder="Email" {...register("email")} />
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <div className="w-full flex flex-col sm:flex-row gap-2 justify-between items-center ">
        <div className="flex items-center gap-2 *:cursor-pointer">
          <CheckBox id="remember" />
          <label htmlFor="remember">Keep me signed in</label>
        </div>
        <p className="text-sm text-[#BCBCBC] cursor-pointer">
          Forgotten your password?
        </p>
      </div>
      <Button type="submit" className="w-full uppercase ">
        Sign In
      </Button>
      <div className="flex gap-1">
        <p className="text-[#8D8D8D]">Not a member?</p>
        <Link
          className="text-[#111111] font-medium underline capitalize"
          to="/sign-up"
        >
          Join Us.
        </Link>
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
    await pb.collection("users").authWithPassword(user.email, user.password);
  } catch (error) {
    const err = {
      message: "Invalid credentials. Please try again.",
    };
    console.log(JSON.stringify(error));
    return json({ errors: [err] });
  }

  return redirect("/?success=true");
};
