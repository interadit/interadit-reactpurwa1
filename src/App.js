// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';


import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

import Header from './component/Header';
import Footer from './component/Footer';
import Article from './component/Article';



class App extends Component {
  render(){
    return (
      <div>
        {/* <center> */}
          <h1>Halo</h1>
          <ul>

          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/header">Header</Link></li>
          <li><Link to="/article">Article</Link></li>
          <li><Link to="/footer">Footer</Link></li>
          
          </ul>
          <div>
            <Route exact path="/" component = {'Home'} />
            <Route path="/article" component = {Article} />
            <Route path="/header" component = {Header} />
            <Route path="/footer" component = {Footer} />
          </div>
        {/* </center> */}
      </div>
    );
  }
}


export default App;



// class App extends Component {
//   constructor(){
//     super();
//     this.state = {user : 'orang asing'};
//   }
//   klik(){
//     this.setState({user : this.refs.nama.value});
//   }
//   componentWillUpdate(x, y){
//     console.log('Ini will Update ' + y.user);    
//   }
//   componentDidUpdate(){
//     console.log('Ini did Update ');    
//   }
//   render(){
//     return(
//       <div>
//         <center>
//           <h1>Halo {this.state.user}</h1>
//           <input ref="nama" type="text" onInput={()=>{this.klik();}} />
//         </center>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// // import Footer from './component/Footer';
// import './App.css';

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       user: 'orang Asing'
//     };
//   }
//   componentWillMount(){
//     this.setState({
//       user: 'Yayan'
//     });
//     console.log('Ini will mount ' + this.state.user);    
//   }
//   componentDidMount(){
//     console.log('Ini did mount ' + this.state.user);    
//   }
//   render(){
//     return(
//       <div>
//         <center>
//           <h1>Halo {this.state.user}</h1>
//         </center>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// // import Footer from './component/Footer';
// import './App.css';

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {user: 'orang asing'};
//   }
//   klik(){
//     this.setState({
//       user: this.refs.nama.value
//     })
//   }
//   render(){
//     return(
//       <div>
//         <center>
//           <h1>Halo {this.state.user}</h1>
//           <div>
//             <input ref="nama" type="text" onInput = {()=>{this.klik();}}/>
//             {/* <button onDoubleClick = {()=> {this.klik();}}>klik</button> */}
//           </div>
//         </center>
//       </div>
//     );
//   }
// }

// export default App;



// import React, { Component } from 'react';
// // import Footer from './component/Footer';
// import './App.css';

// class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       user: 'orang asing'
//     };
//   }
//     klik(){
//       this.setState({
//         user: this.refs.nama.value
//       });
//     }
//   render(){
//     return(
//       <div>
//         <center>
//           <h1>Halo {this.state.user}</h1>
//           <div>
//             <input ref="nama" type="text"/>
//             <button onDoubleClick = {()=> {this.klik();}}>klik</button>
//           </div>
//         </center>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// // import Footer from './component/Footer';
// import './App.css';

// class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       user: 'Orang Asing'
//     };
//   }
//     klik(){
//       this.setState({
//         user: this.refs.nama.value
//       });
//     }

//   render(){
//     return(
//       <div>
//         <center>
//           <h1>Halo {this.state.user}</h1>
//           <div>
//             <input ref="nama" type="text"/>
//             <button onClick = {()=> {this.klik();}}>klik</button>
//           </div>
//         </center>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
// // import Footer from './component/Footer';
// import './App.css';

// class App extends Component {

//   state = { count: 100 }

//   tambah = () =>{
//     this.setState({
//       count: this.state.count + 1
//     });
//   }

//   kurang = () =>{
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   render(){
//     return(
//       <div>
//         <center>
//           <h1>{this.state.count}</h1>
//           <div>
//             <button onClick = {this.kurang}>Kurang</button>
//             <button onClick = {this.tambah}>Tambah</button>
//           </div>
//         </center>
//       </div>
//     );
//   }
// }

// export default App;

// class App extends Component {

//   constructor(){
//     super();
//     this.state = {
//       user: 'Andi'
//     }
//   }
//   klik(siapa){
//     this.setState({
//       user: siapa
//     })
//   }
//   render(){
//     return(
//       <div>
//         <h1>Selamat datang {this.state.user}</h1>
//         <button onClick={()=>{
//           this.klik('adnios')
//         }}>
//           tekan
//         </button>
//       </div>
//     );
//   }
// }

// export default App;



// import React, { Component } from 'react';
// import Footer from './component/Footer';
// import './App.css';

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {nama: 'andisa'}
//   }
//   render(){
//     return(
//         <div>
//           <Footer id={this.state.nama} />
//         </div>
//     );
//   }
// }

// export default App;



// import React, {Component} from 'react';
// import Footer from './component/Footer'
// import './App.css';

// class App extends Component {
//   render(){
//     var daftar = {
//       nama : 'Adits',
//       usia: 21
//     }
//     return(
//         <div>
//           <h1>halo</h1>
//           <Footer id={daftar.nama} umur={daftar.usia} />
//         </div>
//           // <h1>halo</h1>
//       );
//     }
//   }
  
//   export default App;
  


// import React, {Component} from 'react';
// import Footer from './component/Footer'
// import './App.css';

// class App extends Component {
//   render(){
//     var teks = 'hak cipta'
//     return(
//         <div>
//           <h1>halo</h1>
//           <Footer konten = {teks} />
//         </div>
//           // <h1>halo</h1>
//       );
//     }
//   }
  
//   export default App;
  
  








// import React, {Component} from 'react';
// import './App.css';

// class App extends Component {
  
//   constructor(){
//     super();
//       this.state = {
//         nama: ' Andos'
//       }
//   }

//   render(){

//     setTimeout(() => {
//       this.setState({
//         nama: ' budi'
//       });
//     }, 1000)

//     return(
      
//       <h1>halo{this.state.nama}</h1>
//       // <h1>halo</h1>
//     );
//   }
// }

// export default App;




// import React, {Component} from 'react';
// import './App.css';

// class App extends Component{
//   constructor(){
//     super();
//     this.state = {
//       nama : 'Andi',
//       usia: 21
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>halo{this.state.nama}</h1>
//         <h1>halo{this.state.usia}</h1>
//       </div>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {nama: 'Adit'}
//   }
  
//   render() {
//     return(
//       <h1>halo {this.state.nama}</h1>
//     );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import Header from './component/Header';
// import Footer from './component/Footer';
// import './App.css';

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Header/>
//         <h1>test</h1>
//         <Footer/>
//       </div>
//     );
//   }
// }

// export default App;

// class App extends Component {
//   render(){
//     var kode = {
//       color: 'yellow',
//       background: 'red'
//     }
//     return(
//       <div style={kode}>
//         <center>
//           <h2>ss</h2>
//         </center>
//       </div>
//     );
//   }
// }

// export default App;

// import React, {Component} from 'react';
// import './App.css';
// class App extends Component {
//   render(){
//     return(
//       <div style={{color: 'red'}}>
//         <center>
//           <h1>siswa</h1>
//         </center>
//       </div>
//     );
//   }
// }
// export default App;


// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//   render (){
//     const siswa = ['Andi', 'Budi', 'Casa'];
//     const listSiswa = siswa.map((siswa) => 
//       <li>{siswa}</li>
//     );
//     return (
//       <div>
//         <h1>Daftar Siswa</h1>
//         <ul>
//         <h1>{listSiswa}</h1>
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;

// class App extends Component {
//   render() {
//     function login(x) {
//       const udahlogin = x;
//       if(udahlogin){
//         return 'Anda udah login';
//       }
//       return 'belum login'
//     }
//     return (
//       <div>
//         <h1>Selamat datang</h1>
//         <h1>{login(true)}</h1>
//       </div>
//     );
//   }
// }




// class App extends Component{
  
//   render(){
//     function namafull(id) {
//       return id.nama + '' + id.marga
//     }
//     const id = {
//       nama : 'Andi',
//       marga : 'bidei'
//     }
    
//     return (
//       <h1>Halo {namafull(id)}</h1>
//     );
//   }
// }




// class App extends Component{

//   hitung(x) {
//     return Math.pow(2,x);
//   }

//   render(){
//     return (
//       <h1>Hasil = {this.hitung(5)}</h1>
//     );
//   }

// }




// class App extends Component{
//   constructor(){
//     super();
//     this.nama = 'andi';
//   }
//   render(){
//     return (
//       <h1>
//         halo {this.nama}
//       </h1>
//     );
//   }
// }


// class App extends Component {
//   render(){
//     var nama = 'Adnis'
//     return (
//       <h1>
//           Selamat datang {nama} !
//       </h1>
//     );
//   }
// }



// class App extends Component {
//   render(){
//     return (
//       <div>
//         <h1>
//           Selamat datang!
//         </h1>
//         <h1>
//           Apa kabar?
//         </h1>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
