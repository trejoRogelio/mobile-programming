import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'photo-gallery',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
