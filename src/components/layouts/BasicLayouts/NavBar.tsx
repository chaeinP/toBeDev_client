import Link from 'next/link';

export default function NavBar() {
  const menuInfo = [
    { title: '취업교육정보', to: '/bootcamp' },
    { title: '교육후기', to: '/review' },
    { title: '칼럼', to: '/article' },
  ];
  return (
    <div>
      <nav>
        <ul>
          {menuInfo.map((menu) => {
            return (
              <li>
                <Link href={menu.to}>{menu.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
