import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { checkEmail as checkEmailApi, checkNickname as checkNicknameApi } from '@/services/auth';
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

  const handleEmailBlur = () => setFieldError('email', validateEmail(formData.email));
  const handleNicknameBlur = () => setFieldError('nickname', validateNickname(formData.nickname));
  const handlePasswordBlur = () => setFieldError('password', validatePassword(formData.password));
  const handleConfirmPasswordBlur = () => setFieldError('confirmPassword', validateConfirmPassword(formData.password, formData.confirmPassword));

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
    handleEmailBlur,
    handleNicknameBlur,
    handlePasswordBlur,
    handleConfirmPasswordBlur,
    isSubmitEnabled,
    checkEmail: () => checkEmail(formData.email),
    checkNickname: () => checkNickname(formData.nickname),
  };
};
