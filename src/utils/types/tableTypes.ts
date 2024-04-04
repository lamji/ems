export type Column = {
  id: string;
  label: string;
};

export type Row = {
  [key: string]: string | number;
};

export type Props = {
  columns: Column[];
  rows: Row[];
};
