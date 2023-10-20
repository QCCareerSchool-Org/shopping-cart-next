import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { findSite } from './lib/sites';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/((?!api|_next/static|_next/image|favicon.ico|makeup/|event/|design/|pet/|wellness/|writing/).*)', // also ignore requests to /makeup/, /event/, etc. (they refer to the public directory)
  ],
};

const middleware = (req: NextRequest): NextResponse => {
  const url = req.nextUrl;
  const hostname = req.headers.get('host');
  const site = findSite(hostname);

  if (url.pathname.startsWith(`/sites`)) {
    // Prevent security issues – users should not be able to canonically access
    // the app/sites folder and its respective contents.
    url.pathname = '/404';
  } else if (site) {
    // rewrite to the current subdomain under the app/sites folder
    url.pathname = `/sites${site.path}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
};

export default middleware;
