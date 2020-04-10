const {chain} = require('bottender');
const dialogflow = require('@bottender/dialogflow');

const inventoryData = {
  '抱枕': 12,
  '貼紙': 0
};

async function queryInventory(context, props) {
  const name = props.parameters.fields.product_name.stringValue;
  const inventory = inventoryData[name];

  if (inventory=== undefined) {
    await context.sendText(`我們沒有賣${name}唷`);
    return;
  }
  if (inventory > 0) {
    await context.sendText(`${name}只剩下最後${inventory}個了!要買要快!`);
  } else {
    await context.sendText(`${name}已經賣完囉，到貨實在通知您～`);
  }
}

async function queryBusinessHours(context) {
  await context.sendText('我們從早上10點營業到晚上10點唷！');
}

async function others(context) {
  await context.sendText('蛤?');
}
const dialogflowAction = dialogflow({
  projectId: process.env.GOOGLE_APPLICATION_PROJECT_ID,
  actions: {
    queryInventory,
    queryBusinessHours
  }
});
module.exports = async function App(context) {
  return chain([
    dialogflowAction,
    others,
  ]);
};