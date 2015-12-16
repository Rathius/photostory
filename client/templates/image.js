

Template.imagerow.events({
    'click .remove-image': function(event){
        if(confirm("Are you sure?")){
            Meteor.call('deleteImage', this._id);
            
            FlashMessages.sendSuccess("Image Removed");
            
            // Prevent submit
            return false;
        }
    }
});