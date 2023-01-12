import { useReducer } from "react";
// import { render as renderAmis } from "amis";
// import { ToastComponent, AlertComponent, alert, confirm, toast } from 'amis-ui';
import { Button, Banner } from "@shopify/polaris";
import { data } from "./data";
import { mapData } from "./map";
import './App.css';

// 处理 初始state
function init(initialCount) {
  return { count: initialCount };
}

// 处理 state 更新规则的函数，并返回新的 state
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function App({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  // const bodyData = data.map((item) => ({
  //   ...item.field,
  //   name: mapData[item.field.type],
  //   type: mapData[item.field.type],
  //   value: item.field.default,
  // }))
  console.log(state, 'state');
  return (
    <div className="App">
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      {/* <p>通过amis渲染的UI</p> */}
      {/* {renderAmis(
        {
          "type": "page",
          body: [
            {
              "type": "form",
              "body": bodyData
            },
            {
              "type": "tpl",
              "tpl": "Hello World11111111!"
            },
            {
              "name": "mycustom",
              "asFormItem": true,
              "children": () => (
                <div>
                  <span>这个是个自定义组件:</span>
                  <Button plain> 随机修改 </Button>
                  <Banner title="Order archived" onDismiss={() => { }}>
                    <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
                  </Banner>
                </div>
              )
            },
            {
              "type": "divider"
            },
            {
              "type": "form",
              "body": [
                {
                  "type": "input-text",
                  "name": "name",
                  "label": "姓名"
                },
                {
                  "type": "input-text",
                  "name": "name",
                  "label": "姓名11111"
                }
              ]
            }
          ]
        }
      )} */}
    </div>
  );
}

export default App;
