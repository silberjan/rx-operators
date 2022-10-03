// rollup.config.js
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
  },
  external: ['rxjs', '@ngrx/store'],
  plugins: [
    typescript({
      exclude: `**/*.spec.ts`,
      outDir: `dist`,
    }),
  ],
}
