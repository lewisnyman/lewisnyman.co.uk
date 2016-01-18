---
layout: post
title: Should Drupal add (another) JS framework into core? Not in the name of UX.
tags: drupal
---

There has been a conversation going on in the Drupal community on which Javascript framework should be added into core. Dries started the conversation with the post [Should we decouple Drupal with a client-side framework?](http://buytaert.net/should-we-decouple-drupal-with-a-client-side-framework). One of the key reasons is to improve the administrative user interface.

> As user experiences evolve from static pages to application-like experiences, end users' expectations of websites have become increasingly demanding. The Facebook newsfeed, the Gmail inbox, and the Twitter live stream are all compelling examples that form a baseline for the application-like experiences users now take for granted.
>
> Many of Drupal's administrative interfaces and Drupal sites could benefit from a similarly seamless, instantaneous user experience. 

The argument here is that people expect flashy wizz-bang user interfaces and slick user experiences, so let's skip the horse, the cart, go down the road, around the corner, call a taxi, and now let's decide which framework we should use to achieve that.

The are big problems with this process related to User Experience Design is that no one is even discussion what we would try and build and what it would look like. We advise our clients to understand their problem before spending time solutioneering, this is twelve levels deeper than that.

Drupal has a development driven culture as it always has. I'm not surprised people are more interesting in debating the framework of the week instead of looking at the problems it could be solving.

nod_ has taken time to move the [conversation a few steps back,](https://www.drupal.org/node/2651660) to actually look at the problems this framework would solve. This is still putting the cart infront of the horse.

You can translate “Investigate where and how a frontend framework could be used” into “Let's look for excuses to add a new Javascript library”. 

[Confirmation bias](http://www.sciencedaily.com/terms/confirmation_bias.htm):
> In psychology and cognitive science, confirmation bias (or confirmatory bias) is a tendency to search for or interpret information in a way that confirms one's preconceptions, leading to statistical errors.

We are asking the community to start searching through Drupal's admin interface for areas where a JS framework *could* benefit. If asked to I can also go through Drupal's admin interface looking for areas that could benefit from a telephone service. 

That's actually not a bad idea.

## What are our critical user experience issues?

When we advise our clients, we get them to focus on problems, user context, understanding, then solutions.

Last year we ran a [usability study](https://www.drupal.org/node/2497361) on Drupal 8. What were the biggest problems we found?

> Drupal uses weird words for everything, making Drupal extremely difficult to approach for new users.

> Wayfinding, or clues on how to get started, were lacking.

> Drupal uses weird words for everything. Compared to Wordpress you don't have to figure out how to place your block inside your view inside your region inside your homepage.

> User expected a much more fleshed-out basic install. Made Drupal appear limited in functionality.

> The options under the Add field drop-down describe the data you want to store, but the user was imagining the widget it would produce.

## None of these problems are fixed by a Javascript

We can spend weeks arguing about which framework to use, and years overhauling the admin interface to take advantage of all the new bells an whistles and most user still won't understand how to use Drupal. The effort to value ratio here is off the scale.

## Drupal's User Experience problems go far deeper than code

At Drupalcon Barcelona, I [presented on Drupal 8's user experience](https://events.drupal.org/barcelona2015/sessions/making-drupal-better-out-box-product-report-usability-testing-results-and-how) with [Bojhan Somers](https://www.drupal.org/u/bojhan) and [Angie Byron](https://www.drupal.org/u/webchick). In the second half of the presentation, we had an open and frank discussion about the big problems with Drupal's User Experience. [You can start watching at the 32:25 mark.](https://youtu.be/E31e5hzHMOE?t=32m25s)

The biggest problem with improving our user experience is process. As Angie mentions in the presentation:

> How normal people improve their products using the LEAN method is the chepaest way possible. Paper prototypes and things like that. Then they'll test out their solution on users. Then they'll ship really fast and see if it sticks.
>
> We don't do things like that. We start by building elaborate cathedrals and putting them into core, where they have pass the usability gate and the accessibility gate and all these things. 
>
> Once we have finally gotten it thorough all these tests, then it has to survive the bikeshed gauntlet. That's how we measure, by how many core developers hate this thing. If the answer is more than one then we change the design which makes more people happy but actually reduces effectiveness of the original design.
>
> Then we don't learn, because we don't talk to users. We just throw it out there with a major release. Instead of this build measure loop we just build in a horrible spiral.

It feels like the Drupal community is trying to catch up with the modern startup trends by looking at the code instead of the process they have. That's why Twitter, Gmail, Facebook, and Wordpress are so successful. They build, learn, iterate. Not because they rebuild on a fancy framework every so often.

Playing the “User Experience” card  as an excuse to keep building and re-building on new frameworks is missing the point.

