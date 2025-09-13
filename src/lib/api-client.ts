import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface UserSubscription {
  id: number
  email: string
  beag_client_id?: number
  subscription_status?: string
  plan_id?: number
  start_date?: string
  end_date?: string
  my_saas_app_id?: string
  last_synced?: string
  created_at: string
  updated_at?: string
}

export const apiClient = {
  // User endpoints
  async getUsers(): Promise<UserSubscription[]> {
    const response = await client.get('/api/users/')
    return response.data
  },

  async getUserByEmail(email: string): Promise<UserSubscription> {
    const response = await client.get(`/api/users/by-email/${email}`)
    return response.data
  },

  async createUser(email: string): Promise<UserSubscription> {
    const response = await client.post('/api/users/', { email })
    return response.data
  },

  async syncUserSubscription(userId: number) {
    const response = await client.post(`/api/users/sync/${userId}`)
    return response.data
  },

  // Subscription endpoints
  async syncAllSubscriptions() {
    const response = await client.post('/api/subscriptions/sync-all')
    return response.data
  },

  async checkSubscription(email: string) {
    const response = await client.get(`/api/subscriptions/check/${email}`)
    return response.data
  },

  async getCachedSubscription(email: string) {
    const response = await client.get(`/api/subscriptions/cached/${email}`)
    return response.data
  },
}