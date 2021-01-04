import * as os			from 'os';
import * as diskUsage	from 'diskusage';

export interface Pulse {
	hostname:string,
	date:Date,
	ping?:number				// ms round-trip time
	load: number[],
	uptime: {
		process: number,		// seconds
		system: number			// seconds
	},
	memory: {
		free: number			// GB
		total: number			// GB
	},
	disk: {
		free: number			// GB
		total: number			// GB
	}
};

export async function getPulse():Promise<Pulse> {
	const byteToGigaByte = 1/(1024*1024*1024);
	const usage = await diskUsage.check('/');
	const pulse = {
		hostname: os.hostname(),
		uptime: {
			process: Math.round(process.uptime()),
			system: os.uptime(),
		},
		load: os.loadavg(),
		memory: {
			free: os.freemem()*byteToGigaByte,
			total: os.totalmem()*byteToGigaByte
		},
		disk: {
			free: usage.available*byteToGigaByte,
			total: usage.total*byteToGigaByte
		},
		date: new Date()
	};
	return pulse;
}
