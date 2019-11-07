const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const json = require('koa-json');
const Airtable = require('airtable');
const PORT = 8762;
const API_KEY = 'keyfOcxQtbUjUo97z';
const BASE_ID = 'appreDzARTl0u2j2a';

const app = new Koa();
const router = new KoaRouter();
const base = new Airtable({ apiKey: API_KEY }).base(BASE_ID);

app.use(json());
app.use(bodyParser());

router.get('/', index);
router.get('/help', help);

async function index(ctx) {
  const playersData = await base('players')
    .select({
      maxRecords: 10,
    })
    .all();
  return (ctx.body = { playersData });
}

async function help(ctx) {
  return (ctx.body = { msg: 'Help' });
}

app.use(router.routes()).use(router.allowedMethods());
app.listen(PORT || 8761, () =>
  console.log(`Server started on port ${PORT}...`)
);
