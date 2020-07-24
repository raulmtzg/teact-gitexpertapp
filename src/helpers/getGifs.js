export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=8reBgpfGw36IL8G2Oh37CngG6D9Cncmx`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url, //El ? es para indicarle que si no viene no lo utilice
    };
  });
  return gifs;
};
