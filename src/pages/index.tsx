import { GetServerSideProps } from 'next'
import { Articles } from './types/types'
import { getData } from './calls/dbCalls'
import Hero from './components/hero'
import Layout from './components/layout';
import { useCtx } from './auth/ctx';
import Dashboard from './components/dashboard';

export const getServerSideProps: GetServerSideProps<Articles> = async () => {
  const articles = await getData('articles');
  return {
    props: {
      articles,
    },
  };
};

const Home = ({ articles }: Articles) => {
  const { isConnected } = useCtx()
  if (!articles) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      {!isConnected ?
        <Hero />
        :
        <Dashboard articles={articles} />
      }
      {/* <OrderPage orders={orders} />
          <OrderForm /> */}

    </Layout>
  );
};


export default Home;