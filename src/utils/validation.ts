export const validateEmail = (email: string): string | undefined => {
  if (!email) return '이메일을 입력해 주세요.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return '이메일 형식으로 작성해 주세요.';
};

export const validateNickname = (nickname: string): string | undefined => {
  if (!nickname) return '닉네임을 입력해 주세요.';
};

export const validatePassword = (password: string): string | undefined => {
  if (!password) return '비밀번호를 입력해 주세요.';
  if (!/^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(password)) return '비밀번호는 8자 이상, 영문과 숫자 조합이어야 합니다.';
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string | undefined => {
  if (!confirmPassword) return '비밀번호를 다시 입력해 주세요.';
  if (password !== confirmPassword) return '비밀번호가 일치하지 않습니다.';
};
