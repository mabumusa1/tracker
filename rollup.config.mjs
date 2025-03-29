import typescript from '@rollup/plugin-typescript';

import devConfig from './rollup.config.dev.mjs';
import prodConfig from './rollup.config.prod.mjs';

// Check if production flag is set
const isProd = process.env.NODE_ENV === 'production';

const commonConfig = {
  input: 'src/index.ts',
  output: {
    file: 'dist/tracker.js',
    format: 'umd',
    name: 'Tracker',
    sourcemap: true 
  },
  plugins: [typescript({
    sourceMap: true
  })],
};

// Export the appropriate configuration based on environment
const config = isProd
  ? { ...commonConfig, ...prodConfig }
  : { ...commonConfig, ...devConfig };

export default config;