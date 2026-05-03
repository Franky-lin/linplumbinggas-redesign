import fs from 'node:fs';

const packagePath = new URL('../package.json', import.meta.url);
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

pkg.scripts = {
  ...pkg.scripts,
  build: 'vite build',
  'build:client': 'vite build',
  preview: 'vite preview --host 0.0.0.0',
};

const moveToDependencies = [
  '@builder.io/vite-plugin-jsx-loc',
  '@tailwindcss/vite',
  '@vitejs/plugin-react',
  'tailwindcss',
  'tw-animate-css',
  'vite',
];

pkg.dependencies = pkg.dependencies || {};
pkg.devDependencies = pkg.devDependencies || {};

for (const name of moveToDependencies) {
  const version = pkg.devDependencies[name] || pkg.dependencies[name];
  if (!version) {
    if (name === 'vite') {
      pkg.dependencies[name] = '^5.4.20';
    }
    continue;
  }
  pkg.dependencies[name] = version;
  delete pkg.devDependencies[name];
}

// Keep esbuild as a devDependency only for local tooling; static deployment no longer invokes it.
if (!pkg.devDependencies.esbuild && pkg.dependencies.esbuild) {
  pkg.devDependencies.esbuild = pkg.dependencies.esbuild;
  delete pkg.dependencies.esbuild;
}

const sorted = (obj) => Object.fromEntries(Object.entries(obj || {}).sort(([a], [b]) => a.localeCompare(b)));
pkg.dependencies = sorted(pkg.dependencies);
pkg.devDependencies = sorted(pkg.devDependencies);

fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');
console.log('Updated package.json for static Vite deployment.');
