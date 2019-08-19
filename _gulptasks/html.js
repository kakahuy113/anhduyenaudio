import {
	src,
	dest
} from "gulp";
import pug from "gulp-pug";
import plumber from "gulp-plumber";

export const pugTask = () => {
	return src([
			"src/pages/*.pug",
			"!src/pages/\_*.pug"
		])
		.pipe(plumber(function (err) {
			console.log("========= ERROR! =========");
			console.log("")
			console.log("Name: " + err.name)
			console.log(err.msg);
			console.log("Filepath: " + err.filename);
			console.log("Line: " + err.line);
			console.log("")
			console.log("=========================");
			this.emit('end');
		}))
		.pipe(pug({
			pretty: "\t",
		}))
		.pipe(dest("dist"))
};

module.exports = pugTask;