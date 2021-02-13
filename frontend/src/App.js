import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import contato from "./screens/contato";
import nossaslojas from "./screens/nossaslojas";
import {lazy, Suspense} from 'react';
const Rodape = lazy(() => import('./Rodape'));
const Logo = lazy(() => import('./Logo'));
const Signin = lazy(() => import('./Signin'));

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
        <Suspense fallback={ <p>Carregando...</p> }>
          <Logo/>
          </Suspense>
          <a className="" href="/nossaslojas">Onde Estamos</a>
          <a className="" href="/contato">Contato</a>
        </div>
        <div>
          <a href="/cart">Carrinho</a>
          <Suspense fallback={ <p>Carregando...</p> }>
          <Signin />
          </Suspense>
        </div>
      </header>
      <main>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/contato" component={contato} />
          <Route path="/nossaslojas" component={nossaslojas} />
        
      </main>
        <footer>
          <Suspense fallback={ <p>Carregando...</p> }>
        <Rodape />
        </Suspense>
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
