import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const routesPath = join(process.cwd(), 'dist', '_routes.json');

if (!existsSync(routesPath)) {
  console.log('ℹ️  _routes.json not found (normal in server mode)');
  process.exit(0);
}

try {
  const routes = JSON.parse(readFileSync(routesPath, 'utf-8'));
  
  // Add API routes to includes
  if (!routes.include) routes.include = [];
  if (!routes.exclude) routes.exclude = [];
  
  const apiRoutes = ['/api/*'];
  apiRoutes.forEach(route => {
    if (!routes.include.includes(route)) {
      routes.include.push(route);
    }
  });
  
  writeFileSync(routesPath, JSON.stringify(routes, null, 2));
  console.log('✅ _routes.json updated successfully');
} catch (error) {
  console.log('ℹ️  Could not update _routes.json:', error.message);
}
