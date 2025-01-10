function Connection(textUrl: string, roomId: string) {
    return {
        connect() {
            console.log(`✅ Connecting to ${roomId}  room at ${textUrl} ...`);
        },
        disconnect() {
            console.log(`❌ Disconnected from  ${roomId} room at ${textUrl}`);
        }
    };
}
export default Connection;