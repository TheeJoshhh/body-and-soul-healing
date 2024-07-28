"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

import { verifyEmail } from "@/actions/verify-email";

export default function VerifyEmailForm() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setError("The verification link is invalid. Please try again!");
      return;
    }
    verifyEmail(token)
      .then((res) => {
        setSuccess(res.success);
        setError(res.error);
      })
      .catch(() => {
        setError("Something went wrong! Please try again later.");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div>
      <CardWrapper
        headerHeading="Email Verification"
        headerLabel="Verifying your Email"
        backButtonHref="/auth/login"
        backButtonLabel="Back to login"
      >
        <div className="flex items-center w-full justify-center">
          {!success && !error && <CircleLoader />}
          <FormSuccess message={success} />
          <FormError message={error} />
        </div>
      </CardWrapper>
    </div>
  );
}
