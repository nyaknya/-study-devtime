export type SignupRequest = {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
};

export type SignupResponse = {
  success: boolean;
  message: string;
};

export type CheckEmailResponse = {
  success: boolean;
  available: boolean;
  message: string;
};

export type CheckNicknameResponse = {
  success: boolean;
  available: boolean;
  message: string;
};
