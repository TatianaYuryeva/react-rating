"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Stars_1 = __importDefault(require("./components/Stars"));
require("./App.css");
const count = 5;
function App() {
    return (<div className="App">
      {typeof count === 'number' ? <Stars_1.default count={count}/> : undefined}
    </div>);
}
exports.default = App;
//# sourceMappingURL=App.jsx.map