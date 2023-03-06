import MetaTags from '@components/MetaTags.component';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfoRequest, signoutUser } from '@slices/auth/authSlice';
import { ReduxStoreType } from 'types/Store.type';

export default function Home(): JSX.Element {
  const { email, authStatus } = useSelector((store: ReduxStoreType) => store.auth);
  const dispatch = useDispatch();

  const handleClick = (): void => {
    if (email) {
      dispatch(signoutUser());
    } else {
      dispatch(getUserInfoRequest());
    }
  };

  return (
    <>
      <MetaTags />
      <main>
        <div>
          <div>
            {authStatus === 'loading' ? (
              <p>Loading....</p>
            ) : (
              <>
                <p> {email.length > 0 ? 'Logged in' : 'Not Logged In'}</p>
                <p>{email.length > 0 && email}</p>
              </>
            )}
          </div>
          <button onClick={handleClick}>{email ? 'Logout' : 'LogIn'}</button>
        </div>
      </main>
    </>
  );
}
