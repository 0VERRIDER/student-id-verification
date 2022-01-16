module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    db_name: process.env.DB_NAME,
    db_key:process.env.DB_KEY,
    db_port:process.env.DB_PORT,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    host_address: process.env.PUBLIC_HOST,
    jwt_token_key:process.env.JWT_TOKEN_KEY,
    cloudinary_url:process.env.CLOUDINARY_URL,
    cloudinary_key:process.env.CLOUDINARY_KEY,
    cloudinary_preset:process.env.CLOUDINARY_PRESET,
    email_client_url : process.env.EMAIL_CLIENT_URL,
    form_rec_url :process.env.FORM_REC_URL,
    form_rec_key:process.env.FORM_REC_KEY
  },
}
