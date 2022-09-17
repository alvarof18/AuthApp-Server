const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '481804638230-s75lsllvm27gpbdlhj8hvf01ip5ffvbh.apps.googleusercontent.com';
const CLIENT_ID_ANDROID = '481804638230-jc4moqv4utag1nina65r49muc0tsu3j6.apps.googleusercontent.com';


const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token) => {
try {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: [CLIENT_ID, CLIENT_ID_ANDROID],  
        // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    // const userid = payload['sub'];
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
    // console.log(payload);
    return {
        name: payload['name'],
        email: payload['email'],
        picture: payload['picture']
    }
} catch (error) {
    return null;
}
}

module.exports = {
    validarGoogleIdToken
}