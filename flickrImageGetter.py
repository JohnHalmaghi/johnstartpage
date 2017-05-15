import flickrapi

api_key = u'0c5d918b8ac84cb5c74f0785d71232ec'
api_secret =u'3001b1e1095a205c'


flickr = flickrapi.FlickrAPI(api_key, api_secret, format='parsed-json')
sets= flickr.photosets.getList(user_id='73509078@N00')
title= sets['photosets']['photoset'][0]['title']['_content']

print('First set title: %s' % title)


#set = flickr.galleries.getPhotos(gallery_id='72157679773554794')
#title = set['photos']['photo'][0]['title']['_content']
#for photo in flickr.galleries.getPhotos(gallery_id='72157679773554794'):
 #   print 'https://www.flickr.com/photos/'

#https://www.flickr.com/photos/126542062@N08/33072097254/in/gallery-flickr-72157679773554794/
print 'https://www.flickr.com/photos/'
