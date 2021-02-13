function Header() {
    return (
        <header className="row">
        <div>
          <a className="brand" href="/">Watercolor</a>
          <a className="" href="/nossaslojas">Onde Estamos</a>
          <a className="" href="/contato">Contato</a>
        </div>
        <div>
          <a href="/cart">Carrinho</a>
          <a href="/signin">Entrar</a>
        </div>
      </header>
    );
};

export default Header;

