import {
	src,
	dest
} from "gulp";
import plumber from "gulp-plumber";
import uglifyBabel from "gulp-terser";
import babel from "gulp-babel";
import rename from "gulp-rename";
import sourcemap from "gulp-sourcemaps";

export const jsTask = () => {
	return src(["src/js/*.js"])
		.pipe(sourcemap.init())
		.pipe(plumber(function (err) {
			// console.log(err);
			console.log("========= ERROR! =========");
			console.log("")
			console.log("Name: " + err.name)
			console.log(err.message);
			console.log("")
			console.log("=========================");
			this.emit('end');
		}))
		.pipe(babel({
			presets: ["@babel/preset-env"]
		}))
		.pipe(uglifyBabel({
			mangle: false,
		}))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(sourcemap.write("."))
		.pipe(dest("dist/js"))
}

module.exports = jsTask;