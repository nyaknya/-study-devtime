import axiosInstance from '@/lib/axios';
import type { CheckEmailResponse, CheckNicknameResponse, SignupRequest, SignupResponse } from '@/types/auth';

export const checkEmail = (email: string) =>
  axiosInstance.get<CheckEmailResponse>('/api/signup/check-email', { params: { email } }).then(res => res.data);

export const checkNickname = (nickname: string) =>
  axiosInstance.get<CheckNicknameResponse>('/api/signup/check-nickname', { params: { nickname } }).then(res => res.data);

export const signup = (data: SignupRequest) =>
  axiosInstance.post<SignupResponse>('/api/signup', data);