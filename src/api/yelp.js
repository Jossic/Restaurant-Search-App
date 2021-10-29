import axios from 'axios';

export default axios.create({
	baseURL: `https://api.yelp.com/v3/businesses`,
	headers: {
		Authorization:
			'Bearer PhYb3VpVStgiynziFJgOQfwvDFJEP3SZu_UGuhoQ3i925m4VR-tXufOakZFGooN4RyprkmRm4aAqM5qO47tCNvOBj3qsB6WUPXiqQDiJq9tVEfPPoBc7BcSwGyFsYXYx',
	},
});
