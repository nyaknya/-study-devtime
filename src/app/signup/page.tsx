'use client';

import VerticalLogoWhite from '@/assets/images/logo-vertical-white.svg';
import Button from '@/components/Button';
import Link from 'next/link';
import { useState } from 'react';
import CheckIcon from '@/assets/icons/check.svg';
import { TERMS_OF_SERVICE } from '@/constants/terms';

export default function SignupPage() {
  // 체크박스 구현용 임시 state. 향후 form데이터가 들어올 예정
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  const [isTermsAgreed, setIsTermsAgreed] = useState(false);

  return (
    <div className="max-h-screen flex">
      <div className="bg-primary flex flex-col items-center justify-center min-h-screen gap-9 relative w-1/2">
        <VerticalLogoWhite width={264} height={200} />
        <span className="title-s text-white">개발자를 위한 타이머</span>
      </div>
      <div className="min-h-screen w-1/2 flex flex-col items-center justify-center">
        <h2 className="title-b text-primary mb-9">회원가입</h2>

        <form className="flex flex-col max-w-105 w-full">
          <div className="flex flex-col gap-2 mb-9">
            <label htmlFor="username" className="label-m text-gray-600">
              아이디
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                id="username"
                placeholder="이메일 주소를 입력해 주세요."
                className="px-4 py-3 flex-1 bg-gray-50 rounded-[5px] outline-none focus:[outline:1.5px_solid_var(--color-fuchsia)] placeholder:text-gray-300 focus:text-gray-800 [&:not(:placeholder-shown):not(:focus)]:text-gray-600"
              />
              <Button variant="secondary" textStyle="label-s">
                중복 확인
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-9">
            <label htmlFor="nickname" className="label-m text-gray-600">
              닉네임
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                id="nickname"
                placeholder="닉네임을 입력해 주세요."
                className="px-4 py-3 flex-1 bg-gray-50 rounded-[5px] outline-none focus:[outline:1.5px_solid_var(--color-fuchsia)] placeholder:text-gray-300 focus:text-gray-800 [&:not(:placeholder-shown):not(:focus)]:text-gray-600"
              />
              <Button variant="secondary" textStyle="label-s">
                중복 확인
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-12">
            <label htmlFor="password" className="label-m text-gray-600">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해 주세요."
              className="px-4 py-3 flex-1 bg-gray-50 rounded-[5px] outline-none focus:[outline:1.5px_solid_var(--color-fuchsia)] placeholder:text-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2 mb-12">
            <label htmlFor="passwordConfirm" className="label-m text-gray-600">
              비밀번호 확인
            </label>
            <input
              type="password"
              id="passwordConfirm"
              placeholder="비밀번호를 다시 입력해 주세요."
              className="px-4 py-3 bg-gray-50 rounded-[5px] outline-none focus:[outline:1.5px_solid_var(--color-fuchsia)] placeholder:text-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2 mb-9">
            <div className="flex justify-between">
              <span className="label-m text-gray-600">이용약관</span>
              <div className="flex items-center gap-1.25">
                <label htmlFor="terms" className={`label-m ${isTermsAgreed ? 'text-primary' : 'text-primary-30'}`}>
                  동의함
                </label>
                <div className="relative size-4">
                  <input
                    type="checkbox"
                    id="terms"
                    onChange={() => setIsTermsAgreed((prev) => !prev)}
                    checked={isTermsAgreed}
                    className="size-4 rounded-[5px] border-primary border checked:bg-primary-10 checked:border-primary appearance-none"
                  />
                  {isTermsAgreed && (
                    <CheckIcon className="absolute size-4.5 left-1/2 top-1/2 -translate-1/2 pointer-events-none text-primary" />
                  )}
                </div>
              </div>
            </div>
            <div className="overflow-y-auto h-27.5 px-4 py-3 rounded-[5px] bg-gray-50 flex flex-col gap-2.5">
              {TERMS_OF_SERVICE.map((item) => (
                <div key={item.title}>
                  <p className="caption-b text-gray-600">{item.title}</p>
                  <p className="caption-r text-gray-600 whitespace-pre-wrap">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* TODO: disabled 설정 필요 */}
          <Button type="submit" variant="primary" fullWidth>
            회원가입
          </Button>

          <Link href="/signup" className="text-center text-primary body-m pt-6">
            회원이신가요? <b>로그인 바로가기</b>
          </Link>
        </form>
      </div>
    </div>
  );
}
