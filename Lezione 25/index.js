window.addEventListener("load", async () => {
    const result = await fetch("https://api.spotify.com/v1/me")

    console.log(result)
  });
  