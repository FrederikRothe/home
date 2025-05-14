// app/api/strava/callback/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  
  if (!code) {
    return NextResponse.json({ error: 'Authorization code not found' }, { status: 400 });
  }
  
  try {
    const tokenResponse = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code'
      })
    });
    
    const tokenData = await tokenResponse.json();
    
    // Store tokens securely (see step 3 for options)
    
    // Redirect to your activities page
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/activities`);
  } catch (error) {
    console.error('Error exchanging auth code for token:', error);
    return NextResponse.json({ error: 'Failed to authenticate with Strava' }, { status: 500 });
  }
}