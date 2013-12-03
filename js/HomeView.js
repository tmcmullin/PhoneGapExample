var HomeView = function(store) {
 
	this.render =  function() {
    	this.el.html(HomeView.template);
    	return this;
	};//end of render function

	this.findByName = function() {
	    store.findByName($('.search-key').val(), function(employees) {
	        $('.employee-list').html(HomeView.liTemplate(employees));
	        if (self.iscroll) {
	            console.log('Refresh iScroll');
	            self.iscroll.refresh();
	        } else {
	            console.log('New iScroll');
	            self.iscroll = new iScroll($('.scroll', self.el)[0], {hScrollbar: false, vScrollbar: false });
	        }
	    });
	};//end of findByName function
 
	this.initialize = function() {
        // Define a div wrapper for the view. The div wrapper is used to attach events.
        this.el = $('<div/>');
        this.el.on('keyup', '.search-key', this.findByName);
    };//end of initialize function
    
    
    
	
	//call initialize function
    this.initialize();
	
}

//create objects that contain compiled html code that is stored inside index.html
//allows dynamic viewing to be able to call these objects for redrawing the UI
//HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());