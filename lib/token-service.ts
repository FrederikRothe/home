// lib/token-service.ts
import { supabaseAdmin } from './supabase';

const STRAVA_TOKEN_KEY = 'strava';

type StravaTokens = {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
};

export async function getStravaTokens(): Promise<StravaTokens | null> {
  try {
    const { data, error } = await supabaseAdmin
      .from('tokens')
      .select('access_token, refresh_token, expires_at')
      .eq('key', STRAVA_TOKEN_KEY)
      .single();
    
    if (error) throw error;
    
    if (!data) return null;
    
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: data.expires_at,
    };
  } catch (error) {
    console.error('Error fetching tokens from Supabase:', error);
    return null;
  }
}

export async function saveStravaTokens(tokens: StravaTokens): Promise<boolean> {
  try {
    const { error } = await supabaseAdmin
      .from('tokens')
      .update({
        access_token: tokens.accessToken,
        refresh_token: tokens.refreshToken,
        expires_at: tokens.expiresAt
      })
      .eq('key', STRAVA_TOKEN_KEY);
    
    if (error) throw error;
    
    return true;
  } catch (error) {
    console.error('Error saving tokens to Supabase:', error);
    return false;
  }
}

// Helper to check if tokens are expired
export function isTokenExpired(expiresAt: number): boolean {
  // Add 5 minute buffer
  return Date.now() >= (expiresAt - 300) * 1000;
}

// Get a valid access token, refreshing if needed
export async function getValidStravaAccessToken(): Promise<string | null> {
  // Get current tokens
  const tokens = await getStravaTokens();
  
  // If no tokens are found, return null
  if (!tokens) {
    console.error('No Strava tokens found');
    return null;
  }
  
  // If token is still valid, return it
  if (!isTokenExpired(tokens.expiresAt)) {
    return tokens.accessToken;
  }
  
  // Otherwise, refresh the token
  try {
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        refresh_token: tokens.refreshToken,
        grant_type: 'refresh_token'
      })
    });
    
    const data = await response.json();
    
    if (!response.ok || !data.access_token) {
      throw new Error(data.message || 'Failed to refresh token');
    }
    
    // Save the new tokens
    const newTokens = {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: data.expires_at
    };
    
    await saveStravaTokens(newTokens);
    
    return newTokens.accessToken;
  } catch (error) {
    console.error('Error refreshing Strava token:', error);
    return null;
  }
}