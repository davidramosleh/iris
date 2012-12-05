iris.screen(function (self) {

	var PARAM_VAL = "param_value";

	self.create = function() {

		self.tmpl("test/component/welcome.html", {param:PARAM_VAL});

		self.screen("screens", "#screen", "test/component/screen.js");

		self.on("template_params", templateParams);
		self.on("template_langs", templateLangs);

		// check screen properties
		window.strictEqual(self.id, "welcome-screen");
		window.deepEqual(self.con, $(document.body));
		window.strictEqual(self.fileJs, "test/component/welcome.js");
		window.strictEqual(self.uis.length, 0);

		window.start();

	};

	function templateLangs () {
		window.console.log(0);
		window.strictEqual(self.get("lang_values").text(), iris.translate("TEST"));
		window.start();
	}

	function templateParams () {
		window.strictEqual(self.get("param").text(), PARAM_VAL);
		window.start();
	}

});