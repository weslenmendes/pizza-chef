import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from '../components/PageTitle';

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher);

  return (
    <div>
      <PageTitle title="Seja bem-vindo - Pizza Chef" />
      <p className="my-12 text-center paragraph text-wrap">
        A pizzaria Pizza Chef quer sempre oferecer o melhor serviço aos seus
        clientes.
        <br /> Por isso, estamos dispostos a ouvir a sua opinião.
      </p>
      <div className="text-center my-12">
        <Link href="/search">
          <a className="button">Dar opinião ou sugestão</a>
        </Link>
      </div>
      {!data && <p className="my-12 text-center paragraph">Carregando...</p>}
      {!error && data && data.showCoupon && (
        <p className="my-12 text-center paragraph">{data.message}</p>
      )}
    </div>
  );
};

export default Index;
