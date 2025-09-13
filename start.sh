#!/bin/bash

echo "👥 Starting Admin Dashboard..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  .env.local file not found! Creating from .env.example..."
    cp .env.example .env.local
    echo "Please update .env.local with your configuration"
fi

# Start the development server on port 3001
echo "✅ Starting Next.js admin dashboard..."
PORT=3001 npm run dev