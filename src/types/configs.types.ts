export type RegexConfig = {
  regex: string;
  replace: string;
};

export type OptionalConfig<T> = {
  enabled: boolean;
  value: T;
};

export type Options = {
  title: OptionalConfig<RegexConfig[]>;
  reviewer: OptionalConfig<string>;
  assignToMe: boolean;
};
