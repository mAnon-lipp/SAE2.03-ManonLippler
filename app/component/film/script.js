let templateFile = await fetch("./component/film/template.html");
let template = await templateFile.text();

let Movie = {};

Movie.format = function (movie) {
        let html = template;
        html = html.replace("{{title}}", movie.name);
        html = html.replace("{{posterUrl}}", movie.image);
        return html;
};

export { Movie };