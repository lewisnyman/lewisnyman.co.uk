---
layout: post
title: Stepping away from Drupal Core
tags: Drupal
---

At the end of last year, I submitted a patch to [remove myself from Drupal's maintainers.txt.](https://www.drupal.org/node/2627534) I wanted a little more time to understand my feelings, motivations, and goals before putting them into a post. It's taken a while to get round to.

After Drupal 8 was released, I had an opportunity to reflect. I had time and space to think about how I got into contribution and how it lead me to be where I am now.

## 2011: Contribution through design
I first got involved in contribution in 2011, at that time I was interested in mobile UX, which was a new challenge at the time.

At DrupalCon London, I ran a [mobile usability testing sprint.](https://groups.drupal.org/node/161559) You can still [Read the report here.](https://groups.drupal.org/node/188744)

I continued to research [potential solutions](https://groups.drupal.org/node/191593) into the problems in the usability group. I started prototyping a north star of Drupal's mobile UX. You can still [view the source code.](https://github.com/lewisnyman/Drupal-Mobile-HTML-Prototype)

This was a reflection of the kind of the ideal work I wanted to do in my work life. Combining basic code and design to test complex interactions. Mobile prototyping has come a long way since 2011.

## 2012: Contribution through code

I iterated on this prototype with other designers in the community, I hit a roadblock getting this work implemented into Drupal Core, so I started exploring contribution through code. I had a decent grasp of HTML and CSS, even if I didn't understand Drupal or it's theme system very well.

I worked on my [first Drupal core issue](https://www.drupal.org/node/1468582) in 2012 at DrupalCon Denver, with help from [JohnAlbin,](https://www.drupal.org/u/johnalbin) [dcmouyard,](https://www.drupal.org/u/dcmouyard) and [Schnitzel.](https://www.drupal.org/u/schnitzel)

Spurred on by tangible progress and the elevating feeling of contribution. I worked on many other issues that included design and code together. A highlight is the [install redesign issue.](https://www.drupal.org/node/1337554)

I was really tempted to mix design and code together in the issue queue. The separation between the design process and implementation was a big issue we tried to tackle in the [design initiative.](https://groups.drupal.org/drupal-design/d8di) I didn't want to risk my design work just sitting there and never implemented.

Working on self-contained issues felt like progress, but I struggled to make a high level impact that I aimed for in the mobile prototyping. Issues are great for iteratively improvement, but I couldn't figure out how to make larger changes to the entire UI to meet mobile user needs and expectations.

## 2013: Maintaining the Seven theme

Enter the [Seven Style Guide](https://groups.drupal.org/node/283223). A redesign of Drupal's admin theme. Based on a component based design approach with high level guidelines on how to use them. Of course, it was intended to be mobile friendly from the beginning.

This was my chance to make a big impact! The Seven Style Guide can re-build the desktop and mobile UX in a way piecemeal issues can not. I was freelancing at the time, and had the opportunity to put a lot of time into getting the style guide into Drupal 8.

I spent a lot of time figuring out how to implement Seven's new design, wrasslin with Drupal's theme system to implement a component-based design system. We started to run into road bumps in the implementation process, we needed an [active maintainer for Seven.](https://www.drupal.org/node/2022927)

> I’d recommend @LewisNyman for the maintainer role. He has worked on the new Style Guide as hard as I have, and I know he wants to get this work into core.
> [Ryan Frederick](https://www.drupal.org/u/ry5n)

## 2014: Deeper and deeper into Drupal's internals

As we implemented the Seven redesign, I learned more and more about Drupal's theme system. While figuring out how to add a class here and there, I had to learn alot about how Drupal's markup is generated. This means diving into a lot of the internals of Drupal. I've always been happy learning new things and I like to explore without a lot of forethought. This was challenging but didn't feel impossible.

## 2015: Maintaining CSS, getting Drupal 8 over the line

After you spend enough time working within one area, you start to understand the weaknesses and pain points deeply. The value in refactoring and cleaning up the system becomes much higher. It became really clear that the problems of implementing the new Seven Theme design were affected by CSS coming out of Drupal's modules and base theme.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Sometimes you set out to fix a problem and realise that the cause of the problem is systemic. Fix the system, fix the problem. Years later.</p>&mdash; Lewis Nyman (@lewisnyman) <a href="https://twitter.com/lewisnyman/status/563276187125178368">February 5, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I opened an issue to [add an active maintainer for CSS.](https://www.drupal.org/node/2417089) Then everyone suggested me. At the time there were 13,836 lines of CSS and 846 CSSLint errors in Drupal Core...

> *Draws the sword* Lewis kneel and accept the world of CSS pain on your shoulders.
> [MortenDK](https://www.drupal.org/u/mortendk)

## Reflection

In hindsight, it's  clear how far I strayed from my original intentions in the name of getting the job done. When I was freelancing, I wondered why it was so difficult to find design and UX work, but I could land any frontend Drupal related work without effort. The work I was focusing on on in my spare time influenced my daily work. I was building a reputation as a Drupal frontend expert.

It took me a few years to realise I was spreading myself very thin between UX/Design/Frontend/Drupal. Far away from a “T-shaped” person and more like a awkward rectangle.

All these outcomes were produced completely by my own decisions and my personal priorities at the time. It's interesting to think about the external factors that influenced this. Drupal 8 was a monumental release, and required many contributors to go over the line to make sure their work was in a good shape it could be on release. I'm glad that the community has already solved this problem, with smaller, iterative, releases.

There's a sense of pride and self-esteem gained from contribution and community. I felt selfless, putting the needs of others who use the software over my personal goals. The pseudo-celebrity status of being a maintainer gave me a confidence boost. The frontend community in Drupal is a lot better than it used to be but it's still small. It's easy to feel like a big fish if the pond is small. I felt a big obligation to go to key Drupal events, at the expense of design-focused events.

## Looking forward with fresh eyes

After five years of contribution, I almost of continued to go through the motions, planning to go to the same Drupal events out of this sense of obligation. My buddy at Wunder, the heroic [Steve Parks,](https://twitter.com/steveparks) urged me to take some time to reconsider, and put some real thought into what I wanted to achieve this year instead of repeating the year before. This was the trigger that caused me to reassess everything I had done in the past five years. I'm super-grateful to Steve for this.

## 2016 objectives

I've spent the last several months figuring out what I want to do.

1. Take some time away from Drupal and spend that time on re-aligning my career
2. Re-invest all the time and money I would of spent contributing in pushing my career in the direction I'm looking for. This means going to a lot less Drupal events :(
3. Define boundaries for how deeply I get involved into Drupal Core development in the future, if I choose to get involved again

I knew instantly that I had to take some drastic and immediate steps.

1. Halt all code contribution to Drupal Core
2. Step down as a maintainer of the Seven Theme and CSS, as I wanted maintainers.txt to reflect reality
3. Unfollow all issues on drupal.org. I was following about 350 issues, a lot of them were in-active

I'm still figuring out how I want my “T-shape” to grow, but now I have time and space to figure that out. I'm very excited for this year and I feel like I'm firmly in control of my future.

Thanks to everyone who reached out to me after hearing I was stepping down as a maintainer. I'm sorry it took this long to write this post, but I needed time to talk to others and fully understand my own thoughts.

Thanks for the support and maybe I'll see you soon.
