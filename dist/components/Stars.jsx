"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stars = void 0;
const Star_1 = __importDefault(require("./Star"));
const Stars = ({ count = 0 }) => {
    if (count > 0 && count <= 5) {
        const items = new Array(count);
        for (let i = 0; i < items.length; i++) {
            items[i] = <li key={i}><Star_1.default /></li>;
        }
        return (<ul className="card-body-stars u-clearfix">
        {items}
      </ul>);
    }
};
exports.Stars = Stars;
exports.default = exports.Stars;
//# sourceMappingURL=Stars.jsx.map