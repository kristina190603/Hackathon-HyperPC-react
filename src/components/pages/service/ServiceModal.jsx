import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceModal = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => navigate("/services")} style={{ color: "black" }}>
        X
      </button>
      <h1 style={{ color: "white" }}>Заявка на апгрейд ПК</h1>
      <h2 style={{ color: "grey" }}>
        Наши специалисты с многолетним опытом подарят новую “жизнь” Вашему
        верному стальному другу: усовершенствуют его технические характеристики,
        а также сделают его стильным и выделяющимся по Вашему желанию!
      </h2>
      <input type="text" placeholder="Name" />
      <br />
      <input type="text" placeholder="Number" />
      <br />
      <input type="text" placeholder="Email" />
      <br />
      <input type="text" placeholder="What is the problem ?" />
      <br />
      <button>Submit</button>
    </div>
  );
};

export default ServiceModal;
