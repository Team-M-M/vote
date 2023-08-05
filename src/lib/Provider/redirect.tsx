import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export function RedirectProvider() {
  const cookie = cookies();
  cookie.get('user') ?? redirect('/auth');

  return <></>;
}
