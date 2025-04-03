let templateFile = await fetch("./component/film/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (movies) {
  let html = template;
  movies.forEach((movie) => {
    html = html.replace("{{title}}", movie.name);
    html = html.replace("{{posterUrl}}", movie.image);
    html += movieHtml;
  });
  return html;
};

export { Movie };
