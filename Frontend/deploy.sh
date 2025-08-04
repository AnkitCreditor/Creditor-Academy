#!/bin/bash

# --- CONFIG ---
APP_NAME="Creditor-Academy-Frontend"
PROJECT_DIR="/var/www/Creditor-Academy/Frontend"
BUILD_DIR="$PROJECT_DIR/dist"    # change to 'build' if that's your output folder
DOMAIN="creditoracademy.com"
BRANCH="main"

echo "🔄 Starting deployment for $APP_NAME..."

# Step 1: Go to project directory
cd $PROJECT_DIR || { echo "❌ Cannot access $PROJECT_DIR"; exit 1; }

# Step 2: Fetch latest code from GitHub
echo "📡 Pulling latest code from GitHub [$BRANCH branch]..."
git fetch origin
git reset --hard origin/$BRANCH || { echo "❌ Git pull failed"; exit 1; }

# Step 3: Install dependencies
echo "📦 Installing npm packages..."
npm install || { echo "❌ npm install failed"; exit 1; }

# Step 4: Build frontend
echo "🏗️ Building frontend..."
npm run build || { echo "❌ Build failed"; exit 1; }

# Step 5: Set permissions
echo "🔐 Setting permissions..."
chown -R www-data:www-data $BUILD_DIR
chmod -R 755 $BUILD_DIR

# Step 6: Reload Nginx
echo "🌐 Reloading Nginx..."
nginx -t && systemctl reload nginx || { echo "❌ Nginx reload failed"; exit 1; }

echo "✅ Deployment complete! Visit: http://$DOMAIN"

