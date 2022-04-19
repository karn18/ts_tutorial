const { build } = require('esbuild')
console.log("⚡ Building something awesome 🍀")
const start = Date.now()
build({
  entryPoints: ['./src/index.ts'],
  outdir: './dist',
  minify: process.env.NODE_ENV === 'production',
  sourcemap: !(process.env.NODEV_ENV === 'production'),
  format: 'esm',
  bundle: true, 
})
.then(() => {
  console.log(`⚡ Build Done in ${Math.round(Date.now() - start)} ms. !!!`)
})
.catch(() => process.exit(1))