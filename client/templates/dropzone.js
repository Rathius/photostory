Template.dropzone.events({
    'dropped #dropzone': function(e){
        FS.Utility.eachFile(e, function(file) {
            var newFile = new FS.File(file);
            Images.insert(newFile, function(error, result){
                if(error){
                    FlashMessages.sendError('There was an issue with the upload');
                } else {
                    FlashMessages.sendSuccess('Image uploaded');
                }
            });
        });
    }
});