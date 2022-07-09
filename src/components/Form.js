function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()
        alert("Cadastrado com sucesso!")
    }

             

    return(
        <div>
            <p> Cadastrar usuario </p>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome completo:" required />
                    <br/>
                    <input type="text" placeholder="Digite o seu cpf" required />
                    <br/>
                    <input type="text" placeholder="E-mail" required />
                    <br/>
                    <input type="password" placeholder="Senha" required />
                    <br/>                                       
                </div>
                <div>
                    <input class="btnCadastrar" type="submit" value="Cadastrar" />
                    <input class="btnLimpar" type="reset" value="Limpar"  />
                    <br/>                    
                </div>
              <p>Entre com Suas redes Sociais </p>
                

            </form>
        </div>
    )

}

export default Form

