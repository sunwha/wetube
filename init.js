import app from "./app.js";

const POST = 4000;

const handleListening = () => console.log(`✅ Listening on: hettp://localhost:${POST}`);

app.listen(POST, handleListening);