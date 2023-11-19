import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.example.app',
    appName: 'todo-list-app',
    webDir: 'dist',
    server: {
        androidScheme: 'https'
    }
};

export default config;
