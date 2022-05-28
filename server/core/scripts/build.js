const esbuild = require('esbuild')

const args = process.argv

const NODE_ENV = args[2]

esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  sourcemap: true,
  outfile: 'dist/index.js',
  define: {
    'process.env.NODE_ENV': NODE_ENV ? `"${NODE_ENV}"` : '"production"'
  },
  external: ['prisma', '@prisma/client', 'express']
})
