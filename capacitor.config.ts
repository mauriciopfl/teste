import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.moneycontrol',
  appName: 'moneycontrol',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
