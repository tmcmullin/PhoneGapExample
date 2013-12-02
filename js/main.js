var app = {

	showAlert: function (message, title) {
    	if (navigator.notification) {
	        navigator.notification.alert(message, null, title, 'OK');
	    } else {
        	alert(title ? (title + ": " + message) : message);
    	}
	},
	//end of showAlert function

    findByName: function() {
    	var self = this;
    	this.store.findByName($('.search-key').val(), function(employees) {
	        $('.employee-list').html(self.employeeLiTpl(employees));
    	});
	},
    //end of findByName function

	initialize: function() {
    	this.homeTpl = Handlebars.compile($("#home-tpl").html());
		this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());
    	var self = this;
    	this.store = new MemoryStore(function() {
	        self.renderHomeView();
	    });
	},
    //end of initialize function
    
    renderHomeView: function() {
    	$('body').html(this.homeTpl());
    	$('.search-key').on('keyup', $.proxy(this.findByName, this));
	}
	//end of renderHomeView function
};

app.initialize();