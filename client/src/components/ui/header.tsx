import { ComponentProps, JSX, memo } from 'react';

const headerStrategies = {
  h1: h1Strategy,
  h2: h2Strategy,
  h3: h3Strategy
} as const;

type HeaderType = keyof typeof headerStrategies;

interface Props
  extends ComponentProps<'h1'>, ComponentProps<'h2'>, ComponentProps<'h3'> {
  type: HeaderType;
}

function Header(props: Props): JSX.Element {
  const { type, children, ...rest } = props;

  const HeaderFactory = headerStrategies[type];

  return <HeaderFactory {...rest}>{children}</HeaderFactory>;
}

function h1Strategy({ className, children }: ComponentProps<'h1'>) {
  return <h1 className={`text-2xl ${className}`}>{children}</h1>;
}

function h2Strategy({ className, children }: ComponentProps<'h2'>) {
  return <h2 className={`text-xl ${className}`}>{children}</h2>;
}

function h3Strategy({ className, children }: ComponentProps<'h3'>) {
  return <h3 className={`text-lg ${className}`}>{children}</h3>;
}

export default memo(Header);
