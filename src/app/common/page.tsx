'use client';

import Button from '@/components/Button';

export default function CommonPage() {
  return (
    <>
      <h2>공통 컴포넌트 모음</h2>
      <div className="flex gap-2.5 p-10">
        <Button onClick={() => {}} variant="primary">
          Button
        </Button>
        <Button onClick={() => {}} variant="secondary">
          Button
        </Button>
        <Button onClick={() => {}} variant="tertiary">
          Button
        </Button>
      </div>
    </>
  );
}
