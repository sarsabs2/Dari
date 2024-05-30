'use client';
import {
  BuildingStorefrontIcon,
  HeartIcon,
  UsersIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

export function NavigationBottom2() {
  const Menus = [
    {name: 'Home', icon: UsersIcon, href: '/'},
    {name: 'Home', icon: HeartIcon, href: '/aaz'},
    {
      name: 'Profile',
      icon: BuildingStorefrontIcon,
      href: '/ads'
    },
    {
      name: 'setting',
      icon: Cog6ToothIcon,
      href: '/qsq'
    }
  ];
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 w-full">
      <ul className="navigation w-full flex space-x-5 h-20">
        {Menus.map((menu, i) => (
          <li key={i} className={clsx('', {active: pathname === menu.href})}>
            <Link href={menu.href}>
              <span className="icons ">
                <menu.icon className="z-20 h-8 w-8" />
              </span>
              <span className="texticon">{menu.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
