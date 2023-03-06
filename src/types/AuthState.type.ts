export interface AuthStateType {
  authStatus: 'loading' | 'complete' | 'failed' | '';
  email: string;
  isAuthenticated?: boolean;
}
