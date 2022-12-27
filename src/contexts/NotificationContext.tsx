import { message } from "antd";
import React, { createContext, useState } from "react";

export enum enumMessageType {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface INotificationContext {
  openMessage(key: string, type: enumMessageType, content: string): void;
}

const initState = {
  openMessage(key, type, content) {},
} as INotificationContext;

export const NotificationContext =
  createContext<INotificationContext>(initState);

const NotificationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const openMessage = (key: string, type: enumMessageType, content: string) => {
    messageApi.open({
      key,
      type,
      content,
    });
  };

  const contextValue = { openMessage } as INotificationContext;

  return (
    <NotificationContext.Provider value={contextValue}>
      {contextHolder}
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
