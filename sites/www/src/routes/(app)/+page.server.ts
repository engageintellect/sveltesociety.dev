import { CollectorService } from 'sveltesociety.dev-service/src/collector.js';
import { ConnectedService } from 'sveltesociety.dev-service/src/services/society-stats-service.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// TODO: get user info from request (cookie?)
	const userId = undefined;

	const collectorService = new CollectorService(new ConnectedService(userId));

	return {
		items: await collectorService.getAllInformation([
			{ type: 'package', identifier: '@sveltejs/kit' },
			{ type: 'video', identifier: 'xCeYmdukOKI' },
			{ type: 'video', identifier: '330781388' },
			{ type: 'recipe', identifier: 'xxx' },
			{ type: 'package', identifier: 'svelte' },
			{ type: 'package', identifier: 'svelte-atoms' }
		])
	};
};
