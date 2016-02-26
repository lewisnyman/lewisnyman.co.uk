---
layout: post
title: Moving from Github pages to self hosted Jekyll
tags: indieweb
---

Last year I [migrated this site to Jekyll.]({% post_url 2014-01-03-hello-jekyll %}) One of the reasons was I really didn't want to worry about my own server, and the option was there to use Github pages for free.

I have a custom build process for my site, using Grunt. This meant I couldn't take full advantage of the automated build process of Github pages. I built the site on my local machine and used [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control) to deploy this to a [separate github repo.](https://github.com/lewisnyman/lewisnyman.github.io) Not pretty but it works.

Recently, I've been feeling the need to own my server again. It's a pain having to build on my own machine, meaning I'm tied to it for creating content.

As I want to [move towards publishing more content](({% post_url 2015-07-15-indie-web-camp-2015 %})) on this site I need to make it more flexible. I thought about introducing support for [notes](http://indiewebcamp.com/note) and [micropub](http://indiewebcamp.com/micropub) and realised that having an automated build process was a blocker.

I also want to start pulling in all my data from other services I use and maybe doing something cool (eg. [gyrosco.pe](https://gyrosco.pe)) . To do that, I'm going to need a persistent server somewhere storing and serving data.

This was my process:

1. Install Nginx and setup a folder that serves HTML from test.lewisnyman.co.uk (for now)
2. Install build dependencies (RVM, NPM, Bundler, Sinatra, etc)
3. Create a build script that runs a Sinatra server, nginx forwards all requests to api.lewisnyman.co.uk to there.
4. Setup the Github webhook to hit the api endpoint on push
5. Debug the sinatra script for an hour

I'm happy to put the build script on github once it's tested and I know it's secure. It's very similar to the one in the tutorial [Automagic Multisite Server with Jekyll and Nginx on a DigitalOcean Droplet](http://petemichaud.github.io/2013/09/05/multisite-server-jekyll-digitalocean.html) but with less abstraction to keep it simple.

I used these tutorials and documentation to help me set up the Digital Ocean droplet and the build process. I want to write this up in more detail as simple tutorial for newbies.

Special thanks to the lovely [Joe Baker](https://twitter.com/joesb) for giving me some pointers.

* [How To Install Nginx on CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-centos-7)
* [Nginx beginners guide](http://nginx.org/en/docs/beginners_guide.html)
* [Automagic Multisite Server with Jekyll and Nginx on a DigitalOcean Droplet](http://petemichaud.github.io/2013/09/05/multisite-server-jekyll-digitalocean.html)
* [How To Install Node.js on a CentOS 7 server](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-a-centos-7-server)
* [Installing RVM](https://rvm.io/rvm/install)
* [Sinatra documentation](http://www.sinatrarb.com/documentation.html)
* [Deploying Automatically with Github WebHooks](https://jonathanstark.com/blog/deploying-code-automatically-with-github-webhooks)
* [Github webhooks](https://developer.github.com/webhooks/)
