#!/usr/bin/env pwsh
Write-Host "🚀 DÉPLOIEMENT CLOUDFLARE - CORRECTION COMPLÈTE" -ForegroundColor Cyan
Write-Host "=================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "🧹 Étape 1/5: Nettoyage..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dist, .astro, node_modules/.vite -ErrorAction SilentlyContinue
Write-Host "✅ Nettoyage terminé" -ForegroundColor Green
Write-Host ""

Write-Host "🔧 Étape 2/5: Vérification de fix-routes.js..." -ForegroundColor Yellow
if (!(Test-Path "fix-routes.js")) {
    @"
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
const routesPath = join(process.cwd(), 'dist', '_routes.json');
if (!existsSync(routesPath)) {
  console.log('ℹ️  _routes.json not found (normal in server mode)');
  process.exit(0);
}
try {
  const routes = JSON.parse(readFileSync(routesPath, 'utf-8'));
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