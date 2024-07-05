import { getUser } from '$lib/auth/auth.server';
import type { LayoutServerLoadEvent } from './$types';

export const load = async (event: LayoutServerLoadEvent) => {
  const rootLayoutCacheKey = 'layout://root';
  event.depends(rootLayoutCacheKey);
  const user = await getUser(event);
  return { user, rootLayoutCacheKey };
};
