import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Heading, Text } from "@/src/component/Typhography/Typography";
import Link from "next/link";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvojnqzr");
  if (state.succeeded) {
    return (
      <div className="my-[5rem]">
        <Text variant="large" className="text-center mt-[10rem]">
          Thanks for submiting
        </Text>
        <Text variant="small" className="text-center">
          An email will be sent to your inbox shortly
        </Text>
      </div>
    );
  }
  return (
    <div className="max-w-2xl m-auto my-[10rem] px-5">
      <Heading variant="large" className="font-kanit text-center">
        Credit Agric
      </Heading>
      <Text className="text-center mb-10 font-lexend">Sign In</Text>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User ID"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />
        <ValidationError prefix="userID" field="name" errors={state.errors} />

        <input
          id="password"
          type="password"
          name="subject"
          placeholder="Password"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />

        <ValidationError
          prefix="AccountNumber"
          field="account number"
          errors={state.errors}
        />
        <p className="text-slate-500 flex justify-end">
          Forgot Password?{" "}
          <span className="text-blue-600 hover:text-blue-800 font-bold ml-2">
            <Link href={""}>Create Password</Link>
          </span>
        </p>
        <div className="flex flex-col w-full md:w-[40%] xl:w-[20%] mt-10">
          <button
            type="submit"
            disabled={state.submitting}
            className={`hover:bg-blue-900 border-none shadow-sm hover:shadow-none duration-300 ease-in border-slate-600 bg-blue-800 px-4 py-2 text-white`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
