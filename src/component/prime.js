import React, {Component} from 'react';


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'font-awesome/css/font-awesome.min.css';


import {Button} from 'primereact/components/button/Button';


class Prime extends Component {
   render() {
      return (
         <div>
            <Button label="Login" icon="fa-facsebook" />
            <Button label="Login" icon="fa-check" />

         </div>
      );
   }
}

export default Prime;