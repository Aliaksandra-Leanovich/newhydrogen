import {useLocation} from '@remix-run/react';
import {type ReactNode} from 'react';
import {Link} from '~/components';

export const ProductOptionLink = ({
  optionName,
  optionValue,
  searchParams,
  children,
  ...props
}: {
  optionName: string;
  optionValue: string;
  searchParams: URLSearchParams;
  children?: ReactNode;
  [key: string]: any;
}) => {
  const {pathname} = useLocation();
  const isLangPathname = /\/[a-zA-Z]{2}-[a-zA-Z]{2}\//g.test(pathname);

  const path = isLangPathname
    ? `/${pathname.split('/').slice(2).join('/')}`
    : pathname;

  const clonedSearchParams = new URLSearchParams(searchParams);
  clonedSearchParams.set(optionName, optionValue);

  return (
    <div>
      <Link
        {...props}
        preventScrollReset
        prefetch="intent"
        replace
        to={`${path}?${clonedSearchParams.toString()}`}
      >
        {children ?? optionValue}
      </Link>
    </div>
  );
};
