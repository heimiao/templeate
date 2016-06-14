$(function() {
	$(".left_second_Menu ul>li").click(function() {
		var $this = $(this);
		if ($this.find("ul").html()) {
			if ($this.find("ul").is(":hidden")) {
				$this.find("ul").slideDown();
				$this.addClass("blueLine");
				$this.find("a img").attr("src", $this.find("a img").attr("src").replace(/close/, "open"));
			} else {
				$this.find("ul").slideUp();
				$this.removeClass("blueLine");
				$this.find("a img").attr("src", $(this).find("a img").attr("src").replace(/open/, "close"))
			}
		}
	})
})