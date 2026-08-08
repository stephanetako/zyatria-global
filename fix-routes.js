#!/usr/bin/env node

/**
 * Fix _routes.json to ensure homepage is handled by the worker
 * This script removes "/" from the exclude list
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const routesPath = join(process.cwd(), 'dist', '_routes.json');

try {
  // Read the routes file
  const routesContent = readFileSync(routesPath, 'utf-8');
  const routes = JSON.parse(routesContent);

  // Remove "/" from exclude list if it exists
  if (routes.exclude && Array.isArray(routes.exclude)) {
    routes.exclude = routes.exclude.filter(route => route !== '/');
    console.log('✅ Removed "/" from _routes.json exclude list');
  }

  // Write back the fixed routes
  writeFileSync(routesPath, JSON.stringify(routes, null, 2));
  console.log('✅ _routes.json fixed successfully!');
} catch (error) {
  console.error('❌ Error fixing _routes.json:', error.message);
  process.exit(1);
}
