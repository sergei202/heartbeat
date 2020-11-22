import { resolve }		from 'path';
import { readFileSync }	from 'fs';

export function getVersionFromPackageJson(path='../package.json'):string {
	var file = readFileSync(resolve(__dirname,path)).toString();
	var json = JSON.parse(file);
	return `v${json.version}`;
}
