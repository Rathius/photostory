Meteor.methods({
    addImageInfo: function(imageId, title, story){
        if(!Meteor.userId()){
            throw new Meteor.Error("Not Authorized");
        }
        
        ImageInfo.insert({
            title: title,
            story: story,
            imageId: imageId,
            imageUrl: '/cfs/files/Images/'+imageId,
            userId: Meteor.userId(),
            username: Meteor.user().profile.name,
            createdAt: new Date(),
            screenName: Meteor.user().services.twitter.screenName
        });
    },
    
    deleteImage: function(imageId){
        if(!Meteor.userId()){
            throw new Meteor.Error("Not Authorized");
        }
        
        Images.remove(imageId);
        ImageInfoId = ImageInfo.findOne({imageId:imageId})._id;
        ImageInfo.remove(ImageInfoId);
    }
})