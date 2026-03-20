import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { checkEmail as checkEmailApi, checkNickname as checkNicknameApi, signup } from '@/services/auth';
import { validateEmail, validateNickname, validatePassword, validateConfirmPassword } from '@/utils/validation';
import type { AxiosError } from 'axios';

const getErrorMessage = (error: unknown) =>
  (error as AxiosError<{ message: string }>)?.response?.data?.message;

const getDuplicateHelper = (
  isAvailable: boolean,
  isTaken: boolean,
  availableMessage?: string,
  takenMessage?: string,
) => {
  if (isAvailable) return { text: availableMessage, type: 'success' as const };
  if (isTaken) return { text: takenMessage, type: 'error' as const };
  return { text: undefined, type: undefined };
};

export const useSignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string | undefined>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setFieldError = (field: string, message?: string) =>
    setValidationErrors((prev) => ({ ...prev, [field]: message }));

  const {
    mutate: checkEmail,
    data: emailData,
    error: emailError,
    isSuccess: isEmailAvailable,
    isError: isEmailTaken,
  } = useMutation({ mutationFn: checkEmailApi });

  const {
    mutate: checkNickname,
    data: nicknameData,
    error: nicknameError,
    isSuccess: isNicknameAvailable,
    isError: isNicknameTaken,
  } = useMutation({ mutationFn: checkNicknameApi });

  const { mutate: signupMutate } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      router.replace('/login');
    },
  });

  const validators: Record<string, () => string | undefined> = {
    email: () => validateEmail(formData.email),
    nickname: () => validateNickname(formData.nickname),
    password: () => validatePassword(formData.password),
    confirmPassword: () => validateConfirmPassword(formData.password, formData.confirmPassword),
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setFieldError(name, validators[name]?.());
  };

  const isSubmitEnabled =
    !Object.values(validationErrors).some(Boolean) &&
    isEmailAvailable &&
    isNicknameAvailable &&
    isTermsAgreed &&
    !!formData.email &&
    !!formData.nickname &&
    !!formData.password &&
    !!formData.confirmPassword;

  const emailHelper = validationErrors.email
    ? { text: validationErrors.email, type: 'error' as const }
    : getDuplicateHelper(isEmailAvailable, isEmailTaken, emailData?.message, getErrorMessage(emailError));

  const nicknameHelper = validationErrors.nickname
    ? { text: validationErrors.nickname, type: 'error' as const }
    : getDuplicateHelper(isNicknameAvailable, isNicknameTaken, nicknameData?.message, getErrorMessage(nicknameError));

  return {
    formData,
    handleChange,
    isTermsAgreed,
    setIsTermsAgreed,
    validationErrors,
    emailHelper,
    nicknameHelper,
    handleBlur,
    isSubmitEnabled,
    checkEmail: () => checkEmail(formData.email),
    checkNickname: () => checkNickname(formData.nickname),
    handleSubmit: (e: React.FormEvent) => {
      e.preventDefault();
      signupMutate(formData);
    },
  };
};
