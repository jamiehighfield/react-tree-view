export class Thread {
    /* Causes the thread to sleep. */
    static async sleep(timeOut: number): Promise<any> {
        await new Promise(resolve => setTimeout(resolve, timeOut));
    }
}