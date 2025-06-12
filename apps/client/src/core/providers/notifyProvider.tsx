import dynamic from 'next/dynamic';
import React, { createContext, ReactNode, useContext } from 'react';
import { TNotifyParams } from '../types';

type NotifyContextType = {
  openNotification: (val: TNotifyParams) => void;
}
type Props = {
  children: ReactNode;
}

const NotifyContext = createContext<NotifyContextType | undefined>(undefined);

const NotifyProvider = dynamic(
  () => import('antd').then((mod) => {
    const {notification} = mod;
    const Notify: React.FC<Props> = ({children}) => {
      const [api, contextHolder] = notification.useNotification();
      
      const openNotification = (note: TNotifyParams) => {
        api[note.type]({
          message: note.title,
          description: note.text,
        });
      };

      return (
        <NotifyContext.Provider value={{openNotification}}>
          {contextHolder}
          {children}
        </NotifyContext.Provider>
      );
    };
    return Notify;
  }), { ssr: false }
);

export const useNotify = () => {
  const context = useContext(NotifyContext);
  if (!context) throw new Error('useNotify must be used within NotifyProvider');
  return context;
};

export default NotifyProvider;