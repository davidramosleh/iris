iris.screen(function(self) {

	self.create = function() {
		self.tmpl("screen/example_instance.html");
		self.get("btncreateUI").click(instanceUi);
	}

	function instanceUi() {
		self.ui("container", "ui/example_basic.js");
		self.get("btncreateUI").remove();
	}
}, "screen/example_instance.js");