import axiosInstance from '@/lib/axios';
import type { SignupRequest, SignupResponse } from '@/types/auth';

export const checkEmail = (email: string) =>
  axiosInstance.get('/api/signup/check-email', { params: { email } });


export const checkNickname  = (nickname: string) =>
  axiosInstance.get('/api/signup/check-nickname', { params: { nickname } });

export const signup = (data: SignupRequest) =>
  axiosInstance.post<SignupResponse>('/api/signup', data);