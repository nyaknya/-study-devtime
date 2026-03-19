'use client';

import VerticalLogo from '@/assets/images/logo-vertical.svg';
import SymbolLogo from '@/assets/images/logo-symbol.svg';
import Button from '@/components/Button';
import FormField from '@/components/FormField';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 relative">
      {/* 컴포넌트로 분리할것 */}
      <SymbolLogo
        width={1090}
        height={530}
        className="absolute -right-1/12 top-16"
        alt="배경 로고"
        aria-hidden
      />
      <div className="max-w-125 w-full h-149.5 px-21.5 flex flex-col justify-center content-center gap-12 rounded-[10px] bg-white/50 shadow-[0_40px_100px_40px_rgba(3,104,255,0.05)] backdrop-blur-[25px]">
        {/* TODO: 로고 공통 컴포넌트 분리 필요 */}
        <VerticalLogo
          width={132}
          height={100}
          alt="Devtime 로고"
          className="self-center"
        />

        <form className="flex flex-col">
          <FormField
            label="아이디"
            id="username"
            placeholder="이메일 주소를 입력해 주세요."
            className="mb-9"
          />

          <FormField
            label="비밀번호"
            id="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            className="mb-12"
          />
          {/* TODO: disabled 설정 필요 */}
          <Button type="submit" variant="primary" fullWidth>
            로그인
          </Button>

          <Link
            href="/signup"
            className="text-center text-primary body-m pt-6"
          >
            회원가입
          </Link>
        </form>
      </div>
    </div>
  );
}
