import React, {useState, useEffect} from "react";
import Input from "../Input";
import "./Cadastro.scss";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [count, setCount] = useState("1");
  const [mensagen, setmensagem] = useState("");


  const [Personagem, setPersonagem] = useState(1);

  const handleSubmit = e => {
    e.preventDefault();
    const payload ={
      name: nome,
      email: email,
      confirm_email: confirmEmail,
      password: senha

    }
    localStorage.setItem(`Dados${count}`, JSON.stringify(payload));

    

    setCount(Count +1)
    setNome("");
    setEmail("");
    setConfirmEmail("");
    setSenha("");
    setmensagem("irmão já foi cadastrado")
    setTimeout(()=>{
      setMensagem("")
    }, 3000);
  };

  const Acima = () =>{
    setPersonagem(Personagem +1)
  };



  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${Personagem}`,{
    method : "GET"
  }).then(result=>{
    return result.json()
  }).then(data =>{
    console.log(data)
  }).catch(()=>{
    console.error("deu B.O, reinicia tudo ai man ")
  })
},[Personagem])

  return (
    <div className="Cadastro">
      <h1>Faça seu cadastro</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={nome}
          type="text"
          label="Nome"
          placeholder="Nome completo"
          atualizarState={setNome}
        />
        <Input
          value={email}
          type="email"
          label="Email"
          placeholder="Digite seu email"
          atualizarState={setEmail}
        />
        <Input
          value={confirmEmail}
          type="email"
          label="Confirmar Email"
          placeholder="Confirme seu email"
          atualizarState={setConfirmEmail}
        />
        <Input
          value={senha}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          atualizarState={setSenha}
        />
        <button>Cadastrar</button>

      </form>
        <button onClick={Acima}>add person</button>
      
    </div>
  );
};

export default Cadastro;
