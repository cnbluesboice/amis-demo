import { render as renderAmis } from "amis";
import { ToastComponent, AlertComponent, alert, confirm, toast } from 'amis-ui';
import { Button, Banner } from "@shopify/polaris";
import { data } from "./data";
import { mapData } from "./map";
import './App.css';

function App() {
  const bodyData = data.map((item) => ({
    ...item.field,
    name: mapData[item.field.type],
    type: mapData[item.field.type],
    value: item.field.default,
  }))
  return (
    <div className="App">
      <p>通过amis渲染的UI</p>
      {renderAmis(
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
      )}
    </div>
  );
}

export default App;
