#!/bin/bash

echo "🚀 Building ZyatrIA Global for Cloudflare Pages (SERVER MODE)"
echo "============================================================"

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/
rm -rf .astro/

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit

# Build in server mode
echo "🔨 Building in SERVER mode..."
npm run build

# Verify _worker.js exists
if [ -f "dist/_worker.js" ]; then
    echo "✅ SUCCESS: _worker.js generated (SERVER MODE)"
    echo "📊 File size: $(du -h dist/_worker.js | cut -f1)"
else
    echo "❌ ERROR: _worker.js NOT found (STATIC MODE detected)"
    echo "🔍 Checking dist/ contents..."
    ls -la dist/
    exit 1
fi

# Verify API routes
if [ -d "dist/_worker.js" ] || [ -f "dist/_worker.js" ]; then
    echo "✅ API routes will be available"
else
    echo "⚠️  WARNING: No worker file found"
fi

echo ""
echo "✨ Build complete and ready for Cloudflare Pages!"
echo "📁 Output directory: dist/"
echo ""
