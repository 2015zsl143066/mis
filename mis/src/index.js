import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/login'));
app.model(require('./models/sucess'));
app.model(require('./models/change'));
app.model(require('./models/detail'));
app.model(require('./models/search'));
app.model(require('./models/label'));
// 4. Router
app.router(require('./router'));


// 5. Start
app.start('#root');
