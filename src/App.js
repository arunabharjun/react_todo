import React from 'react';
import logo from './logo.svg';
import './App.css';
import './tofo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: []
    };
  }

  addItem = (todoValue) => {
    if (todoValue !== '') {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };

      const list = [...this.state.list];
      list.push(newItem);

      this.setState(
        {
          list: list,
          newItem: ""
        }
      );

      //alert(this.state.newItem);
    }
  }

  deleteItem = (id) => {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    //list = updatedList;
    this.setState({ list: updatedList });
  }

  updateInp = (input) => {
    this.setState({ newItem: input });
  }

  render() {
    return (
      <div>
        {/* <Navbar sticky="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{' '}
            Arunabh's Todo App
          </Navbar.Brand>
        </Navbar> */}
        <div className="container-fluid">
          <br />
          <div className="">
            {/* <h1>Arunabh</h1> */}
            <div className="row">
              <div className="col-2">
                <img src={logo} alt="" className="App-logo" />
              </div>
              <div className="col-8">
                <h6 className="todo-header">Arunabh's Todo App</h6>
              </div>
            </div>
            <div className="row">
              <hr className="" />
            </div>
            <div className="todo-list">
              <p className="">Add a new todo -</p>
              <div className="row">
                <input
                  className='form-control col-10'
                  type="text"
                  placeholder="What do you want to do today ?"
                  required
                  value={this.state.newItem}
                  onChange={e => this.updateInp(e.target.value)}
                />
                <button
                  className="col-2 btn btn-primary"
                  onClick={() => this.addItem(this.state.newItem)}
                  disabled={!this.state.newItem.length}
                >Add</button>
              </div>
              <div className="ul-class">

                <ul class="list-group">
                  {this.state.list.map(item => {
                    return (
                      <li class="list-group-item" key={item.id}>
                        <div className="row">
                          <div className="col-9">
                            <h5 className="">{item.value}</h5>
                          </div>
                          <button
                            className="btn btn-danger col-3"
                            style={{ borderRadius: "0px !important" }}
                            onClick={() => this.deleteItem(item.id)}
                          >Delete</button>

                        </div>
                      </li>
                    );
                  })}

                </ul>

              </div>

            </div>

          </div>

        </div>
      </div>

    );
  }
}

export default App;


// function App() {
//   return (
//     <div className="container">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="" />
//         <p className="">Arunabh Arjun</p>
//       </header>
//     </div>
//   );
// }

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

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
