// app/api/strava/init-tokens/route.ts
import { NextResponse } from 'next/server';
import { saveStravaTokens } from '@/lib/token-service';

export async function POST(request: Request) {
  // Only allow in development environment
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Not allowed in production' }, { status: 403 });
  }
  
  try {
    const { code } = await request.json();
    
    if (!code) {
      return NextResponse.json({ error: 'Authorization code is required' }, { status: 400 });
    }
    
    // Exchange code for tokens
    const response = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code'
      })
    });
    
    const data = await response.json();
    
    if (!response.ok || !data.access_token) {
      throw new Error(data.message || 'Failed to exchange code for tokens');
    }
    
    // Save the tokens to Supabase
    const saved = await saveStravaTokens({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: data.expires_at
    });
    
    if (!saved) {
      throw new Error('Failed to save tokens to database');
    }
    
    return NextResponse.json({ success: true, message: 'Tokens initialized successfully' });
  } catch (error: any) {
    console.error('Error initializing tokens:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}