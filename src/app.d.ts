// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    interface PageData {
      user: import('./lib/auth/auth.server').User | null;
    }
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
