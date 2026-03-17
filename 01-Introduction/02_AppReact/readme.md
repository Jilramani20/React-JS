What is CDN ?
It means content delivery network.

Let's first underdand why we need CDN ?
Whe we use servers to host our files, the servers are located in specific geographical locations. So when a user tries to access our website, the request has to travel all the way to the server and back. This can cause delays and slow down the loading time of our website.

so first we created mirror servers in different geographical locations. So when a user tries to access our website, the request is routed to the nearest mirror server. This reduces the distance the request has to travel and speeds up the loading time of our website.

but maintaining mirror servers is expensive and main server has to update all the mirror servers whenever there is a change in the main server. So to solve this problem, we use CDN.

How does CDN work ?
now when ever a user access the server, the request is routed to the nearest CDN server. It update the main server and stores a copy of the files in its cache. so when other users try to access the same files and the nearest CND server has the files in its cache, it servers the files from its cache instead of going to the main server. This reduces the load on the main server and speeds up the loading time of our website. if the nearest CDN server does not have the files in its cache, it goes to the main server to get the files and then stores a copy of the files in its cache for future requests.

CDN only stores static files like images, CSS, JS files etc. It does not store dynamic files like PHP, ASP etc. like the subscriber count on youtube is dynamic file. it changes every second. so CDN cannot store it. but it stores the video file which is static file.