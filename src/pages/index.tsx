import { GetServerSideProps } from 'next'
import { Props } from './types/types'
import { getData } from './calls/dbCalls'
import Hero from './components/hero'
import Layout from './components/layout';
import { useCtx } from './auth/ctx';
import Dashboard from './components/dashboard';
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const orders = await getData('orders');
  return {
    props: {
      orders,
    },
  };
};

const Home = ({ orders }: Props) => {
  const { isConnected } = useCtx()
  if (!orders) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      {!isConnected ?
        <Hero />
        :
        <Dashboard />
      }
      {/* <OrderPage orders={orders} />
          <OrderForm /> */}
    </Layout>
  );
};


export default Home;