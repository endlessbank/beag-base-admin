# Beag Base Admin Dashboard

A **production-ready admin panel** for managing users and subscriptions in your SaaS application. Monitor your customers, track subscription statuses, and sync data in real-time.

## 🎯 What This Is

This is a **complete admin dashboard** that provides:
- Real-time user and subscription management
- Comprehensive analytics and statistics
- Manual subscription syncing capabilities
- Secure admin authentication system
- Professional UI with modern design
- Copy-to-clipboard user management tools

**Perfect for**: SaaS founders and teams who need to monitor users, track subscription health, and manage customer data efficiently.

## ✨ Features

- 🔐 **Secure Authentication** - Environment-based admin login system
- 📊 **Real-time Statistics** - Total users + active subscriptions dashboard
- 👥 **User Management** - Paginated table with full user details
- 🔄 **Sync Integration** - Manual subscription sync with loading indicators
- 📅 **Complete User Data** - Email, creation date, status, plan, expiration, last sync
- 🎯 **Modern UI** - Clean gradient design with responsive layout
- 📋 **Admin Tools** - Copy-to-clipboard functionality for user emails
- 🎨 **Visual Indicators** - Color-coded status badges (active/cancelled/trial)
- 🔍 **Pagination** - Handle large user bases efficiently (10 per page)
- 📈 **Data Sorting** - Users sorted by creation date (newest first)

## 🚀 Quick Start Guide

### Prerequisites

- **Node.js 18+** (Download from [nodejs.org](https://nodejs.org))
- **Backend API** running on port 8000 (see [backend README](../backend/README.md))
- **PostgreSQL database** with user data

### Step 1: Get Your Admin Panel

**Option A: Use as Template Repository** ⭐ (Recommended)
```bash
# This repository should be set up as a GitHub template  
# Click "Use this template" button on GitHub
# Or clone if template not available:
git clone https://github.com/your-username/beag-base-admin.git my-saas-admin
cd my-saas-admin
```

**Option B: Clone Directly**
```bash
git clone https://github.com/your-username/beag-base-admin.git
cd beag-base-admin
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Configure Admin Access

```bash
# Copy the example environment file
cp .env.example .env.local
```

Edit `.env.local` with your admin configuration:
```env
# Backend API - Make sure this matches your backend URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000

# Admin Authentication - CHANGE THESE FOR PRODUCTION!
ADMIN_USERNAME=admin
ADMIN_PASSWORD=secure_admin_password_123

# App Branding
NEXT_PUBLIC_APP_NAME=My SaaS Admin Panel
```

⚠️ **Security Note**: Change the default admin credentials before deploying to production!

### Step 4: Start the Admin Dashboard

```bash
# This script will install dependencies and start the admin panel
./start.sh

# Or run manually:
npm run dev
```

Visit [http://localhost:3001](http://localhost:3001) to access your admin dashboard!

### Step 5: Login to Admin Panel

1. Go to [http://localhost:3001](http://localhost:3001)
2. Enter your admin credentials (from `.env.local`)
3. Access the full user management dashboard

## 📊 Admin Dashboard Overview

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout with admin styling
│   ├── page.tsx           # Admin login page
│   ├── dashboard/         # Protected admin dashboard
│   │   └── page.tsx      # Main dashboard with user management
│   └── api/auth/login/    # Login API route
├── components/
│   ├── Layout/           # Admin layout components
│   ├── Auth/             # Authentication components
│   └── UI/               # Reusable UI components
├── lib/
│   ├── api-client.ts     # Backend API integration
│   └── utils.ts          # Utility functions
└── types/                # TypeScript type definitions
```

## Features Overview

### Dashboard

- **Statistics Cards**: Two main cards showing total users and active subscriptions
- **User Table**: Single comprehensive table with all user information
- **Data Columns**: Email, Created Date, Status, Plan, Valid Until, Last Synced
- **Sync Button**: Single "Sync All Subscriptions" button in header
- **Modern UI**: Gradient background with rounded cards and modern styling

### User Data Display

- **Paginated Table**: 10 users per page with navigation controls  
- **Sorting**: Users sorted by creation date (newest first)
- **User Information**: Email, created date, subscription status, plan ID, valid until date, last synced
- **Copy-to-Clipboard**: Click to copy user emails
- **Status Colors**: Visual status indicators (green for active, red for cancelled, etc.)
- **Manual Sync**: "Sync All Subscriptions" button to trigger bulk updates

## Authentication

### Admin Login

The admin uses environment-based authentication:

```typescript
// Credentials stored in .env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=secure_password
```

### Security Features

- Server-side credential validation
- Session-based authentication
- Protected routes with middleware
- Automatic logout functionality

## API Integration

### Backend Communication

All data fetching goes through the API client:

```typescript
const users = await apiClient.getUsers()
const syncResult = await apiClient.syncAllSubscriptions()
```

### Available Endpoints

- `getUsers()` - Fetch all users
- `getUserByEmail(email)` - Get specific user
- `syncUserSubscription(userId)` - Sync individual user
- `syncAllSubscriptions()` - Sync all users
- `checkSubscription(email)` - Real-time subscription check

## Customization

### Adding New Analytics

1. Create components in `src/components/Charts/`
2. Add to dashboard layout
3. Connect to backend APIs

### Custom User Management

1. Extend user table components
2. Add new API endpoints in backend
3. Update API client

### Styling

Customize appearance in `tailwind.config.ts` and component files.

## How It Works

### Authentication Flow

1. **Admin visits dashboard** → Redirected to login if not authenticated
2. **Login Process**: Username/password validation against environment variables
3. **Session Management**: Server-side session with secure cookie
4. **Dashboard Access**: Authenticated admin can view all user data and controls

### Dashboard Workflow

1. **Data Loading**: Fetches all users from backend API
2. **Statistics Calculation**: Automatically calculates total users and active subscriptions
3. **User Table**: Displays sorted user list (newest first) with pagination
4. **Sync Integration**: "Sync All Subscriptions" button triggers backend sync service
5. **Data Refresh**: Dashboard refreshes after sync to show updated information

## Deployment

### Production Build

```bash
./start.sh  # For development
# or
npm run build
npm start   # For production
```

### Environment Variables for Production

```env
# Backend API
NEXT_PUBLIC_BACKEND_URL=https://api.yourdomain.com

# Admin Authentication
ADMIN_USERNAME=production_admin
ADMIN_PASSWORD=very_secure_production_password

# App Configuration
NEXT_PUBLIC_APP_NAME=Your Production Admin
```

## Security Considerations

### Production Setup

1. **Use strong credentials**:
   ```env
   ADMIN_USERNAME=admin_$(openssl rand -hex 4)
   ADMIN_PASSWORD=$(openssl rand -base64 32)
   ```

2. **Enable HTTPS**: Always use SSL in production

3. **Network Security**: Restrict access to admin dashboard
   - Use VPN or allowlist IPs
   - Consider additional authentication layers

4. **Environment Variables**: Never commit `.env` files
   - Use secure secret management
   - Rotate credentials regularly

### Access Control

The current implementation provides basic authentication. For enhanced security, consider:

- Two-factor authentication (2FA)
- Role-based access control
- Audit logging
- Session timeout controls

## Monitoring

### Health Checks

- Monitor API connectivity
- Track sync operation success rates
- Alert on authentication failures

### Metrics to Track

- Admin login frequency
- Sync operation performance
- User growth trends
- Subscription status changes

## Troubleshooting

### Login Issues

**Problem**: Cannot log into admin dashboard

**Solutions**:
- Verify `ADMIN_USERNAME` and `ADMIN_PASSWORD` in `.env.local`
- Ensure environment variables are set correctly (not in `.env`)
- Check browser console for authentication errors
- Clear browser cookies and try again

### Data Loading Issues

**Problem**: User data not displaying or API errors

**Solutions**:
- Ensure backend API is running on correct port (`http://localhost:8000`)
- Check CORS configuration in backend allows admin URL
- Verify `NEXT_PUBLIC_BACKEND_URL` is correct
- Test API endpoints directly in browser or Postman

### Sync Issues

**Problem**: Sync button not working or data not updating

**Solutions**:
- Check if backend API is accessible at `/api/subscriptions/sync-all`
- Verify BEAG_API_KEY is correctly configured in backend
- Check browser console for API errors during sync
- Ensure backend worker is running properly

### Build Issues

**Problem**: Build fails or runtime errors

**Solutions**:
- Clear `.next` directory and rebuild: `rm -rf .next && ./start.sh`
- Reinstall dependencies: `npm install`
- Check environment variable format in `.env.local`
- Verify all required environment variables are set

## Development

### Adding New Features

1. **Create Components**: Add in `src/components/` with appropriate category
2. **API Integration**: Update `src/lib/api-client.ts` for new endpoints  
3. **Dashboard Updates**: Modify `src/app/dashboard/page.tsx` for new UI
4. **Authentication**: Protect new routes with middleware if needed

### Customizing the Dashboard

**Modifying User Table**:
```typescript
// In src/app/dashboard/page.tsx
const USERS_PER_PAGE = 20  // Change from default 10

// Add new table columns by modifying the table header and row data
// Current columns: Email, Created Date, Status, Plan, Valid Until, Last Synced
```

**Adding New Statistics**:
```typescript
// Add new stat calculations in useEffect
const newStat = users.filter(u => /* your condition */).length
setStats({
  totalUsers,
  activeSubscriptions,
  newStat  // Add your new statistic
})
```

### API Client Extensions

**Adding New API Calls**:
```typescript
// In src/lib/api-client.ts
export const apiClient = {
  // Add new admin-specific methods
  getAdminStats: async () => {
    const response = await fetch(`${API_BASE}/admin/stats`)
    return response.json()
  }
}
```

## License

MIT