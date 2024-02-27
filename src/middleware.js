import { cookieName, fallbackLng, languages } from "./app/i18n/settings";

import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";

acceptLanguage.languages(languages);

export const config = {
  // matcher: "/:lng*",
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export function middleware(req) {
  // console.log("middleware req", req);
  let lng; //=undefined
  console.log("lng!!!", lng);
  const pathLng = req.nextUrl.pathname.split("/")[1];
  // console.log("jhjg", req.nextUrl.pathname);
  // console.log("pathLng", pathLng);

  if (languages.includes(pathLng)) {
    console.log("Languages.includes(pathLng)", languages.includes(pathLng)); //=true
    return NextResponse.next();
  }

  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  console.log("LNG??", lng);
  console.log("Req.cookies.has(cookieName)", req.cookies.has(cookieName));
  console.log("Midleware", lng);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (!req.nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    if (lngInReferer) {
      const response = NextResponse.next();
      response.cookies.set(cookieName, lngInReferer);
      return response;
    }
  }

  return NextResponse.next();
}
