import { SignJWT, jwtVerify } from 'jose';
import type { CookieSerializeOptions } from 'cookie';
import type { RequestEvent } from '@sveltejs/kit';
import { APP_SECRET } from '$env/static/private';
export type User = {
  name: string;
  email: string;
  
}

const COOKIE_KEY = 'laralynntimes-auth';
const COOKIE_OPTS: CookieSerializeOptions & {path: string} = {
  path: '/',
  httpOnly: true,
  secure: true,
  sameSite: 'lax',
}


export const login = async (event: RequestEvent,user: User) => {
  const jwt = await signJWT(user, APP_SECRET);
  event.cookies.set(COOKIE_KEY, jwt, COOKIE_OPTS);
}
export const logout = (event: RequestEvent) => {
  event.cookies.delete(COOKIE_KEY, COOKIE_OPTS);
}
export const getUser = async (event: RequestEvent): Promise<User|null> => {
  const jwt = event.cookies.get(COOKIE_KEY);
  if (!jwt) return null;
  try {
    const { payload } = await jwtVerify(jwt, new TextEncoder().encode(APP_SECRET));
    return payload as User;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return null;
  }
  
}

export const signJWT = async (
  payload: Record<string, unknown>,
  secret: string,
): Promise<string> => {
  const encodedSecret = new TextEncoder().encode(secret);
  const alg = 'HS256';
  const signer = new SignJWT(payload).setProtectedHeader({ alg }).setIssuedAt();
  const jwt = await signer.sign(encodedSecret);

  return jwt;
};