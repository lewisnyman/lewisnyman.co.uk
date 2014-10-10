---
layout: default
title: Hello Jekyll
created: 1388763948
---

<p class="intro">Late last year I ported my personal site from Drupal to Jekyll. When I've mentioned this in passing to people I get odd looks.</p>

I'm a [Drupal 8 core maintainer](/blog/seven) which means I spend a lot of time improving Drupal. I also get paid to work with Drupal but moving off of Drupal for my personal site wasn't a tough decision at all, it made perfect sense.

Before I started at [WunderRoot](http://wunderroot.com) I had a nice chat over a pub lunch with one of the co-founders [Steve Parks](http://steveparks.co.uk). He was telling me about the company's commitment to the “right tool for the job”, be that internal or recommendations for clients, despite being a largely Drupal-focused agency.

He mentioned to me “We wouldn't use a project management tool built in Drupal, we'd use the best project management tool available, like Jira. We wouldn't use Drupal to build an internal network, we'd use the product for the job.”

“I guess your blog is built in Wordpress then?” I joked. Surprisingly I learnt that this was a serious consideration at the time. I was also unaware that Steve has moved his personal site to <del>Wordpress</del> [Jekyll](http://www.steveparks.co.uk/) for similar reasons.

Well informed, objective decisions impress me.

In the coming days I kept thinking about this conversation. What benefits was I getting out of using Drupal for my own personal site an were they worth the cost? Let's look at my requirements:

1. I care about HTML. Let's go into why another time. Good markup is good, agreed?
2. I don't need a WYSIWYG to create content. I wrote all my posts in HTML.
3. I don't have any complex data structures or requirements. The site is pretty minimal.
4. I like having control over the front-end output, where assets are loaded, and when. This means I can optimise the front-end performance using modern techniques without worrying about breaking the framework.
5. I don't know anything about server side performance. I was paying about £15 a month for [Pantheon hosting](https://www.getpantheon.com) just so I didn't have to worry about development workflow and caching and everything else that is out of my ballpark.

Looking at this list objectively, Drupal looks like a terrible fit. I wasn't doing Drupal any favours by using it for a purpose it didn't suit and I wasn't doing myself any favours by wading through PHP and config screens *removing* redundant CSS and markup.

Looking at this list objectively, a static site generator sounded right up my street. I'd used [Middleman](http://middlemanapp.com) before and loved it but I was well aware of the ubiquitous nature of Jekyll and decided it was popular enough be worthing checking out. I also found a very tasty [Yeoman generator for Jekyll](https://github.com/robwierzbowski/generator-jekyllrb) which included a ton of Grunt tasks for Compass, instant local server with LiveReload, various lints, and concatenation and minification of all-the-things from the get go. What a great opportunity to learn new techniques!

My Drupal theme was already built on Sass so moving that over was pretty easy. The [Drupal to Jekyll importer](https://github.com/jekyll/jekyll-import/blob/master/lib/jekyll-import/importers/drupal7.rb) was actually easier than I expected and worth using.

Next up: hosting. I was looking for an opportunity to use Heroku but found it was too yak-shavey just to serve HTML files. Github was the next obvious option as it is free and has built in support for Jekyll. By this point I had a pretty beefy `grunt build` task and it didn't look like Github could support that so instead I ended up creating [one repo for the source code](https://github.com/lewisnyman/lewisnyman.co.uk-source) and another that actually [hosts the site](https://github.com/lewisnyman/lewisnyman.github.io). I use the [Grunt build control task](https://github.com/robwierzbowski/grunt-build-control) to push the compiled and minified code to the hosting repo.

## Results

The main reason for moving house to Jekyll was to ease development and gain a tighter control over front-end performance. While I was porting over it did give me a chance to make some improvements. Let's compare the old and the new [homepage](/) (excluding Google Analytics and Typekit).

### HTML

* **Old:** — 2.6kb
* **New:** — 1.0kb

### CSS

* **Old:** — One request, 3.0kb
* **New:** — One request, 1.8kb

### Javascript

* **Old:** — Three requests, 43.6kb
* **New:** — Two requests, 5.432kb

I'm not saying you couldn't get better results than mine with Drupal but it is a lot harder to do so. I'm pretty happy with having all the control in the front-end. There are still more improvements to make and I'm looking forward to rolling out the next facets of the site design in 2014.





