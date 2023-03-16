import {Listbox} from '@headlessui/react';
import {useLocation} from '@remix-run/react';
import clsx from 'clsx';
import {useRef, type ReactNode} from 'react';
import {IconCaret, IconCheck, Link} from '~/components';

export const ProductOptionSelect = ({
  option,
  searchParamsWithDefaults,
}: {
  option: any;
  searchParamsWithDefaults: URLSearchParams;
}) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="relative w-full">
      <Listbox>
        {({open}) => (
          <>
            <Listbox.Button
              ref={closeRef}
              className={clsx(
                'flex items-center justify-between w-full py-3 px-4 border border-primary',
                open ? 'rounded-b md:rounded-t md:rounded-b-none' : 'rounded',
              )}
            >
              <span>{searchParamsWithDefaults.get(option.name)}</span>
              <IconCaret direction={open ? 'up' : 'down'} />
            </Listbox.Button>
            <Listbox.Options
              className={clsx(
                'border-primary bg-contrast absolute bottom-12 z-30 grid h-48 w-full overflow-y-scroll rounded-t border px-2 py-2 transition-[max-height] duration-150 sm:bottom-auto md:rounded-b md:rounded-t-none md:border-t-0 md:border-b',
                open ? 'max-h-48' : 'max-h-0',
              )}
            >
              {option.values.map((value: any) => (
                <Listbox.Option
                  key={`option-${option.name}-${value}`}
                  value={value}
                >
                  {({active}) => (
                    <ProductOptionLink
                      optionName={option.name}
                      optionValue={value}
                      className={clsx(
                        'text-primary w-full p-2 transition rounded flex justify-start items-center text-left cursor-pointer',
                        active && 'bg-primary/10',
                      )}
                      searchParams={searchParamsWithDefaults}
                      onClick={() => {
                        if (!closeRef?.current) return;
                        closeRef.current.click();
                      }}
                    >
                      {value}
                      {searchParamsWithDefaults.get(option.name) === value && (
                        <span className="ml-2">
                          <IconCheck />
                        </span>
                      )}
                    </ProductOptionLink>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};

function ProductOptionLink({
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
}) {
  const {pathname} = useLocation();
  const isLangPathname = /\/[a-zA-Z]{2}-[a-zA-Z]{2}\//g.test(pathname);
  // fixes internalized pathname
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
}
