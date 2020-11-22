import * as express		from 'express';
import { getStats }		from './stats';
import { getVersionFromPackageJson } from './version';


const app = express();

app.listen({port:20200}, () => {
	const version = getVersionFromPackageJson();
	console.log(`Heartbeat ${version}.  Listening on port 20200.`);
});

app.get('/', (res,req) => {
	getStats().then(stats => req.json(stats));
});
