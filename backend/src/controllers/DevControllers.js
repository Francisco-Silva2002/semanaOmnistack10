const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringasArray');
/*
    index - get lista
    show - get unico
    store - post
    update - put
    destroy - delete
*/

module.exports = {
    async index(request, response) {
        const dev = await Dev.find();
        return response.json(dev);
    },

    async store(request, response) {
        const { github_user, techs, latitude, longitude } = request.body;
        
        let dev = await Dev.findOne({ github_user });

        if(!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_user}`); /* Pode demorar */
        
            const { name = login, avatar_url, bio} = apiResponse.data;
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
        
            dev = await Dev.create({
                github_user,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }

        return response.json(dev);
    },
};