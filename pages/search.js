import React from "react";
import Link from "next/link";

const Search = () => {
  const save = async () => {
    alert("1");
    const form = {
      Nome: "aaaa",
      Email: "bbbb",
      Whatsapp: "cccc",
    };

    const formString = JSON.stringify(form);

    try {
      const response = await fetch("/api/save", {
        method: "POST",
        body: formString,
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-6">
      <h1 className="paragraph text-center my-4 title">
        Críticas ou Sugestões
      </h1>
      <p className="my-12 text-center paragraph text-wrap">
        A pizzaria Pizza Chef quer sempre oferecer o melhor serviço aos seus
        clientes.
        <br /> Por isso, estamos dispostos a ouvir a sua opinião.
      </p>
      <div className="w-4/12 mx-auto">
        <label className="textLabel">Seu nome:</label>
        <input
          type="text"
          placeholder="Nome"
          className="block px-6 py-4 w-full shadow rounded-lg inputText my-2"
        />
        <label className="textLabel">E-mail:</label>
        <input
          type="email"
          placeholder="E-mail"
          className="block px-6 py-4 w-full shadow rounded-lg inputText my-2"
        />
        <label className="textLabel">Whatsapp:</label>
        <input
          type="text"
          placeholder="Whatsapp"
          className="block px-6 py-4 w-full shadow rounded-lg inputText rounded my-2"
        />
        <label className="textLabel">Sua crítica e/ou sugestão:</label>
        <input
          type="text"
          placeholder="Crítica e/ou Sugestão"
          className="block px-6 py-4 w-full shadow rounded-lg inputText my-2"
        />
        <button className="button w-full my-4" onClick={save}>
          Salvar
        </button>
      </div>
    </div>
  );
};

export default Search;
