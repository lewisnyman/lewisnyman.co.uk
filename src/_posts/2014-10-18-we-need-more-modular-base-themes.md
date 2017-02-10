---
cross-post: https://medium.com/@lewisnyman/we-need-more-modular-base-themes-f3fcf3ea893f#.oct9e3ulm
layout: post
title: We need more modular base themes
---

As long as I've been working with Drupal there's always been a culture of [base themes.](https://www.drupal.org/node/323993) They are jumping off points for frontend developers or themers, maintained by the community.

In theory this sounds very close to the open source culture within the Drupal community. Why repeat steps when you can just build on the shoulders and experience of others?

But there's a big difference between base themes and Drupal modules. Base themes are broad in scope, they all aim to solve the workflow of Drupal theming. They encourage a tribal mentality. Everyone has their base theme of choice that aligns with their workflow. You're either right or you're wrong.

This does not gel with the spirit of open source. Every base theme implements it's own solution to common frontend problems. They don't share or reuse code between different base themes.

And what if your desired workflow doesn't fit with the selection of base themes available? What if you like the implementation of mobile meta tags in Omega but don't want all the grid nonsense? What if you like the cleanliness of Mothership but also Zen's sassyness?

I tried maintaining my own base theme when I first start working with Drupal 6. It was a mashup of Basic and Zen if my memory serves me correctly. Of course I don't use it anymore, maintaining a base theme was a nightmare.

So what choice do you have? One option is to roll your own, inline with your workflow. But the idea of everyone working in their own bubble doesn't sound open source at all.

The other option is to pick the base theme that is close enough to your workflow. Embrace the maintainer's overly prescriptive idea of the perfect frontend workflow.

This is not how the Drupal community usually works. You have a luxury of modules that you can combine and reuse together without conflict. If you want to use similar functionality together, you can package them in a distribution.

This is the direction modern frontend development is heading. Loosely coupled components pulled together using [Bundler,](http://bundler.io/) [npm,](https://www.npmjs.com/) or [Bower.](http://bower.io/) You have a pattern that you want to use again but with minor differences? Create a [Yeoman generator.](https://yeoman.io/generators/official.html)

We need this mentality in the Drupal theming community. We need to build modular tools that are reusable instead of requiring you to buy into someone else's philosophy.

Luckily, we are already seeing signs of base themes moving in this direction. The [Magic module](https://www.drupal.org/project/aurora) is a result of a collaboration between the maintainers of the [Aurora](https://www.drupal.org/project/aurora) and [Omega 4.x](https://www.drupal.org/project/omega) base themes. Instead of rewriting the same performance improvements in every base theme, why not share the code and improve them together.

The Magic module is already showing signs of a broad scope, after all, who can control magic? No one. I do hope it maintains a modular architecture that allows me to choose the benefits for myself instead of requiring a big buy into the maintainer's vision.

Maybe the concept of a base theme is flawed? I don't know. I'd love to see more collaboration between base theme maintainers because at the end of the day it would benefit all of us.
