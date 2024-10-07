import { useSnackbar, VariantType } from 'notistack';
import React from 'react';

let useSnackbarRef: ReturnType<typeof useSnackbar> | null = null;

export const SnackbarUtilsConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const SnackbarUtilities = {
  success(msg: string) {
    this.toast(msg, 'success');
  },
  error(msg: string) {
    this.toast(msg, 'error');
  },
  toast(msg: string, variant: VariantType = 'default') {
    if (useSnackbarRef) {
      useSnackbarRef.enqueueSnackbar(msg, { variant });
    } else {
      console.warn('Snackbar reference not initialized');
    }
  },
};
