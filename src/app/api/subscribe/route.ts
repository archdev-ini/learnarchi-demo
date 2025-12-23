import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const subscription = await request.json();

    // Check if subscription object is valid
    if (!subscription || !subscription.endpoint) {
      return NextResponse.json(
        { error: 'Invalid subscription object' },
        { status: 400 }
      );
    }

    // LOGIC: In a real app, you would save this 'subscription' object to your database
    // linked to a user or just as a broadcast recipient.
    console.log('Received Push Subscription:', JSON.stringify(subscription));

    // Example of using web-push to send a welcome notification (server-side)
    /*
    const webpush = require('web-push');
    webpush.setVapidDetails(
      'mailto:hello@learnarchi.com',
      process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
      process.env.VAPID_PRIVATE_KEY
    );
    await webpush.sendNotification(subscription, JSON.stringify({
      title: 'Welcome to LearnArchi!',
      body: 'You are now subscribed to community updates.',
      icon: '/icons/icon-192x192.png'
    }));
    */

    return NextResponse.json(
      { message: 'Successfully subscribed to push notifications' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in push subscription:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
