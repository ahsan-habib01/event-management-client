import { auth } from './lib/auth';
import { NextResponse } from 'next/server';

export async function proxy(request) {
  const session = await auth();

  // Protected routes
  const protectedPaths = ['/add-event', '/manage-events'];
  const isProtectedPath = protectedPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  );

  // If trying to access protected route without authentication
  if (isProtectedPath && !session) {
    const loginUrl = new URL('/login', request.url);
    // Add callback URL so we can redirect back after login
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-event', '/manage-events'],
};
