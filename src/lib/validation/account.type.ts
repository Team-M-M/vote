export type FormType = {
  senderName: string;
  senderPhone: string;
  senderContent: string;
  accessKey: number;
  phone: string;
};

export type RegisterType = keyof FormType;
