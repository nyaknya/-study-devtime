import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>
        <h1></h1>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard">대시보드</Link>
            </li>
            <li>
              <Link href="/ranking">랭킹</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/auth/login">로그인</Link>
            </li>
            <li>
              <Link href="/auth/join">회원가입</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}