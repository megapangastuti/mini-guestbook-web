export type TableColumn<T = any> = {
  key: keyof T | string;

  label: string;

  className?: string;

  render?: (item: T) => React.ReactNode;
};
