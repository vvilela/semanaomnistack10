const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
	async index(request, response){
		//search for devs on 10km radius
		//filter by tech
		//console.log(request.query);


		const { latitude, longitude, techs} = request.query;
		const techsArray = parseStringAsArray(techs);
		
		const devs = await Dev.find({
			techs: {
				$in: techsArray,
			},
			location: {
				$near: {
					$geometry: {
						type: 'Point',
						coordinates: [longitude, latitude],
					},
					$maxDistance: 10000,
				}
			}
		})

		return response.json({devs});
	}
}