type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<E> & {
    as?: E;
  }
>;

export function Typography<E extends React.ElementType = "p">({
  as,
  children,
  ...props
}: PolymorphicProps<E>) {
  const Component = as || "p";
  return <Component {...props}>{children}</Component>;
}
