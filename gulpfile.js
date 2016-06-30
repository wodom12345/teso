var gulp=require("gulp"),
	webpack=require("gulp-webpack"),
	webpackConfig=require("./webpack.config.js");
	
	gulp.task("build",function(){
		gulp.src("./main.js").
		pipe(webpack(Object.create(webpackConfig))).
		pipe(gulp.dest("./build/"))
	})


var server=require("gulp-webserver");
	gulp.task("server",function(){
		gulp.src("./").
		pipe(server({
			livereload:true,
			open:true,
			directoryListing:true
		}))
	})

	gulp.task("watch",function(){
		gulp.watch("./aaa.less",["build"]);
	})
	gulp.task("default",["build","watch","server"])