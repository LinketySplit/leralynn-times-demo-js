import { dev } from '$app/environment';
import { PublicationSDK } from '@linketysplit/linketysplit-js';
import { LINKETYSPLIT_API_KEY } from '$env/static/private';

export class SDKDev extends PublicationSDK {
  public static readonly ORIGIN: string = 'https://localhost:5173';
}

export const getLinketySplitSDK = (): PublicationSDK => {
  if (dev) {
    return new SDKDev(LINKETYSPLIT_API_KEY);
  }
  return new PublicationSDK(LINKETYSPLIT_API_KEY);
};
