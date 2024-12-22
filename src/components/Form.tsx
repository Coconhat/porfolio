import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { RainbowButton } from "@/components/ui/rainbow-button";

interface ContactFormProps {
  handleModalOpen: () => void;
}

interface FormErrors {
  email: boolean;
  message: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ handleModalOpen }) => {
  const [state, handleSubmit] = useForm("mbllrbgk");
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: false,
    message: false,
  });
  const [touched, setTouched] = useState<FormErrors>({
    email: false,
    message: false,
  });

  const validateForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const email = form.email.value;
    const message = form.message.value;

    const errors = {
      email: !email.trim(),
      message: !message.trim(),
    };

    setFormErrors(errors);
    setTouched({
      email: true,
      message: true,
    });

    if (!errors.email && !errors.message) {
      handleSubmit(event);
    }
  };

  const handleBlur = (field: keyof FormErrors) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={validateForm} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleBlur("email")}
            className={`block w-full rounded-md border ${
              formErrors.email && touched.email
                ? "border-red-500"
                : "border-gray-200"
            } py-3 px-4 text-gray-900 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none transition-colors`}
            placeholder="you@example.com"
          />
          {formErrors.email && touched.email && (
            <p className="mt-1 text-sm text-red-500">
              Please enter your email address
            </p>
          )}
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-1 text-sm text-red-500"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            onBlur={() => handleBlur("message")}
            className={`block w-full rounded-md border ${
              formErrors.message && touched.message
                ? "border-red-500"
                : "border-gray-200"
            } py-3 px-4 text-gray-900 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 outline-none transition-colors resize-none`}
            placeholder="Say hi!"
          />
          {formErrors.message && touched.message && (
            <p className="mt-1 text-sm text-red-500">
              Please enter your message
            </p>
          )}
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-1 text-sm text-red-500"
          />
        </div>

        <div className="pt-2">
          <RainbowButton
            type="submit"
            disabled={state.submitting}
            className={`w-full rounded-md bg-black py-3 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors
              ${state.submitting ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </RainbowButton>
        </div>

        {state.succeeded && (
          <div className="mt-4 text-sm text-green-600 text-center">
            Thanks for your message! I will be in touch soon. 🎉
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
