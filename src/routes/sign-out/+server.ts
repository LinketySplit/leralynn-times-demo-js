import { logout } from '$lib/auth/auth.server';
import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export const POST = async (event: RequestEvent) => {
  logout(event);
  throw redirect(303, '/');
};
