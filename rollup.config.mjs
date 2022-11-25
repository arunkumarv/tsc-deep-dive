import typescript from 'rollup-plugin-ts';

export default {
  input: 'src/person.ts',
  output: [{
    file: 'dist/bundle.min.js',
    format: 'iife',
    name: 'client'
  }],
  plugins: [
    typescript()
  ]
};