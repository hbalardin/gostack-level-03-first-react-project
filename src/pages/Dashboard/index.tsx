import React from "react";
import { FiChevronRight } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/66559169?s=460&u=d9fc14cbe3fc2f8d9017f40ecec27fac35ce8867&v=4"
          alt="Henrique Balardin"
        />
        <div>
          <strong>hbalardin/nlw-01-ecoleta</strong>
          <p>
            About Projeto construído durante o Next Level Week #1, um evento de
            uma semana organizado pela RocketSeat.
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/66559169?s=460&u=d9fc14cbe3fc2f8d9017f40ecec27fac35ce8867&v=4"
          alt="Henrique Balardin"
        />
        <div>
          <strong>hbalardin/nlw-01-ecoleta</strong>
          <p>
            About Projeto construído durante o Next Level Week #1, um evento de
            uma semana organizado pela RocketSeat.
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars0.githubusercontent.com/u/66559169?s=460&u=d9fc14cbe3fc2f8d9017f40ecec27fac35ce8867&v=4"
          alt="Henrique Balardin"
        />
        <div>
          <strong>hbalardin/nlw-01-ecoleta</strong>
          <p>
            About Projeto construído durante o Next Level Week #1, um evento de
            uma semana organizado pela RocketSeat.
          </p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
