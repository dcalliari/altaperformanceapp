const wdio = require('webdriverio');
const assert = require('assert');

const opts = {
    hostname: process.env.APPIUM_HOST || '127.0.0.1',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities: {
        platformName: 'Android',
        'appium:platformVersion': '11',
        'appium:deviceName': 'emulator-5554',
        'appium:app': process.env.APP_PATH || 'android/app/build/outputs/apk/debug/app-debug.apk',
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'com.booude.altaperformanceapp',
        'appium:appActivity': 'com.booude.altaperformanceapp.MainActivity',
        'appium:noReset': true,
    },
};

async function main() {
    const client = await wdio.remote(opts);

    try {
        // Wait for the app to load
        await client.pause(5000);

        // Find the input by testID
        const input = await client.$('~nameInput');
        await input.setValue('Test User');

        // Find the button by testID
        const button = await client.$('~greetButton');
        await button.click();

        // Check the greeting text
        const greeting = await client.$('~greetingText');
        const text = await greeting.getText();
        assert.strictEqual(text, 'Olá, Test User!');

        console.log('Test passou!');
    } finally {
        await client.deleteSession();
    }
}

main().catch(console.error);