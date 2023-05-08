//postcss.config.cjs

const isObfscMode = process.env.NODE_ENV == "obfuscation";

module.exports = {
	plugins: [
		require("tailwindcss"),
		require("autoprefixer"),
		require("postcss-obfuscator")({
			enable: isObfscMode, // Force Run on Dev Env or when srcPath equals desPath.
			// fresh: true,
			srcPath: "src", // Source of your files.
			desPath: "out", // Destination for obfuscated html/js/.. files.
			extensions: [".jsx", ".js"],
			classPrefix: "msy-", // Prefix for obfuscated CSS class names.
			classMethod: "none",
			formatJson: true, // Format obfuscation data JSON file.
			callBack: function () {
				process.env.NODE_ENV = "production"; // make sure postcss-obfuscator doesnt run
			},
		}),
	],
};
