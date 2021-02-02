


    ```
    function getUtcTimestamp() {
        const now = new Date();
        const utcTimestamp = Date.UTC(
            now.getUTCFullYear(),
            now.getUTCMonth(),
            now.getUTCDate(),
            now.getUTCHours(),
            now.getUTCMinutes(),
            now.getUTCSeconds(),
            now.getUTCMilliseconds()
        );
        return `${parseInt(utcTimestamp / 1000, 10)}`;
    }
    ```
