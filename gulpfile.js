let gulp = require("gulp");
let sass = require("gulp-sass");
let ts = require("gulp-typescript");
let tsProject = ts.createProject("tsconfig.json");

gulp.task("tsc", () => {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist/js"));
})

gulp.task("sass", () => {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sass.sync({outputStyle: "expanded"}).on("error", sass.logError))
        .pipe(gulp.dest("./dist/css"));
});

gulp.task("public", () => {
    return gulp.src("./src/public/**/*")
        .pipe(gulp.dest("./dist/public"));
});

gulp.task("watch", () => {
    gulp.watch("./src/scss/**/*.scss", gulp.series("sass"));
})

gulp.task("default", gulp.parallel("tsc", "sass", "public", "watch"));