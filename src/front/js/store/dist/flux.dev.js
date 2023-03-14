"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//import {Characters} from "./component/characters.jsx";
var url = "https://3001-sollb77-starwarsfrontba-wdf55acbhlt.ws-us90.gitpod.io";

var getState = function getState(_ref) {
  var getStore = _ref.getStore,
      getActions = _ref.getActions,
      setStore = _ref.setStore;
  return {
    store: {
      message: null,
      demo: [{
        title: "FIRST",
        background: "white",
        initial: "white"
      }, {
        title: "SECOND",
        background: "white",
        initial: "white"
      }],
      personajes: [],
      personaje: {},
      planets: [],
      planet: {},
      favoritos: [],
      auth: false,
      registro: {},
      login: {} //  Characters: {},

    },
    actions: {
      // Use getActions to call a function within a fuction
      fetchCredentials: function fetchCredentials(email, password) {
        var resp, data;
        return regeneratorRuntime.async(function fetchCredentials$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(fetch(url + "/api/login", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    email: email,
                    password: password
                  })
                }));

              case 2:
                resp = _context.sent;

                if (!(resp.status === 200)) {
                  _context.next = 10;
                  break;
                }

                _context.next = 6;
                return regeneratorRuntime.awrap(resp.json());

              case 6:
                data = _context.sent;
                // localStorage.setItem("token", data ? .access_token)
                setStore({
                  login: true
                });
                console.log(getStore());
                return _context.abrupt("return", true);

              case 10:
                return _context.abrupt("return", false);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        });
      },
      // All Characters
      obtenerCharacters: function obtenerCharacters() {
        var response, data;
        return regeneratorRuntime.async(function obtenerCharacters$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log(getStore());
                _context2.prev = 1;
                _context2.next = 4;
                return regeneratorRuntime.awrap(fetch(url + "/api/people"));

              case 4:
                response = _context2.sent;
                _context2.next = 7;
                return regeneratorRuntime.awrap(response.json());

              case 7:
                data = _context2.sent;
                setStore({
                  personajes: data.list_people
                });
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, null, null, [[1, 11]]);
      },
      // 1 Character
      obtener1Character: function obtener1Character(id) {
        var response, data;
        return regeneratorRuntime.async(function obtener1Character$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return regeneratorRuntime.awrap(fetch(url + "/api/people/" + id));

              case 3:
                response = _context3.sent;
                _context3.next = 6;
                return regeneratorRuntime.awrap(response.json());

              case 6:
                data = _context3.sent;
                setStore({
                  personaje: data
                });
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](0);
                console.log(_context3.t0);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, null, null, [[0, 10]]);
      },
      // Todos los planets
      obtenerPlanets: function obtenerPlanets() {
        var response, data;
        return regeneratorRuntime.async(function obtenerPlanets$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return regeneratorRuntime.awrap(fetch(url + "/api/planet"));

              case 3:
                response = _context4.sent;
                _context4.next = 6;
                return regeneratorRuntime.awrap(response.json());

              case 6:
                data = _context4.sent;
                //console.log(data.results)
                setStore({
                  planets: data.list_planet
                });
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                console.log(_context4.t0);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, null, null, [[0, 10]]);
      },
      //1 Planet
      obtener1Planet: function obtener1Planet(id) {
        var response, data;
        return regeneratorRuntime.async(function obtener1Planet$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return regeneratorRuntime.awrap(fetch(url + "/api/planet/" + id));

              case 3:
                response = _context5.sent;
                _context5.next = 6;
                return regeneratorRuntime.awrap(response.json());

              case 6:
                data = _context5.sent;
                setStore({
                  planet: data
                });
                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, null, null, [[0, 10]]);
      },
      // Favoritos
      addFavorites: function addFavorites(item) {
        var store = getStore();

        if (store.favoritos.includes(item)) {
          // Si esta incluido, que lo borre
          var actions = getActions();
          actions.removeFavorito(item);
        } else {
          setStore({
            favoritos: [].concat(_toConsumableArray(store.favoritos), [item])
          }); //console.log(store.favoritos)
        }

        console.log(getStore());
      },
      // Borra favorito
      removeFavorito: function removeFavorito(item) {
        var store = getStore(); //console.log(item)

        var sinEliminar = []; //setStore(store.favoritos.filter((elem) => elem !== item))
        //console.log(store.favoritos)

        sinEliminar = store.favoritos.filter(function (elem) {
          return elem !== item;
        }); //console.log(sinEliminar)

        setStore({
          favoritos: sinEliminar
        }); //console.log(store.favoritos)
      },
      //Registrarse
      registro: function registro(name, lastname, username, email, password) {
        var response, data;
        return regeneratorRuntime.async(function registro$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return regeneratorRuntime.awrap(fetch(url + "/api/registro", {
                  method: "POST",
                  body: JSON.stringify({
                    name: name,
                    lastname: lastname,
                    username: username,
                    email: email,
                    password: password
                  }),
                  headers: {
                    "Content-type": "application/json"
                  }
                }));

              case 3:
                response = _context6.sent;

                if (!(response.status === 200)) {
                  _context6.next = 11;
                  break;
                }

                _context6.next = 7;
                return regeneratorRuntime.awrap(response.json());

              case 7:
                data = _context6.sent;
                localStorage.setItem("token", data.access_token); //console.log(data)

                setStore({
                  auth: true
                });
                return _context6.abrupt("return", true);

              case 11:
                _context6.next = 16;
                break;

              case 13:
                _context6.prev = 13;
                _context6.t0 = _context6["catch"](0);
                console.log(_context6.t0);

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, null, null, [[0, 13]]);
      },
      getMessage: function getMessage() {
        var resp, data;
        return regeneratorRuntime.async(function getMessage$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return regeneratorRuntime.awrap(fetch(process.env.BACKEND_URL + "/api/hello"));

              case 3:
                resp = _context7.sent;
                _context7.next = 6;
                return regeneratorRuntime.awrap(resp.json());

              case 6:
                data = _context7.sent;
                setStore({
                  message: data.message
                }); // don't forget to return something, that is how the async resolves

                return _context7.abrupt("return", data);

              case 11:
                _context7.prev = 11;
                _context7.t0 = _context7["catch"](0);
                console.log("Error loading message from backend", _context7.t0);

              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, null, null, [[0, 11]]);
      },
      changeColor: function changeColor(index, color) {
        //get the store
        var store = getStore(); //we have to loop the entire demo array to look for the respective index
        //and change its color

        var demo = store.demo.map(function (elm, i) {
          if (i === index) elm.background = color;
          return elm;
        }); //reset the global store

        setStore({
          demo: demo
        });
      }
    }
  };
};

var _default = getState;
exports["default"] = _default;