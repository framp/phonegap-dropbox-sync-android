function WelcomeView(template) {

    this.initialize = function () {

        this.el = $('<div/>');

        this.el.on("click", '#btn-link', function(event) {
            DropboxSync.link();
            event.preventDefault();
        });
        
        this.el.on('click', '#btn-back', function(event) {
            app.showExitModal();
            event.preventDefault();
        });
         
    };

    this.render = function() {
        this.el.html(template());
        return this;
    };

    this.initialize();

};
