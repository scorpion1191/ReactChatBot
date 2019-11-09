/* include chatbot module*/
const chatBot = require('../chatbot/chatbot');
module.exports = app => {

    app.get('/', (req, res) => {
        res.send({'hello': 'Johnny'})
    });

    app.post('/api/df_text_query', async (req, res) => {

        let responses = await chatBot.textQuery(req.body.text,req.body.parameters);
        res.send(responses[0].queryResult)
    });

    app.post('/api/df_event_query',async (req, res) => {
        let responses = await chatBot.eventQuery(req.body.event,req.body.parameters);
        res.send(responses[0].queryResult)
    });

    app.post('/api/df_sample_query', async (req, res) => {
        let responses = await chatBot.textQuery(req.body.text,req.body.parameters);
        res.send(responses[0].queryResult)
    });
}