import CLIENT_ID from './soundcloud-client-id';
var SC = require('soundcloud');

SC.initialize({
    client_id: CLIENT_ID
});

export default SC;