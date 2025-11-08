import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,

  ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
})
