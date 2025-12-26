export const services = {
  picsumList: "/list",
} as const;

export type ServiceName = keyof typeof services;
