import { useState } from "react";

import styles from "./Formulario.module.css";

const CalcularIMC = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);

  // Função para calcular o IMC
  const calcular = (e) => {
    e.preventDefault();

    // Esse if serve para impedir que o usuário digite campos vazios
    if (!altura || !peso) {
      alert("Preencha todos os campos");
      return;
    }

    // Aqui é feita a conversão de string para número
    const alturaEmMetros = parseFloat(altura);
    const pesoEmKg = parseFloat(peso);

    // Esse if serve para impedir que o usuário digite números negativos
    if (alturaEmMetros <= 0 || pesoEmKg <= 0) {
      alert("Altura e peso devem ser maiores que zero");
      return;
    }

    // Aqui é feita a fórmula para calcular o IMC
    const imc = pesoEmKg / (alturaEmMetros * alturaEmMetros);
    setResultado(imc.toFixed(2)); // Arredonda o resultado para 2 casas decimais
  };
  return (
    <div className={styles.dados}>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcular}>
        <div>
          <label>Altura (m): </label>
          <input
            placeholder="Ex: 1.75 m"
            type="number"
            step="0.01"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div>
          <label>Peso (kg): </label>
          <input
            placeholder="Ex: 75.7 kg"
            type="number"
            step="0.1"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>

      {resultado && (
        <div>
          <p>Seu IMC é: {resultado}</p>
          <p>
            Classificação:
            {resultado < 18.5
              ? "Seu IMC indica que você está abaixo do peso. Isso pode estar associado a deficiências nutricionais ou outros fatores de saúde. Considere uma alimentação equilibrada e, se necessário, consulte um profissional da saúde."
              : resultado < 25
              ? "Parabéns! Seu IMC está dentro da faixa considerada saudável. Mantenha uma alimentação equilibrada e a prática regular de atividades físicas para continuar com esse ótimo resultado."
              : resultado < 30
              ? "Seu IMC indica que você está um pouco acima do peso ideal. Pequenos ajustes na rotina, como uma alimentação balanceada e exercícios regulares, podem ajudar a melhorar sua saúde e bem-estar."
              : resultado < 35
              ? "Seu IMC indica obesidade grau I. Isso pode aumentar o risco de problemas de saúde, como diabetes e hipertensão. Mudanças no estilo de vida, como uma dieta equilibrada e atividades físicas, podem ser muito benéficas."
              : resultado < 40
              ? "Seu IMC está na faixa de obesidade grau II, o que pode trazer impactos significativos à saúde. É importante buscar orientação médica para avaliar possíveis tratamentos e mudanças na alimentação e no estilo de vida."
              : "Seu IMC indica obesidade mórbida, um nível que pode trazer sérios riscos à saúde. O acompanhamento médico é essencial para encontrar o melhor caminho para melhorar sua qualidade de vida."}
          </p>
        </div>
      )}
    </div>
  );
};

export default CalcularIMC;
