import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class App extends Component {
   render(){
      return (
         <div>
            <Button variant="contained" color="primary">
            halo dunia
            </Button>
            <Button size="small" color="primary">
            A
            </Button>
            <Button size="large" color="secondary">
            B
            </Button>
            <Button variant="raised" color="primary">
            C
            </Button>
            <Button variant="raised" color="secondary">
            D
            </Button>
         </div>
      );
   }
}

export default App;