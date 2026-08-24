var users =  JSON.parse(localStorage.getItem("users") )|| [];

var formR = document.getElementById("formRegister");
formR.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("iName").value;
    let email = document.getElementById("iEmail").value;
    let senha = document.getElementById("iSenha").value;
    let date = document.getElementById("iDate").value;

    const user = {//objeto,anonimo, estrutura, json
        nome: name,
        email: email,
        senha: senha,
        nascimento: date
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
})

var formL = document.getElementById("formLogin");
formL.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("LoginEmail").value;
    let senha = document.getElementById("LoginSenha").value;

    let user = users.find(u => { return u.email === email 

    });
    
    if(!user){//not usuario}
        console.log("usuário não encontrado")
        return
    }

    if(user){
        if(user.senha == senha){
            console.log("usuário logado")
        }else{
            console.log("senha incorreta")
            window.location.href = "painel.html"
        }
    }else{
        console.log("usuário não encontrado")
    }

})
