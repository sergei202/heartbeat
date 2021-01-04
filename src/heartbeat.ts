import * as express						from 'express';
import { getPulse, Pulse }				from './pulse';
import { getVersionFromPackageJson }	from './version';

const app = express();

app.listen({port:20200}, () => {
	const version = getVersionFromPackageJson();
	console.log(`Heartbeat ${version}.  Listening on port 20200.`);
});

app.get('/', (res,req) => {
	getPulse().then(pulse => req.json(pulse));
});

getPulse().then(pulse => console.log('\n%o\n', pulse));
setInterval(() => getPulse().then(pulse => console.log('\n%o\n', pulse)), 60000);
