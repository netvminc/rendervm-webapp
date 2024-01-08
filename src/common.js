export const config = {
    serverAddresses: [
        "wss://rendervmserver.l5.ca",
    ],
    chatSound: "https://computernewb.com/collab-vm/notify.ogg",
    // What XSS implementation the server uses
    // 0: No XSS (cvm1.2.11)
    // 1: Internal fork style (cvm1.ts, global opcode 21)
    // 2: yellows111/collab-vm-server style (per-user opcode 21)
    xssImplementation: 1,
}
