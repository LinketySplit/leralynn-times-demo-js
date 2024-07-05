import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoadEvent, RequestEvent } from './$types';
import { login } from '$lib/auth/auth.server';
import { SUB_REDIRECT_KEY } from './shared';

const subscribe = async (event: RequestEvent) => {
  const fd = await event.request.formData();

  const data: { name: string; email: string } = {
    name: ((fd.get('name') as string) || '').trim(),
    email: ((fd.get('email') as string) || '').trim()
  };
  const errors: { [key: string]: string } = {};
  if (!data.name) {
    errors['name'] = 'Please enter your name';
  }
  if (!data.email) {
    errors['email'] = 'Please enter your email';
  }
  if (Object.keys(errors).length > 0) {
    return fail(400, { formData: data, formErrors: errors });
  }

  await login(event, data);
  const redirectUrl = event.cookies.get(SUB_REDIRECT_KEY) || '/';
  event.cookies.delete(SUB_REDIRECT_KEY, {
    path: event.url.pathname,
    httpOnly: true,
    sameSite: 'lax',
    secure: true
  });

  throw redirect(303, redirectUrl);
};

export const load = async (event: PageServerLoadEvent) => {
  const subRedirect = event.url.searchParams.get(SUB_REDIRECT_KEY);
  if (subRedirect) {
    event.cookies.set(SUB_REDIRECT_KEY, subRedirect, {
      path: event.url.pathname,
      httpOnly: true,
      sameSite: 'lax',
      secure: true
    });
  }
  return {};
};

export const actions: Actions = {
  default: subscribe
};
