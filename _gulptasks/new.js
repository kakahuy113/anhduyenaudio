import {
	appendFile,
	writeFile,
	mkdir
} from "graceful-fs";
import path from "path";

const createComponents = () => {
	mkdir("src/components", (err) => {
		if (err) throw err;
	});
	mkdir("src/components/_global", (err) => {
		if (err) throw err;
	});
	mkdir("src/components/_core", (err) => {
		if (err) throw err;
	});
	appendFile("src/components/_global/header.pug", "", (err) => {
		if (err) throw err;
	});
	appendFile("src/components/_global/footer.pug", "", (err) => {
		if (err) throw err;
	});
}


export const newSourceSass = (cb) => {
	createComponents()
	appendFile(path.join("src", "components", "_global", "header.sass"), "", (err) => {
		if (err) throw err;
	});
	appendFile(path.join("src", "components", "_global", "footer.sass"), "", (err) => {
		if (err) throw err;
	});
	appendFile(path.join("src", "components", "_core", "core.sass"), "", (err) => {
		if (err) throw err;
	});
	appendFile(path.join("src", "components", "main.sass"), "", (err) => {
		if (err) throw err;
	});
	writeFile(path.join("src","components", "main.sass"),
	`@import "_core/core.sass"\n@import "_global/header.sass"\n@import "_global/footer.sass"`)
	writeFile("gulp.json", "{\"config\":{\"css-generator\": \"sass\"}}", (err) => {
		if (err) throw err
	})
	cb()
}

export const newSourceLess = (cb) => {
	createComponents()
	appendFile(path.join("src", "components", "_global", "header.less"), "", (err) => {
		if (err) throw err;
	});
	appendFile(path.join("src", "components", "_global", "footer.less"), "", (err) => {
		if (err) throw err;
	});
	appendFile(path.join("src", "components", "_core", "core.less"), "", (err) => {
		if (err) throw err;
	});
	appendFile(path.join("src", "components", "main.less"), "", (err) => {
		if (err) throw err;
	});
	writeFile(path.join("src","components", "main.less"),
	`@import "_core/core.less";\n@import "_global/header.less";\n@import "_global/footer.less";`)
	writeFile("gulp.json", "{\"config\":{\"css-generator\": \"less\"}}", (err) => {
		if (err) throw err
	})
	cb();
}

export const newSourceScss = (cb) => {
	createComponents()
	appendFile(path.join("src", "components", "_global", "header.scss"), "", (err) => {
		if (err) throw err;
	});
	appendFile(path.join("src", "components", "_global", "footer.scss"), "", (err) => {
		if (err) throw err;
	});
	appendFile(path.join("src", "components", "_core", "core.scss"), "", (err) => {
		if (err) throw err;
	});
	appendFile(path.join("src", "components", "main.scss"), "", (err) => {
		if (err) throw err;
	});
	writeFile(path.join("src","components", "main.scss"),
	`@import "_core/core.scss";\n@import "_global/header.scss";\n@import "_global/footer.scss";`)
	writeFile("gulp.json", "{\"config\":{\"css-generator\": \"scss\"}}", (err) => {
		if (err) throw err
	})
	cb();
}

module.exports = {
	newSourceScss,
	newSourceSass,
	newSourceLess
}