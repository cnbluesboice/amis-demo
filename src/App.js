import { render as renderAmis } from "amis";
import { ToastComponent, AlertComponent, alert, confirm, toast } from 'amis-ui';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>通过amis渲染的UI</p>
      {renderAmis(
        {
          "type": "page",
          "body": [
            {
              "type": "tpl",
              "tpl": "Hello World!"
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
                  "label": "姓名"
                },
                {
                  "type": "input-text",
                  "name": "name",
                  "label": "姓名"
                },
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
