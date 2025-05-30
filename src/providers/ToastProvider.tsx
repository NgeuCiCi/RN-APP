import React, { createContext, useContext, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, ViewStyle } from 'react-native';
export enum ToastState {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
}

type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center-center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

type ToastType = 'success' | 'error' | 'warning';

interface CustomToastOptions {
  type?: ToastType;
  title?: string;
  position?: ToastPosition;
  duration?: number;
  isTitle?: boolean;
  delay?: number;
}

type ToastItem = {
  id: string;
  message: string;
  title?: string;
  position: ToastPosition;
  duration?: number;
  backgroundColor?: string;
  isTitle?: boolean;
};

const OPTS = {
  success: {
    _backgroundColor: 'green',
    _title: 'Success',
  },
  error: {
    _backgroundColor: 'red',
    _title: 'Error',
  },
  warning: {
    _backgroundColor: 'orange',
    _title: 'Warning',
  },
};

type ToastContextType = {
  ToastNoblandMessageMulti: (message: string, options?: CustomToastOptions) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const ToastNoblandMessageMulti = (
    message: string,
    {
      type = 'success',
      title = '',
      position = 'center-center',
      duration = 2000,
      isTitle = false,
      delay = 0,
    }: CustomToastOptions = {}
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    const { _backgroundColor, _title } = OPTS[type] || {};

    const newToast: ToastItem = {
      id,
      message,
      position,
      duration,
      isTitle,
      title: title || _title,
      backgroundColor: _backgroundColor,
    };

    setTimeout(() => {
      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }, delay);
  };

  return (
    <ToastContext.Provider value={{ ToastNoblandMessageMulti }}>
      {children}
      <View style={StyleSheet.absoluteFill}>
        {['top', 'center', 'bottom'].map((vertical) => {
          const verticalToasts = toasts.filter((t) => t.position.startsWith(vertical));
          if (verticalToasts.length === 0) return null;

          return (
            <View
              key={vertical}
              style={[styles.toastStack, getPositionStyle(vertical as 'top' | 'center' | 'bottom')]}>
              {verticalToasts.map((toast) => {
                const [, horizontal] = toast.position.split('-');

                return (
                  <View
                    key={toast.id}
                    style={[
                      styles.toastBox,
                      getAlignStyle(horizontal as 'center'),
                      {
                        backgroundColor: toast.backgroundColor || 'black',
                      },
                    ]}>
                    {toast.isTitle ? <Text style={styles.title}>{toast.title}</Text> : null}
                    <Text style={styles.message}>{toast.message}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </ToastContext.Provider>
  );
};

const styles = StyleSheet.create({
  toastStack: {
    position: 'absolute',
    width: '100%',
    zIndex: 9999,
    paddingHorizontal: 10,
  },
  toastBox: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%',
    elevation: 2,
    zIndex: 9999,
  },
  title: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
    fontSize: 20,
  },
  message: {
    color: '#fff',
    fontSize: 20,
  },
});

const getPositionStyle = (pos: 'top' | 'center' | 'bottom'): ViewStyle => {
  const { height } = Dimensions.get('window');
  switch (pos) {
    case 'top':
      return { top: 50 };
    case 'center':
      return { top: height / 2 - 50 };
    case 'bottom':
      return { bottom: 80 };
  }
};

const getAlignStyle = (align: 'left' | 'center' | 'right' = 'center'): ViewStyle => {
  switch (align) {
    case 'left':
      return { alignSelf: 'flex-start' };
    case 'right':
      return { alignSelf: 'flex-end' };
    case 'center':
    default:
      return { alignSelf: 'center' };
  }
};
