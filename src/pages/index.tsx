import MetaTags from '@components/MetaTags.component';
import { Fragment } from 'react';
import styles from '@styles/pages/Home.module.scss';
import { getStoreData } from '@api/getStoreData.api';
import { StoreDataItemType } from 'types/StoreData.type';
import StoreDataTable from '@components/StoreDataTable/StoreDataTable.component';

type ServerSidePropsType = {
  props: {
    storeData: StoreDataItemType[] | undefined;
  };
};

export async function getServerSideProps(): Promise<ServerSidePropsType> {
  let storeData;
  try {
    const res = await getStoreData();
    storeData = res;
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      storeData,
    }, // will be passed to the page component as props
  };
}

export default function Home({ storeData }: { storeData: StoreDataItemType[] }): JSX.Element {
  return (
    <Fragment>
      <MetaTags />
      <main className={styles.home}>
        <StoreDataTable storeData={storeData} />
      </main>
    </Fragment>
  );
}
