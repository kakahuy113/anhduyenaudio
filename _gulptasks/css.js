import {
	src,
	dest
} from "gulp";
import sass from "gulp-sass";
import less from "gulp-less";
import cssnano from "cssnano";
import rename from "gulp-rename";
// import concat from "gulp-concat";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import sourcemap from "gulp-sourcemaps";
import cssSort from "css-declaration-sorter";
import {
	readFileSync
} from "graceful-fs";

export const cssTask = () => {

	const glob = JSON.parse(readFileSync("gulp.json"));
	const cssTaskOption = {};

	cssTaskOption["sass"] = {
		path: [
			// "src/components/_core/**.sass",
			// "src/components/_global/**.sass",
			// "src/components/**/**.sass",
			"src/components/**.sass",
			"!src/components/\_*.sass",
		],
		concatName: "main.sass",
		generator: sass.sync().on('error', sass.logError),
	};
	cssTaskOption["scss"] = {
		path: [
			// "src/components/_core/**.scss",
			// "src/components/_global/**.scss",
			// "src/components/**/**.scss",
			"src/components/**.scss",
			"!src/components/\_*.scss",
		],
		concatName: "main.scss",
		generator: sass.sync().on('error', sass.logError),
	};
	cssTaskOption["less"] = {
		path: [
			// "src/components/_core/**.less",
			// "src/components/_global/**.less",
			// "src/components/**/**.less",
			"src/components/**.less",
			"!src/components/\_*.less",
		],
		concatName: "main.less",
		generator: less(),
	};

	const cssGenerator = glob.config["css-generator"];
	
	return src(cssTaskOption[cssGenerator].path)
		.pipe(sourcemap.init())
		.pipe(plumber(function (err) {
			// console.log(err);
			console.log("========= ERROR! =========");
			console.log("")
			console.log("Name: " + err.name)
			console.log(err.formatted);
			console.log("")
			console.log("=========================");
			this.emit('end');
		}))
		// .pipe(concat(cssTaskOption[cssGenerator].concatName))
		.pipe(cssTaskOption[cssGenerator].generator)
		.pipe(postcss([
			autoprefixer({
				browsers: ["last 4 version", "IE 9"],
				cascade: false
			}),
			cssnano(),
			cssSort({
				order: "concentric-css",
			})
		]))
		.pipe(rename({
			suffix: ".min"
		}))
		.pipe(sourcemap.write("."))
		.pipe(dest("dist/css"))
}

export const waitToRead = (cb) => {
	setTimeout(() => {
		cssTask()
	},500)
	cb()
}

module.exports = waitToRead;