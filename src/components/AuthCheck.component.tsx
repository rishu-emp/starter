import { useRouter } from 'next/router';
type AuthCheckPropType = {
  children: JSX.Element;
};

export default function AuthCheck({ children }: AuthCheckPropType): JSX.Element {
  const token = '';
  const router = useRouter();

  if (!token) {
    router.push('/login');
    return <></>;
  }

  return children;
}
