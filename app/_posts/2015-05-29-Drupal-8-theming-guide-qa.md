---
layout: default
title: Drupal 8 theming guide Q & A
---

[Sander](http://www.sqndr.com/) asked me to answer a few questions for his [Drupal 8 theming guide](https://github.com/sqndr/d8-theming-guide/issues/17). It made sense to publish them here instead of including them in a Github comment.

## What is your job as maintainer of the Seven theme?
The job of a core component maintainer is [well documented.](https://www.drupal.org/contribute/core-maintainers#component) My primary role is to keep an overview of all the issues in the [Seven queue.](https://www.drupal.org/project/issues/drupal?component=Seven+theme) There are very few people who have this kind of overview, so it's useful to be able to point someone in the right direction if they come to be asking if a bug has already been reported or if a discussion has already happened.

I'm also responsible for making sure the issues are in a organised and in a good state to work on. I also have enough experience to review all the patches for Seven, checking them for quality and consistency.

## What are new features for the Seven theme in Drupal 8?
Seven's design has evolved in Drupal 8. [Ry5n,](https://www.drupal.org/u/ry5n) [Yoroy,](https://www.drupal.org/u/yoroy) and [Bojhan](https://www.drupal.org/u/bojhan) produced a style guide for which has improved the look-and-feel of the theme as well as providing a more stable and consistent base to make UX improvements across the many core modules. 

Some examples would be consistent use of different button types, dropbuttons, the new content creation layout, and the inline form errors.

## What does the future for the Seven theme look like? Drupal 8.1 — or future Drupal 9? Are there any current plans?
Seven has slowly embraced component based design. Using the principles of the style guide and our [new CSS standards,](https://www.drupal.org/coding-standards/css) a lot of the CSS in Seven is now using more abstract, reuseable, CSS components. I imagine that Seven will expand on these UI components in the 8.x point releases to cover more varied situations that we require in core and contrib.

In Drupal 9, well there's been [discussion on embracing component based design](https://events.drupal.org/losangeles2015/sessions/drupal-9-components-library-next-theme-system) throughout the whole of Drupal's theme system, not only the CSS.

If this happens in Drupal 9, Seven will likely become the first test case for this system.

We've also talked about adding more animation and "fanciness" to Seven, now we are in a more stable position with the CSS. We also joke about adding sound to the UI, you never know!

## Something we've been talking about is the style guide for Drupal. Has there been any progress?
We ran into some maintenance problems with the [original photoshop style guide](https://groups.drupal.org/node/283223) it was a pain to keep it up to date when the design evolved during implementation and beyond.

We've had a plan in place for a while to [document Seven's CSS components using KSS](https://www.drupal.org/node/2404111), which would be amazing as we could generate the style guide from core code, similar to the documentation on [api.drupal.org](https://api.drupal.org) and similar to the plans to [document Drupal core's Javascript.](https://www.drupal.org/node/2182153) We ran into a bit of a roadblock however, because the KSS syntax is quite different to Drupal's current commenting standards. There is still a lot of urgent work to do before Drupal 8 hits release candidate, which is when HTML and CSS changes are frozen, so this has taken a bit of a backseat for the time being.

## Some people find the name very confusing. What about you? If you could pick a name, what would that name be?
Over the years I think I've gone back and forth on the name. I think that a name is just a word that takes on the meaning we assign to it. Seven is the name of the administration theme that ships with Drupal, most people know that by now. Changing it now would invite more confusion.

If we were creating it now and choosing a name, I would probably stick with Bartik's tradition of naming it after a famous person. Maybe after one of those adolescent ninja turtles.

## What are the main challenges in building an administration theme for Drupal?
The biggest problem right now is the number of modules that require different user interfaces. Some modules make minor tweaks to the UI to meet their needs, some creating their own from scratch. It's very hard for an admin theme to support all these use cases without something breaking, let alone making the UX feel cohesive.

My dream is to have no admin CSS in modules at all. My realistic aim is to have minimal CSS. I want to keep building Seven into a really useful UI framework, and to continue educating module developers on when they should use the components available to them to create a great, consistent UX.
