/**
 * Determine the current environment the server is running on.
 * Change environment variables only if we are running locally.
 * Development and QA environments have separate databases
 */

let env = process.env.NODE_ENV || 'dev';

if (env === 'dev' || env === 'qa') {
    const config = require('./config.json');
    const envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}
