export type UrlProps = {
  name: string;
  href?: string;
  icon?: React.ReactNode;
  sub?: UrlProps[];
};
