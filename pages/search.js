import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

const Search = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0,
  });
  const notas = [0, 1, 2, 3, 4, 5];
  const [sucess, setSucess] = useState(false);
  const [retorno, setRetorno] = useState({});

  const onChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form),
      });

      const data = await response.json();
      setSucess(true);
      setRetorno(data);
    } catch (err) {}
  };

  return (
    <div className="pt-6">
      <PageTitle title="Pesquisa" />
      <h1 className="paragraph text-center my-4 title">
        Críticas ou Sugestões
      </h1>
      <p className="my-12 px-3 max-w-full sm:min-width-full mx-auto text-center paragraph">
        A pizzaria Pizza Chef quer sempre oferecer o melhor serviço aos seus
        clientes.
        <br /> Por isso, estamos dispostos a ouvir a sua opinião.
      </p>
      {!sucess && (
        <div className="max-w-md sm:min-width-full mx-auto">
          <label className="textLabel">Seu nome:</label>
          <input
            type="text"
            placeholder="Nome"
            onChange={onChange}
            name="Nome"
            value={form.Nome}
            className="block px-6 py-4 w-full shadow rounded-lg inputText my-2"
          />
          <label className="textLabel">E-mail:</label>
          <input
            type="email"
            placeholder="E-mail"
            onChange={onChange}
            name="Email"
            value={form.Email}
            className="block px-6 py-4 w-full shadow rounded-lg inputText my-2"
          />
          <label className="textLabel">Whatsapp:</label>
          <input
            type="text"
            placeholder="Whatsapp"
            onChange={onChange}
            name="Whatsapp"
            value={form.Whatsapp}
            className="block px-6 py-4 w-full shadow rounded-lg inputText rounded my-2"
          />
          <label className="textLabel">Sua crítica e/ou sugestão:</label>
          <input
            type="text"
            placeholder="Crítica e/ou Sugestão"
            className="block px-6 py-4 w-full shadow rounded-lg inputText my-2"
          />
          <label className="textLabel">Nota:</label>
          <div className="flex py-4">
            {notas.map((nota, index) => {
              return (
                <label
                  key={index.toString()}
                  className="block w-1/6 text-center text-lg leading-8"
                >
                  {nota}
                  <br />
                  <input
                    className="transform scale-125"
                    type="radio"
                    name="Nota"
                    value={nota}
                    onChange={onChange}
                  />
                </label>
              );
            })}
          </div>
          <button className="button w-full my-12" onClick={save}>
            Salvar
          </button>
        </div>
      )}
      {sucess && (
        <div className="w-5/12 md:w-2/5 xl:w-3/12 mx-auto my-8">
          <p className="text-lg border-t-4 border-b-4 border-gray-200 text-white-800 py-3 text-center ">
            Obrigado por contribuir com sua sugestão ou crítica.
          </p>
          {retorno.showCoupon && (
            <div className="bg-green-500 text-gray text-center mt-4 rounded-t-md px-6 py-4 shadow-md">
              Seu cupom: <br />
              <strong className="text-base sm:text-lg xl:text-2xl">
                {retorno.Cupom}
              </strong>
            </div>
          )}
          {retorno.showCoupon && (
            <div className="bg-gray-700 text-white text-center mb-4 rounded-b-md px-6 py-4 shadow-md">
              <strong className="block mb-2">{retorno.Promo}</strong>
              <br />
              <span className="italic">
                Tire um print ou foto desta tela e apresente ao garçom.
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
