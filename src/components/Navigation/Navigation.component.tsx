import ROUTES from 'helpers/routes.helper';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navigation.module.scss';

export default function Navigation(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navActions}>
        <li>
          <button>Store Data</button>
        </li>
        <li>
          <button>Returns/Exchange</button>
        </li>
      </ul>
      <Link href={ROUTES.HOME} className={styles.brandLogo}>
        <Image
          src="/assest/clarks_logo.png"
          alt="clarks-logo"
          width={100}
          height={36}
          style={{ objectFit: 'contain' }}
        />
      </Link>
    </nav>
  );
}
