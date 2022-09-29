if (process.env.VITE_APP_VERSION === undefined) {
    const now = new Date();
    process.env.VITE_APP_VERSION = `${now.getUTCFullYear() - 2000}.${now.getUTCMonth() + 1}.${now.getUTCDate()}-${
        now.getUTCHours() * 60 + now.getUTCMinutes()
    }`;
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
    directories: {
        output: 'dist',
        buildResources: 'buildResources',
    },
    files: ['packages/renderer/src/index.ts', 'packages/**/dist/**'],
    extraMetadata: {
        version: process.env.VITE_APP_VERSION,
    },
    linux: {
        target: ['AppImage'],
        category: 'Development',
        icon: 'assets/icons/icon.png',
    },
    win: {
        target: 'nsis',
        icon: 'assets/icons/icon.ico',
    },
};

module.exports = config;
