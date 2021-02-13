import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';

import contato from './screens/contato';
import ondeestamos from './screens/nossaslojas';

function Routes(){
    return(
        <BrowserRouter>
              <Switch>
                  <Route path="/contato" component={contato} />
                  <Route path="/ondeestamos" component={ondeestamos} />

              </Switch>
        
        </BrowserRouter>
    );

};

export default Route;