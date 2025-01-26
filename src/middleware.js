import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const dummyUser = {
        role: 'user',
        email: 'test@gmail.com'
    }
    let isServicePage = request.nextUrl.pathname.startsWith('/services')
    let isAdmin = dummyUser.role === 'admin'

    if(isServicePage && !isAdmin){
        // return NextResponse.rewrite(new URL('/login', request.url)) //rewrite operation will keep path same && redirect will changes path name
        return NextResponse.redirect(new URL('/login', request.url)) //rewrite operation will keep path same && redirect will changes path name
    }

    return NextResponse.next()
//   return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }