import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import { Props } from './types/types'
import { getData } from './calls/dbCalls'
import OrderPage from './components/test'
import OrderForm from './components/updateOrder'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Layout from './components/layout';
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const orders = await getData('orders');
  return {
    props: {
      orders,
    },
  };
};

const Home = ({ orders }: Props) => {
  if (!orders) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Hero />
      <h1>Main title</h1>
      {/* <OrderPage orders={orders} />
          <OrderForm /> */}
    </Layout>
  );
};


export default Home;