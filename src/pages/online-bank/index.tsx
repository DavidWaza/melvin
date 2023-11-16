import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Text } from "@/src/component/Typhography/Typography";

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
        ;
      </div>
    );
  }
  return (
    <div className="max-w-2xl m-auto my-[5rem] px-5">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />
        <ValidationError
          prefix="firstName"
          field="name"
          errors={state.errors}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />
        <ValidationError prefix="lastName" field="name" errors={state.errors} />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full bg-white p-3 border border-slate-300 my-3"
        />

        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
        <div className="flex flex-col w-full md:w-[40%] xl:w-[20%] mt-10">
          <button
            type="submit"
            disabled={state.submitting}
            className="border border-slate-600 px-4 py-2 bg-blue-800 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
