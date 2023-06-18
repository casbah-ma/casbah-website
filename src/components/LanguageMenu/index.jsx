import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Button, List, ListItem } from './LanguageMenu.styles';
import LangIcon from '@/icons/LanguageIcon';
import ChevronDown from '@/icons/ArrowDown';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LanguageMenu() {
  const router = useRouter();

  const { t } = useTranslation();
  return (
    <Menu as="div" className="relative inline-block">
      <div className='w-full h-full flex items-center'>
        <Button>
          <span>
            <LangIcon />
          </span>
          <span>
            <ChevronDown />
          </span>
        </Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <List>
          {router.locales.map((lang) => (
            <Menu.Item
              as="div"
              key={lang}
              className="w-full flex justify-center"
            >
              {({ active }) => (
                <Link href={router.asPath} locale={lang} className="w-full">
                  <ListItem active={active}>{t(lang)}</ListItem>
                </Link>
              )}
            </Menu.Item>
          ))}
        </List>
      </Transition>
    </Menu>
  );
}
