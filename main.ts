Deno.serve(async () => {
    const response = await fetch(new URL("./Readme.md", import.meta.url));
    const headers = new Headers(response.headers);
    headers.set("Content-Type", "text/markdown; charset=utf-8");
    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: headers
    });
});